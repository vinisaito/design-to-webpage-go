
import React from 'react';
import Sidebar from '../components/Sidebar';
import MainDashboard from '../components/MainDashboard';
import FloatingIcons from '../components/FloatingIcons';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 relative">
        <MainDashboard />
      </div>
      <FloatingIcons />
    </div>
  );
};

export default Index;
