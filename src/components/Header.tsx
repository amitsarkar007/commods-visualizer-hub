
import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-lg">
              <BarChart3 className="h-6 w-6 text-slate-900" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">CommodityTracker</h1>
              <p className="text-xs text-slate-400">Real-time Market Data</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-green-400">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">Live</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
