
import React from 'react';
import { Shield, User, Check } from 'lucide-react';

const FloatingIcons = () => {
  return (
    <>
      {/* Top right shield icon */}
      <div className="absolute top-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
        <Shield className="text-white" size={24} />
      </div>
      
      {/* Right side performance icon */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
        <div className="w-6 h-6 border-2 border-white rounded flex items-center justify-center">
          <div className="w-2 h-3 bg-white rounded-sm"></div>
          <div className="w-2 h-4 bg-white rounded-sm ml-1"></div>
          <div className="w-2 h-2 bg-white rounded-sm ml-1"></div>
        </div>
      </div>
      
      {/* Bottom center privacy icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
        <div className="relative">
          <User className="text-white" size={20} />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
            <Check className="text-green-500" size={12} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingIcons;
