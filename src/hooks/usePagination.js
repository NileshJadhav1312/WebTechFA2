import { useState, useMemo, useCallback } from 'react';

/**
 * Custom hook with single responsibility: Pagination & View More state management.
 * Strictly adheres to View More Rule:
 * - 1-6 Items: Display all
 * - 7-8 Items: Display first 6 + Show "View More" button
 * - 9-20 Items: Display first 6 + Expand on demand in increments
 * - 20+ Items: Standard Pagination controls
 *
 * @param {Array} items
 * @param {Object} [options]
 * @param {number} [options.pageSize=6]
 * @param {number} [options.initialPage=1]
 */
export function usePagination(items = [], options = {}) {
  const { pageSize = 6, initialPage = 1 } = options;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [expandedCount, setExpandedCount] = useState(pageSize);

  const totalItems = items.length;

  // View Mode Determination according to rules
  const isViewMoreMode = totalItems > 6 && totalItems <= 20;
  const isPaginationMode = totalItems > 20;

  // Total pages for pagination mode
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  // Compute visible items based on current mode
  const visibleItems = useMemo(() => {
    if (totalItems <= 6) {
      return items;
    }

    if (isViewMoreMode) {
      return items.slice(0, expandedCount);
    }

    if (isPaginationMode) {
      const startIndex = (currentPage - 1) * pageSize;
      return items.slice(startIndex, startIndex + pageSize);
    }

    return items;
  }, [items, totalItems, isViewMoreMode, isPaginationMode, expandedCount, currentPage, pageSize]);

  // View More expand action
  const handleViewMore = useCallback(() => {
    setExpandedCount((prev) => Math.min(prev + pageSize, totalItems));
  }, [pageSize, totalItems]);

  const handleCollapse = useCallback(() => {
    setExpandedCount(pageSize);
  }, [pageSize]);

  // Pagination navigation actions
  const goToPage = useCallback((page) => {
    const target = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(target);
  }, [totalPages]);

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }, []);

  const resetPagination = useCallback(() => {
    setCurrentPage(1);
    setExpandedCount(pageSize);
  }, [pageSize]);

  const hasMoreToView = isViewMoreMode && expandedCount < totalItems;
  const isExpanded = isViewMoreMode && expandedCount > pageSize;
  const canNext = isPaginationMode && currentPage < totalPages;
  const canPrev = isPaginationMode && currentPage > 1;

  return {
    items: visibleItems,
    allItems: items,
    totalItems,
    currentPage,
    totalPages,
    pageSize,
    isViewMoreMode,
    isPaginationMode,
    hasMoreToView,
    isExpanded,
    canNext,
    canPrev,
    handleViewMore,
    handleCollapse,
    goToPage,
    nextPage,
    prevPage,
    resetPagination
  };
}
