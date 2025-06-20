
import React from 'react';
import { Shield } from 'lucide-react';

const MainDashboard = () => {
  return (
    <div className="flex-1 p-6 bg-gray-800 relative">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Shield className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-white text-2xl font-semibold mb-2">You're Protected</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Defender is actively protecting you against<br />
              malware, trojans, scareware, adware, ransomware<br />
              and other security threats
            </p>
            <button className="text-green-400 text-sm underline mt-3 hover:text-green-300 transition-colors">
              Real-time protection settings
            </button>
          </div>
        </div>
      </div>

      {/* Laptop with Shield Display */}
      <div className="flex justify-center mb-12">
        <div className="relative">
          <div className="w-72 h-44 bg-gray-700 rounded-lg border-2 border-gray-600 flex items-center justify-center relative overflow-hidden">
            <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
              <Shield className="text-white" size={28} />
            </div>
            {/* Screen bezel */}
            <div className="absolute inset-2 border border-gray-500 rounded"></div>
          </div>
          {/* Laptop base */}
          <div className="w-80 h-3 bg-gray-600 rounded-b-xl -mt-1 mx-auto"></div>
        </div>
      </div>

      {/* Smart Scan Section */}
      <div className="bg-gray-900 rounded-lg p-6 max-w-2xl">
        <h2 className="text-green-400 text-xl font-semibold mb-3">Run a Smart Scan</h2>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-lg">
          Our smart scan checks for malware, security & privacy issues, pc performance issues, system junk and duplicate files all with one click.
        </p>
        
        <div className="flex items-center justify-between">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Run a Scan
          </button>
          
          {/* Scan waves animation */}
          <div className="relative mr-8">
            <div className="w-32 h-20 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border border-gray-600 rounded-full animate-ping opacity-60"></div>
                <div className="w-16 h-16 border border-gray-600 rounded-full animate-ping opacity-40" style={{animationDelay: '0.5s'}}></div>
                <div className="w-24 h-24 border border-gray-600 rounded-full animate-ping opacity-20" style={{animationDelay: '1s'}}></div>
              </div>
              <div className="w-3 h-3 bg-gray-600 rounded-full z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
