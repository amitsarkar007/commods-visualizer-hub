
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Fuel, Zap, Plane, Factory, Ship, Home, Droplets, FlameKindling, Building } from 'lucide-react';

const Markets = () => {
  const marketCategories = [
    {
      title: "Crude Oil Markets",
      description: "The foundation of global energy markets",
      commodities: [
        {
          name: "WTI Crude Oil",
          icon: <Fuel className="h-8 w-8" />,
          description: "West Texas Intermediate - North American benchmark crude oil",
          market: "NYMEX",
          tradingHours: "24/5"
        },
        {
          name: "Brent Crude",
          icon: <Droplets className="h-8 w-8" />,
          description: "International benchmark for global oil pricing",
          market: "ICE",
          tradingHours: "24/5"
        }
      ]
    },
    {
      title: "Refined Products",
      description: "Essential petroleum derivatives for transportation",
      commodities: [
        {
          name: "Gasoline",
          icon: <Zap className="h-8 w-8" />,
          description: "RBOB gasoline futures for automotive fuel",
          market: "NYMEX",
          tradingHours: "24/5"
        },
        {
          name: "Heating Oil / Distillate",
          icon: <Home className="h-8 w-8" />,
          description: "Diesel fuel and heating oil for residential and commercial use",
          market: "NYMEX",
          tradingHours: "24/5"
        },
        {
          name: "Jet Fuel",
          icon: <Plane className="h-8 w-8" />,
          description: "Aviation turbine fuel for commercial and military aircraft",
          market: "Multiple",
          tradingHours: "Regional"
        }
      ]
    },
    {
      title: "Natural Gas & LNG",
      description: "Clean-burning energy for power generation and heating",
      commodities: [
        {
          name: "Natural Gas",
          icon: <FlameKindling className="h-8 w-8" />,
          description: "Henry Hub natural gas futures",
          market: "NYMEX",
          tradingHours: "24/5"
        },
        {
          name: "Liquefied Natural Gas (LNG)",
          icon: <Ship className="h-8 w-8" />,
          description: "Cooled natural gas for international shipping",
          market: "Global Spot",
          tradingHours: "24/5"
        }
      ]
    },
    {
      title: "Industrial Products",
      description: "Chemical feedstocks and industrial fuels",
      commodities: [
        {
          name: "Naphtha",
          icon: <Factory className="h-8 w-8" />,
          description: "Petrochemical feedstock and light fuel",
          market: "Regional",
          tradingHours: "Business Hours"
        },
        {
          name: "Fuel Oil",
          icon: <Building className="h-8 w-8" />,
          description: "Heavy fuel oil for marine and industrial use",
          market: "Global",
          tradingHours: "24/5"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="px-4 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600 bg-clip-text text-transparent mb-6">
              Commodity Markets
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore the diverse energy commodity markets we track and analyze
            </p>
          </div>
        </section>

        {/* Market Categories */}
        <section className="px-4 py-16">
          <div className="max-w-7xl mx-auto space-y-16">
            {marketCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">{category.title}</h2>
                  <p className="text-xl text-slate-300">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.commodities.map((commodity, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-yellow-400/30 transition-all duration-300">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-3 rounded-lg text-slate-900">
                          {commodity.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white">{commodity.name}</h3>
                      </div>
                      
                      <p className="text-slate-300 mb-4">{commodity.description}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Primary Market:</span>
                          <span className="text-yellow-400">{commodity.market}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Trading Hours:</span>
                          <span className="text-yellow-400">{commodity.tradingHours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Market Overview */}
        <section className="px-4 py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Global Energy Markets</h2>
              <p className="text-xl text-slate-300">Understanding market dynamics and trading patterns</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Market Volatility</h3>
                <p className="text-slate-300">
                  Energy commodities are influenced by geopolitical events, supply disruptions, 
                  seasonal demand patterns, and economic indicators.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Trading Sessions</h3>
                <p className="text-slate-300">
                  Most energy commodities trade around the clock across multiple exchanges, 
                  providing continuous price discovery and liquidity.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Price Correlations</h3>
                <p className="text-slate-300">
                  Energy commodities often move together but can diverge based on specific 
                  supply-demand fundamentals and regional factors.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Markets;
