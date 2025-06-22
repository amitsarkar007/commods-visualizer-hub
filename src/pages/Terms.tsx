import React from 'react';
import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-3 rounded-full">
                <FileText className="h-8 w-8 text-slate-900" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600 bg-clip-text text-transparent mb-4">
              Terms of Service
            </h1>
            <p className="text-slate-300 text-lg">
              Last updated: January 2025
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 space-y-8 text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using CommodityTracker, you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Service Description</h2>
              <p className="mb-4">
                CommodityTracker provides real-time commodity price tracking and market data for informational purposes. 
                Our service includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Real-time commodity price data</li>
                <li>Historical price charts and analytics</li>
                <li>Market trend analysis</li>
                <li>Educational content about commodity markets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Accuracy Disclaimer</h2>
              <p>
                While we strive to provide accurate and up-to-date information, commodity prices and market data 
                are provided for informational purposes only. We do not guarantee the accuracy, completeness, or 
                timeliness of the data. Users should not rely solely on this information for investment decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
              <p className="mb-4">Users agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the service for lawful purposes only</li>
                <li>Not attempt to interfere with or disrupt the service</li>
                <li>Not use automated tools to access the service excessively</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p>
                CommodityTracker shall not be liable for any direct, indirect, incidental, special, or consequential 
                damages resulting from the use or inability to use our service, even if we have been advised of the 
                possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                posting on this page. Your continued use of the service constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="mb-2">
                For questions regarding these Terms of Service, please contact us:
              </p>
              <p className="text-yellow-400">
                Through our <a href="/contact" className="underline hover:text-yellow-300">contact form</a>
              </p>
            </section>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Terms;
