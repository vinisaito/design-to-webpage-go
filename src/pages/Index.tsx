
import React from 'react';
import Sidebar from '../components/Sidebar';
import MainDashboard from '../components/MainDashboard';
import FloatingIcons from '../components/FloatingIcons';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 relative">
        <MainDashboard />
        <FloatingIcons />
      </div>
    </div>
  );
};

export default Index;
