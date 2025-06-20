
import React from 'react';
import { Shield, Check } from 'lucide-react';

const FloatingIcons = () => {
  return (
    <>
      {/* Top right shield icon */}
      <div className="fixed top-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse z-10">
        <Shield className="text-white" size={20} />
      </div>
      
      {/* Right side performance icon */}
      <div className="fixed top-1/2 right-6 transform -translate-y-1/2 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10">
        <div className="w-5 h-5 border-2 border-white rounded flex items-center justify-center">
          <div className="flex space-x-0.5 items-end">
            <div className="w-1 h-2 bg-white rounded-sm"></div>
            <div className="w-1 h-3 bg-white rounded-sm"></div>
            <div className="w-1 h-1.5 bg-white rounded-sm"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom center privacy icon */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10">
        <div className="relative">
          <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-white rounded-full flex items-center justify-center">
            <Check className="text-green-500" size={8} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingIcons;
