import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingFallback from '../components/LoadingFallback';
import { useAuth } from '../context/AuthContext';

export default function OAuthCallback() {
  const [error, setError] = useState<string | null>(null);
  const { loginWithOAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Function to extract and process OAuth callback
    const processOAuthCallback = async () => {
      try {
        // Extract the code from URL
        const urlParams = new URLSearchParams(location.search);
        const code = urlParams.get('code');
        
        if (!code) {
          throw new Error('No authorization code found in the callback URL');
        }

        // Determine which provider the user came from
        // This is a simplified approach - in a real app you might use state parameter
        const isNewUser = localStorage.getItem('isNewUser') === 'true';
        const provider = location.pathname.includes('github') ? 'github' : 'linkedin';

        // In a real implementation, you would exchange this code for an access token
        // using your backend API
        // const tokenResponse = await api.post('/auth/token', { code, provider });
        // const accessToken = tokenResponse.data.access_token;

        // For demo purposes, we'll use the code as a mock token
        await loginWithOAuth(provider, code);

        // Redirect based on whether this is a new user
        navigate(isNewUser ? '/profile' : '/home');
      } catch (err) {
        console.error('OAuth callback processing failed:', err);
        setError(err instanceof Error ? err.message : 'Failed to authenticate with provider');
      }
    };

    processOAuthCallback();
  }, [location, loginWithOAuth, navigate]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-6 py-8 rounded-lg max-w-md text-center">
          <h2 className="text-xl font-medium mb-4">Authentication Error</h2>
          <p>{error}</p>
          <button type="button"
            onClick={() => navigate('/login')}
            className="mt-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return <LoadingFallback message="Completing authentication..." />;
}