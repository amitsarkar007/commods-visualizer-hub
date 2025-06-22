
import React from 'react';
import { BarChart3, Globe, Shield, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Real-Time Data',
      description: 'Live commodity prices updated every 30 seconds from reliable market sources.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Markets',
      description: 'Track major commodities across international markets including energy, metals, and agriculture.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Reliable Sources',
      description: 'Data sourced from trusted financial APIs and market data providers.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Fast Performance',
      description: 'Optimized for speed with instant loading and smooth interactions.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            About <span className="text-yellow-400">CommodityTracker</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Your comprehensive solution for tracking commodity markets with real-time data, 
            advanced analytics, and professional-grade insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-slate-900">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Professional Commodity Trading Insights
              </h3>
              <p className="text-slate-300 mb-6">
                Whether you're a professional trader, investor, or analyst, our platform provides 
                the tools and data you need to make informed decisions in the commodities market.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Historical price analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Interactive charts and graphs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Market trend indicators</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Real-time price alerts</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Supported Commodities</h4>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
                <div>• Crude Oil (WTI & Brent)</div>
                <div>• Natural Gas & LNG</div>
                <div>• Gasoline & Distillates</div>
                <div>• Jet Fuel & Naphtha</div>
                <div>• Heating Oil</div>
                <div>• Fuel Oil & LPG</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
