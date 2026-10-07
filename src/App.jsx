import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import { PetProvider } from './context/PetContext';
import { ToastProvider } from './context/ToastContext';

// Performance Optimization: Route-based code splitting using React.lazy
const HomePage = lazy(() => import('./pages/HomePage'));
const PetCatalogPage = lazy(() => import('./pages/PetCatalogPage'));
const PetDetailPage = lazy(() => import('./pages/PetDetailPage'));
const RemindersPage = lazy(() => import('./pages/RemindersPage'));
const ApiExplorerPage = lazy(() => import('./pages/ApiExplorerPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <PetProvider>
          <BrowserRouter>
            <div className="app-container">
              {/* Top Navigation */}
              <Navbar />

              {/* Main Routed Content with Suspense Loading Fallback */}
              <main className="main-content">
                <Suspense
                  fallback={
                    <div style={{ padding: '80px 20px' }}>
                      <LoadingSpinner message="Loading view..." />
                    </div>
                  }
                >
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/pets" element={<PetCatalogPage />} />
                    <Route path="/pets/:id" element={<PetDetailPage />} />
                    <Route path="/add-pet" element={<Navigate to="/pets" replace />} />
                    <Route path="/edit-pet/:id" element={<Navigate to="/pets" replace />} />
                    <Route path="/reminders" element={<RemindersPage />} />
                    <Route path="/api-explorer" element={<ApiExplorerPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </Suspense>
              </main>

              {/* Footer */}
              <Footer />
            </div>
          </BrowserRouter>
        </PetProvider>
      </ToastProvider>
    </ErrorBoundary>
  );
}
