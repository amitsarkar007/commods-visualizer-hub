
export interface CommodityData {
  price: number;
  change: number;
  changePercent: number;
  high: number;
  low: number;
  volume?: number;
  lastUpdate: string;
  historicalData?: HistoricalDataPoint[];
}

export interface HistoricalDataPoint {
  date: string;
  price: number;
  volume?: number;
}

export interface Commodity {
  symbol: string;
  name: string;
  unit: string;
  icon: string;
  data?: CommodityData;
}
