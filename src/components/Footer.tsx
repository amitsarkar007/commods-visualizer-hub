
import React from 'react';
import { BarChart3, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-lg">
                <BarChart3 className="h-6 w-6 text-slate-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">CommodityTracker</h3>
                <p className="text-xs text-slate-400">Professional Market Data</p>
              </div>
            </div>
            <p className="text-slate-400 max-w-md">
              Professional-grade commodity tracking platform providing real-time market data, 
              analytics, and insights for traders and investors worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Dashboard</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Markets</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">API</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Github className="h-5 w-5 text-slate-400 hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Twitter className="h-5 w-5 text-slate-400 hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Linkedin className="h-5 w-5 text-slate-400 hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 CommodityTracker. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
