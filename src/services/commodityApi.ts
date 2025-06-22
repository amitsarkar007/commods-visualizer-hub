
import { CommodityData } from '../types/commodity';

// Using a mock API service that simulates real commodity data
// In production, you would replace this with actual API calls

const generateMockData = (basePrice: number): CommodityData => {
  const change = (Math.random() - 0.5) * basePrice * 0.1;
  const changePercent = (change / basePrice) * 100;
  
  return {
    price: Number((basePrice + change).toFixed(2)),
    change: Number(change.toFixed(2)),
    changePercent: Number(changePercent.toFixed(2)),
    high: Number((basePrice + Math.abs(change) * 1.5).toFixed(2)),
    low: Number((basePrice - Math.abs(change) * 1.5).toFixed(2)),
    volume: Math.floor(Math.random() * 1000000),
    lastUpdate: new Date().toISOString(),
    historicalData: generateHistoricalData(basePrice, 30)
  };
};

const generateHistoricalData = (basePrice: number, days: number) => {
  const data = [];
  const currentDate = new Date();
  
  for (let i = days; i >= 0; i--) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() - i);
    
    const variation = (Math.random() - 0.5) * basePrice * 0.15;
    const price = Number((basePrice + variation).toFixed(2));
    
    data.push({
      date: date.toISOString().split('T')[0],
      price: price,
      volume: Math.floor(Math.random() * 500000)
    });
  }
  
  return data;
};

const basePrices: Record<string, number> = {
  'WTI': 75.45,
  'BRENT': 78.20,
  'NATURAL_GAS': 2.85,
  'GASOLINE': 2.45,
  'HEATING_OIL': 2.65,
  'JET_FUEL': 2.55,
  'NAPHTHA': 650.00,
  'LNG': 3.20,
  'FUEL_OIL': 580.00
};

export const fetchCommodityData = async (symbols: string[]): Promise<Record<string, CommodityData>> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const data: Record<string, CommodityData> = {};
  
  symbols.forEach(symbol => {
    const basePrice = basePrices[symbol] || 100;
    data[symbol] = generateMockData(basePrice);
  });
  
  return data;
};

export const fetchHistoricalData = async (symbol: string, days: number = 90) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const basePrice = basePrices[symbol] || 100;
  return generateHistoricalData(basePrice, days);
};
