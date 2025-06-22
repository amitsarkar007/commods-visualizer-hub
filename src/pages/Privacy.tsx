import React from 'react';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-3 rounded-full">
                <Shield className="h-8 w-8 text-slate-900" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600 bg-clip-text text-transparent mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-400">
              Last updated: January 2025
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 space-y-8 text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="mb-4">
                CommodityTracker collects information to provide better services to our users. We collect information in the following ways:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Usage data and analytics to improve our service</li>
                <li>Technical information such as IP addresses and browser types</li>
                <li>Contact information when you reach out to us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain our commodity tracking services</li>
                <li>Improve and optimize our platform performance</li>
                <li>Respond to user inquiries and provide customer support</li>
                <li>Monitor usage patterns to enhance user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p>
                Our service uses third-party APIs to fetch commodity data. We do not share your personal information 
                with these services beyond what is necessary to provide our core functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="mb-2">
                If you have any questions about this Privacy Policy, please contact us:
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

export default Privacy;
