import React from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import Header from '@/components/layout/Header';
import MainContent from '@/components/MainContent';

const AppLayout: React.FC = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <MainContent />
      </div>
    </AuthProvider>
  );
};

export default AppLayout;