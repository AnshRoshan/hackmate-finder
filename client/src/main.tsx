import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'primeicons/primeicons.css';

// Error boundary for the entire app
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("App crashed:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-gray-800 p-8 rounded-xl border border-red-500/30">
            <h1 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              The application encountered an unexpected error. Please refresh the page or try again later.
            </p>
            <pre className="bg-gray-900 p-4 rounded text-sm text-gray-400 overflow-auto max-h-60">
              {this.state.error?.toString()}
            </pre>
            <button  type='button'
              onClick={() => window.location.reload()}
              className="mt-6 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find root element');
createRoot(rootElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
