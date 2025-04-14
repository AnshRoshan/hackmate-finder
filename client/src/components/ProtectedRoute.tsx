import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import LoadingFallback from './LoadingFallback';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking authentication status
    const checkAuth = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(checkAuth);
  }, []);

  if (isLoading) {
    return <LoadingFallback />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;