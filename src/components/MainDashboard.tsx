
import React from 'react';
import { Shield, Check } from 'lucide-react';

const MainDashboard = () => {
  return (
    <div className="flex-1 p-8 bg-gray-800">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Shield className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-white text-2xl font-semibold">You're Protected</h1>
              <p className="text-gray-400 text-sm mt-1">
                Defender is actively protecting you against<br />
                malware, trojans, scareware, adware, ransomware<br />
                and other security threats
              </p>
            </div>
          </div>
        </div>
        
        <button className="text-green-400 text-sm underline mt-3 hover:text-green-300 transition-colors">
          Real-time protection settings
        </button>
      </div>

      {/* Laptop with Shield Display */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div className="w-80 h-48 bg-gray-700 rounded-lg border-4 border-gray-600 flex items-center justify-center">
            <div className="w-20 h-20 bg-green-500 rounded-lg flex items-center justify-center">
              <Shield className="text-white" size={32} />
            </div>
          </div>
          <div className="w-96 h-4 bg-gray-600 rounded-b-2xl -mt-1"></div>
        </div>
      </div>

      {/* Smart Scan Section */}
      <div className="bg-gray-900 rounded-lg p-6">
        <h2 className="text-green-400 text-xl font-semibold mb-3">Run a Smart Scan</h2>
        <p className="text-gray-400 text-sm mb-6 max-w-md">
          Our smart scan checks for malware, security & privacy issues, pc performance issues, system junk and duplicate files all with one click.
        </p>
        
        <div className="flex items-center justify-between">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Run a Scan
          </button>
          
          {/* Scan waves animation */}
          <div className="relative">
            <div className="w-32 h-20 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-gray-600 rounded-full animate-ping"></div>
                <div className="w-16 h-16 border-2 border-gray-600 rounded-full animate-ping animation-delay-200"></div>
                <div className="w-24 h-24 border-2 border-gray-600 rounded-full animate-ping animation-delay-400"></div>
              </div>
              <div className="w-4 h-4 bg-gray-600 rounded-full z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
