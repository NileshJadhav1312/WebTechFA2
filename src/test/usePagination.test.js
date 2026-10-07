import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { usePagination } from '../hooks/usePagination';

describe('usePagination Hook', () => {
  it('displays all items when count is <= 6 (View More Rule: 1-6 display all)', () => {
    const mockItems = Array.from({ length: 5 }, (_, i) => ({ id: i, name: `Pet ${i}` }));
    const { result } = renderHook(() => usePagination(mockItems, { pageSize: 6 }));

    expect(result.current.items.length).toBe(5);
    expect(result.current.isViewMoreMode).toBe(false);
    expect(result.current.isPaginationMode).toBe(false);
  });

  it('enables View More mode when count is 7-20 (View More Rule)', () => {
    const mockItems = Array.from({ length: 12 }, (_, i) => ({ id: i, name: `Pet ${i}` }));
    const { result } = renderHook(() => usePagination(mockItems, { pageSize: 6 }));

    expect(result.current.isViewMoreMode).toBe(true);
    expect(result.current.items.length).toBe(6);
    expect(result.current.hasMoreToView).toBe(true);

    // Expand on demand
    act(() => {
      result.current.handleViewMore();
    });

    expect(result.current.items.length).toBe(12);
    expect(result.current.hasMoreToView).toBe(false);
  });

  it('enables Pagination mode when count is > 20 (Large Dataset Rule)', () => {
    const mockItems = Array.from({ length: 25 }, (_, i) => ({ id: i, name: `Pet ${i}` }));
    const { result } = renderHook(() => usePagination(mockItems, { pageSize: 6 }));

    expect(result.current.isPaginationMode).toBe(true);
    expect(result.current.totalPages).toBe(5);
    expect(result.current.currentPage).toBe(1);
    expect(result.current.items.length).toBe(6);

    // Go to next page
    act(() => {
      result.current.nextPage();
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.canPrev).toBe(true);
  });
});
