
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Database, Clock, Shield, Zap, Code, TrendingUp } from 'lucide-react';

const ApiInfo = () => {
  const apiEndpoints = [
    {
      endpoint: "/quote",
      description: "Real-time commodity price quotes",
      frequency: "Every 30 seconds",
      parameters: "symbol, interval"
    },
    {
      endpoint: "/technical-indicators",
      description: "Technical analysis indicators",
      frequency: "On-demand",
      parameters: "symbol, indicator, time_period"
    },
    {
      endpoint: "/time-series",
      description: "Historical price data",
      frequency: "Daily updates",
      parameters: "symbol, interval, outputsize"
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
              API Information
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Learn about our data sources, API calls, and data accuracy
            </p>
          </div>
        </section>

        {/* API Overview */}
        <section className="px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Alpha Vantage API</h2>
                <div className="space-y-6 text-slate-300">
                  <p className="text-lg">
                    We use Alpha Vantage's comprehensive financial data API to provide real-time and 
                    historical commodity price information with enterprise-grade reliability.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Database className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white">Data Source</h3>
                        <p>Professional-grade financial data from Alpha Vantage with global coverage.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white">Data Accuracy</h3>
                        <p>Institutional-quality data with 99.9% uptime and sub-second latency.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white">Update Frequency</h3>
                        <p>Real-time updates every 30 seconds during market hours.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">API Statistics</h3>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
                    <div className="text-slate-300">Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">&lt;1s</div>
                    <div className="text-slate-300">Latency</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">30s</div>
                    <div className="text-slate-300">Refresh Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                    <div className="text-slate-300">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="px-4 py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">API Endpoints Used</h2>
              <p className="text-xl text-slate-300">Key API calls powering our commodity data</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center space-x-3 mb-4">
                    <Code className="h-6 w-6 text-yellow-400" />
                    <h3 className="text-lg font-semibold text-white">{endpoint.endpoint}</h3>
                  </div>
                  <p className="text-slate-300 mb-4">{endpoint.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Frequency:</span>
                      <span className="text-yellow-400">{endpoint.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Parameters:</span>
                      <span className="text-yellow-400">{endpoint.parameters}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Quality */}
        <section className="px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Data Quality & Reliability</h2>
              <p className="text-xl text-slate-300">How we ensure accurate and timely data delivery</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-Time Processing</h3>
                    <p className="text-slate-300">
                      Data is processed and updated in real-time with automatic error handling 
                      and retry mechanisms for maximum reliability.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Data Validation</h3>
                    <p className="text-slate-300">
                      All incoming data goes through validation checks to ensure accuracy 
                      and consistency before being displayed to users.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Caching Strategy</h3>
                    <p className="text-slate-300">
                      Smart caching reduces API calls while maintaining data freshness, 
                      optimizing both performance and cost efficiency.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-6">API Call Schedule</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-600">
                    <span className="text-slate-300">Real-time Quotes</span>
                    <span className="text-yellow-400">Every 30 seconds</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-600">
                    <span className="text-slate-300">Historical Data</span>
                    <span className="text-yellow-400">Once per day</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-600">
                    <span className="text-slate-300">Technical Indicators</span>
                    <span className="text-yellow-400">On modal open</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-300">Market Status</span>
                    <span className="text-yellow-400">Every 5 minutes</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Rate Limiting</h4>
                  <p className="text-slate-300 text-sm">
                    API calls are optimized to stay within rate limits while providing 
                    the most up-to-date information possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ApiInfo;
