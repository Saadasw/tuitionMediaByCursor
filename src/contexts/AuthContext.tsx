import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '@/types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string, role: 'student' | 'tutor') => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    // Mock login - in real app, this would call API
    setTimeout(() => {
      setUser({
        id: '1',
        email,
        name: email.split('@')[0],
        role: 'student'
      });
      setLoading(false);
    }, 1000);
  };

  const signup = async (email: string, password: string, name: string, role: 'student' | 'tutor') => {
    setLoading(true);
    setTimeout(() => {
      setUser({ id: Date.now().toString(), email, name, role });
      setLoading(false);
    }, 1000);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};