import React from 'react';
import { BarChart3, TrendingUp, Globe, Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="px-4 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600 bg-clip-text text-transparent mb-6">
              About CommodityTracker
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Empowering traders and investors with real-time commodity market insights
            </p>
          </div>
        </section>

        {/* Why This is Useful */}
        <section className="px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Why CommodityTracker?</h2>
                <div className="space-y-6 text-slate-300">
                  <p className="text-lg">
                    In today's volatile commodity markets, having access to real-time, accurate pricing data 
                    is crucial for making informed trading and investment decisions.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white">Real-Time Market Data</h3>
                        <p>Stay ahead with live commodity prices updated every 30 seconds from reliable sources.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <BarChart3 className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white">Historical Analysis</h3>
                        <p>Analyze price trends and patterns with comprehensive historical data visualization.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white">Global Coverage</h3>
                        <p>Track major energy commodities from international markets in one unified platform.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white">Professional Grade</h3>
                        <p>Built for traders, analysts, and investors who demand accuracy and reliability.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Market Impact</h3>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">9+</div>
                    <div className="text-slate-300">Commodities Tracked</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                    <div className="text-slate-300">Market Monitoring</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">30s</div>
                    <div className="text-slate-300">Update Frequency</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                    <div className="text-slate-300">Reliable Data</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Author Section */}
        <section className="px-4 py-16 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">About the Author</h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <img
                  src="author.jpeg"
                  alt="Amit Sarkar"
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div className="text-left flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Amit Sarkar</h3>
                  <p className="text-slate-300 mb-4">
                    A passionate developer and market analyst with extensive experience in financial technology 
                    and data visualization. Dedicated to creating tools that empower traders and investors 
                    with actionable market insights.
                  </p>
                  <p className="text-slate-400">
                    Learn more about Amit's work and background at{' '}
                    <a href="https://amitsarkar.tech" target="_blank" rel="noopener noreferrer" 
                       className="text-yellow-400 hover:text-yellow-300 transition-colors">
                      amitsarkar.tech
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
