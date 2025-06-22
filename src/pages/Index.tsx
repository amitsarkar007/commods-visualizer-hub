
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import CommodityCard from '../components/CommodityCard';
import CommodityModal from '../components/CommodityModal';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';
import { fetchCommodityData } from '../services/commodityApi';
import { Commodity } from '../types/commodity';

const commodities = [
  { symbol: 'WTI', name: 'Crude Oil (WTI)', unit: 'USD/barrel', icon: '🛢️' },
  { symbol: 'BRENT', name: 'Brent Crude', unit: 'USD/barrel', icon: '⚫' },
  { symbol: 'NATURAL_GAS', name: 'Natural Gas', unit: 'USD/MMBtu', icon: '🔥' },
  { symbol: 'GASOLINE', name: 'Gasoline', unit: 'USD/gallon', icon: '⛽' },
  { symbol: 'HEATING_OIL', name: 'Distillate/Heating Oil', unit: 'USD/gallon', icon: '🏠' },
  { symbol: 'JET_FUEL', name: 'Jet Fuel', unit: 'USD/gallon', icon: '✈️' },
  { symbol: 'NAPHTHA', name: 'Naphtha', unit: 'USD/MT', icon: '🧪' },
  { symbol: 'LNG', name: 'Liquefied Natural Gas', unit: 'USD/MMBtu', icon: '🚢' },
  { symbol: 'FUEL_OIL', name: 'Fuel Oil', unit: 'USD/MT', icon: '🏭' }
];

const Index = () => {
  const [selectedCommodity, setSelectedCommodity] = useState<Commodity | null>(null);

  const { data: commodityData, isLoading, error } = useQuery({
    queryKey: ['commodities'],
    queryFn: () => fetchCommodityData(commodities.map(c => c.symbol)),
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <Header />
        
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600 bg-clip-text text-transparent mb-6">
                Commodities Portfolio Tracker
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
                Real-time monitoring of global commodity prices with advanced analytics and historical data insights
              </p>
            </div>
          </section>

          {/* Commodities Grid */}
          <section className="px-4 pb-20">
            <div className="max-w-7xl mx-auto">
              {isLoading && (
                <div className="flex justify-center items-center py-20">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-400"></div>
                </div>
              )}
              
              {error && (
                <div className="text-center py-20">
                  <p className="text-red-400 text-lg">Error loading commodity data. Please try again later.</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {commodities.map((commodity) => (
                  <CommodityCard
                    key={commodity.symbol}
                    commodity={commodity}
                    data={commodityData?.[commodity.symbol]}
                    onClick={() => setSelectedCommodity({ ...commodity, data: commodityData?.[commodity.symbol] })}
                  />
                ))}
              </div>
            </div>
          </section>

          <About />
        </main>

        <Footer />

        {/* Modal */}
        {selectedCommodity && (
          <CommodityModal
            commodity={selectedCommodity}
            onClose={() => setSelectedCommodity(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
