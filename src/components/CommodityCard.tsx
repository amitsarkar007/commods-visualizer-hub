
import React from 'react';
import { TrendingUp, TrendingDown, Clock } from 'lucide-react';
import { Commodity, CommodityData } from '../types/commodity';

interface CommodityCardProps {
  commodity: Commodity;
  data?: CommodityData;
  onClick: () => void;
}

const CommodityCard: React.FC<CommodityCardProps> = ({ commodity, data, onClick }) => {
  const isPositive = data ? data.change >= 0 : false;
  const isLoading = !data;

  return (
    <div 
      onClick={onClick}
      className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{commodity.icon}</div>
            <div>
              <h3 className="text-white font-semibold text-lg group-hover:text-yellow-400 transition-colors">
                {commodity.name}
              </h3>
              <p className="text-slate-400 text-sm">{commodity.unit}</p>
            </div>
          </div>
          
          {!isLoading && (
            <div className={`flex items-center space-x-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
            </div>
          )}
        </div>

        {/* Price Data */}
        {isLoading ? (
          <div className="space-y-3">
            <div className="h-8 bg-slate-700/50 rounded animate-pulse"></div>
            <div className="h-4 bg-slate-700/50 rounded w-3/4 animate-pulse"></div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-white">
                ${data!.price.toLocaleString()}
              </span>
              <span className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {isPositive ? '+' : ''}{data!.change.toFixed(2)}
              </span>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className={`font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {isPositive ? '+' : ''}{data!.changePercent.toFixed(2)}%
              </span>
              <span className="text-slate-400">
                H: ${data!.high} L: ${data!.low}
              </span>
            </div>
            
            <div className="flex items-center space-x-1 text-xs text-slate-500">
              <Clock className="h-3 w-3" />
              <span>Updated {new Date(data!.lastUpdate).toLocaleTimeString()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommodityCard;
