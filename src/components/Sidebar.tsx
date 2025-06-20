
import React from 'react';
import { Shield, Fingerprint, Settings, User, Bug, Key } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Shield, active: true },
    { icon: Fingerprint, active: false },
    { icon: Settings, active: false },
    { icon: Key, active: false },
    { icon: User, active: false },
    { icon: Bug, active: false },
  ];

  return (
    <div className="w-16 bg-black flex flex-col items-center py-4 space-y-4">
      {/* Traffic lights */}
      <div className="flex space-x-1 mb-6">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      </div>
      
      {menuItems.map((item, index) => (
        <button
          key={index}
          className={`p-2 rounded-lg transition-all duration-200 hover:bg-gray-800 ${
            item.active ? 'bg-gray-800 text-green-400' : 'text-gray-500 hover:text-white'
          }`}
        >
          <item.icon size={20} />
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
