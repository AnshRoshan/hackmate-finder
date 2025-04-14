import { type ReactNode, createContext, useContext, useEffect, useState } from 'react';

// User type definition
interface User {
  id: string;
  name: string;
  email: string;
  skills: string[];
  resumeUrl?: string;
  avatar?: string;
  githubUsername?: string;
  linkedinUsername?: string;
}

// Auth context type definition
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: { email: string; password: string }) => Promise<User>;
  signup: (userData: { email: string; password: string; name: string }) => Promise<User>;
  loginWithOAuth: (provider: string, token: string) => Promise<User>;
  logout: () => void;
  updateProfile: (profile: Partial<User>) => void;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => ({ id: '', name: '', email: '', skills: [] }),
  signup: async () => ({ id: '', name: '', email: '', skills: [] }),
  loginWithOAuth: async () => ({ id: '', name: '', email: '', skills: [] }),
  logout: () => {},
  updateProfile: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = !!user;

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem('hackmate_token');
        if (token) {
          // In a real app, you'd validate the token with your backend here
          
          // Load user profile from localStorage if available
          const storedProfile = localStorage.getItem('hackmate_profile');
          if (storedProfile) {
            try {
              setUser(JSON.parse(storedProfile));
            } catch (e) {
              console.error('Failed to parse user profile');
            }
          }
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Email/password login
  const login = async (credentials: { email: string; password: string }): Promise<User> => {
    setIsLoading(true);
    
    try {
      // This is a mock implementation. Replace with your actual API call
      // const response = await api.post('/auth/login', credentials);
      
      // Simulate API response delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      const mockUser: User = {
        id: '123',
        name: 'John Doe',
        email: credentials.email,
        skills: ['React', 'TypeScript'],
        avatar: `https://i.pravatar.cc/150?u=${credentials.email}`,
      };
      
      // Save token and user to localStorage
      const token = `mock_token_${Date.now()}`;
      localStorage.setItem('hackmate_token', token);
      localStorage.setItem('hackmate_profile', JSON.stringify(mockUser));
      
      // Update state
      setUser(mockUser);
      
      return mockUser;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Email/password signup
  const signup = async (userData: { email: string; password: string; name: string }): Promise<User> => {
    setIsLoading(true);
    
    try {
      // This is a mock implementation. Replace with your actual API call
      // const response = await api.post('/auth/signup', userData);
      
      // Simulate API response delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful signup
      const mockUser: User = {
        id: '123',
        name: userData.name,
        email: userData.email,
        skills: [],
        avatar: `https://i.pravatar.cc/150?u=${userData.email}`,
      };
      
      // Save token and user to localStorage
      const token = `mock_token_${Date.now()}`;
      localStorage.setItem('hackmate_token', token);
      localStorage.setItem('hackmate_profile', JSON.stringify(mockUser));
      
      // Update state
      setUser(mockUser);
      
      return mockUser;
    } catch (error) {
      console.error('Signup failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // OAuth login
  const loginWithOAuth = async (provider: string, token: string): Promise<User> => {
    setIsLoading(true);
    
    try {
      // This is a mock implementation. Replace with your actual API call
      // In a real app, you'd send the token to your backend to verify
      // const response = await api.post('/auth/oauth', { provider, token });
      
      // Simulate API response delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful OAuth login
      const mockUser: User = {
        id: '456',
        name: provider === 'github' ? 'GitHub User' : 'LinkedIn User',
        email: `user@${provider}.com`,
        skills: ['JavaScript', 'React'],
        avatar: `https://i.pravatar.cc/150?u=${provider}`,
        ...(provider === 'github' && { githubUsername: 'githubuser' }),
        ...(provider === 'linkedin' && { linkedinUsername: 'linkedinuser' }),
      };
      
      // Save token and user to localStorage
      localStorage.setItem('hackmate_token', token);
      localStorage.setItem('hackmate_profile', JSON.stringify(mockUser));
      
      // Update state
      setUser(mockUser);
      
      return mockUser;
    } catch (error) {
      console.error('OAuth login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('hackmate_token');
    localStorage.removeItem('hackmate_profile');
    setUser(null);
  };

  const updateProfile = (profile: Partial<User>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...profile };
    setUser(updatedUser);
    localStorage.setItem('hackmate_profile', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isLoading,
      login,
      signup,
      loginWithOAuth,
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
