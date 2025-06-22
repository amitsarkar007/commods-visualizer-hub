
import React, { useState } from 'react';
import { X, TrendingUp, TrendingDown, BarChart3, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Commodity } from '../types/commodity';

interface CommodityModalProps {
  commodity: Commodity;
  onClose: () => void;
}

const CommodityModal: React.FC<CommodityModalProps> = ({ commodity, onClose }) => {
  const [timeframe, setTimeframe] = useState<'7D' | '30D' | '90D'>('30D');
  const data = commodity.data;
  
  if (!data) return null;

  const isPositive = data.change >= 0;

  // Filter historical data based on timeframe
  const getFilteredData = () => {
    if (!data.historicalData) return [];
    
    const days = timeframe === '7D' ? 7 : timeframe === '30D' ? 30 : 90;
    return data.historicalData.slice(-days);
  };

  const chartData = getFilteredData();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center space-x-4">
            <div className="text-3xl">{commodity.icon}</div>
            <div>
              <h2 className="text-2xl font-bold text-white">{commodity.name}</h2>
              <p className="text-slate-400">{commodity.unit}</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Price Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-slate-800/50 rounded-xl p-4">
              <div className="text-slate-400 text-sm mb-1">Current Price</div>
              <div className="text-2xl font-bold text-white">${data.price.toLocaleString()}</div>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-4">
              <div className="text-slate-400 text-sm mb-1">Change</div>
              <div className={`text-2xl font-bold flex items-center space-x-2 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {isPositive ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
                <span>{isPositive ? '+' : ''}{data.changePercent.toFixed(2)}%</span>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-4">
              <div className="text-slate-400 text-sm mb-1">Day High</div>
              <div className="text-2xl font-bold text-white">${data.high.toLocaleString()}</div>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-4">
              <div className="text-slate-400 text-sm mb-1">Day Low</div>
              <div className="text-2xl font-bold text-white">${data.low.toLocaleString()}</div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-slate-800/30 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">Price History</h3>
              </div>
              
              <div className="flex items-center space-x-2">
                {(['7D', '30D', '90D'] as const).map((period) => (
                  <button
                    key={period}
                    onClick={() => setTimeframe(period)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      timeframe === period
                        ? 'bg-yellow-400 text-slate-900'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="date" 
                    stroke="#9CA3AF"
                    tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  />
                  <YAxis 
                    stroke="#9CA3AF"
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1E293B',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#FFFFFF'
                    }}
                    labelFormatter={(value) => new Date(value).toLocaleDateString()}
                    formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#FBBF24"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6, fill: '#FBBF24' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Market Analysis</h4>
              <div className="space-y-3 text-slate-300">
                <div className="flex justify-between">
                  <span>Volatility:</span>
                  <span className="font-medium">
                    {Math.abs(data.changePercent) > 3 ? 'High' : Math.abs(data.changePercent) > 1 ? 'Medium' : 'Low'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Trend:</span>
                  <span className={`font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {isPositive ? 'Bullish' : 'Bearish'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Volume:</span>
                  <span className="font-medium">{data.volume?.toLocaleString() || 'N/A'}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/30 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Last Updated</h4>
              <div className="flex items-center space-x-2 text-slate-300">
                <Calendar className="h-4 w-4" />
                <span>{new Date(data.lastUpdate).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommodityModal;
