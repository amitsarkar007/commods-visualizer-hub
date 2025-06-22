
import React from 'react';
import { BarChart3, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About</Link></li>
              <li><Link to="/markets" className="hover:text-yellow-400 transition-colors">Markets</Link></li>
              <li><Link to="/api" className="hover:text-yellow-400 transition-colors">API</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-3">
              <a href="https://linkedin.com/in/amitsarkar007" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Linkedin className="h-5 w-5 text-slate-400 hover:text-white" />
              </a>
              <a href="https://github.com/amitsarkar007" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Github className="h-5 w-5 text-slate-400 hover:text-white" />
              </a>
              <a href="https://x.com/amit_Sarkar007" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <svg className="h-5 w-5 text-slate-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 CommodityTracker. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
