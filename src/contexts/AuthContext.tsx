import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  login: (username: string, password: string) => void;
  register: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!Cookies.get('auth_token'));
  const [user, setUser] = useState<any | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const token = Cookies.get('auth_token');
    if (token) {
      setIsAuthenticated(true);
      // In a real app, you would validate the token and fetch user data
      setUser({ username: Cookies.get('username') });
    }
  }, []);

  const login = (username: string, password: string) => {
    // In a real app, you would validate credentials against a backend
    if (username && password) {
      Cookies.set('auth_token', 'dummy_token', { expires: 7 });
      Cookies.set('username', username, { expires: 7 });
      setIsAuthenticated(true);
      setUser({ username });
      toast({
        title: "Login successful",
        description: "Welcome back!",
      });
      navigate('/dashboard');
    }
  };

  const register = (username: string, password: string) => {
    // In a real app, you would send registration data to a backend
    if (username && password) {
      Cookies.set('auth_token', 'dummy_token', { expires: 7 });
      Cookies.set('username', username, { expires: 7 });
      setIsAuthenticated(true);
      setUser({ username });
      toast({
        title: "Registration successful",
        description: "Welcome to UCash!",
      });
      navigate('/dashboard');
    }
  };

  const logout = () => {
    Cookies.remove('auth_token');
    Cookies.remove('username');
    setIsAuthenticated(false);
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};