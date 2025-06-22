
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Contact form submitted:', data);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-3 rounded-full">
                <Mail className="h-8 w-8 text-slate-900" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600 bg-clip-text text-transparent mb-4">
              Contact Us
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Have questions about CommodityTracker? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="h-6 w-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Send us a message</h2>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-300">Name *</Label>
                  <Input
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-slate-300">Subject *</Label>
                  <Input
                    id="subject"
                    {...register('subject', { required: 'Subject is required' })}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-300">Message *</Label>
                  <textarea
                    id="message"
                    {...register('message', { required: 'Message is required' })}
                    rows={6}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Tell us how we can help you..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 hover:from-yellow-500 hover:to-amber-600 font-semibold"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-slate-900"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
                <div className="space-y-4 text-slate-300">
                  <p>
                    We're here to help with any questions about CommodityTracker, 
                    our data sources, or how to make the most of our platform.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">Response Time:</p>
                    <p>We typically respond within 24-48 hours during business days.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
                <div className="space-y-4 text-slate-300">
                  <p>Follow us on social media for updates and market insights:</p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/amitsarkar007" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:text-yellow-300"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="https://github.com/amitsarkar007" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:text-yellow-300"
                    >
                      GitHub
                    </a>
                    <a 
                      href="https://x.com/amit_Sarkar007" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:text-yellow-300"
                    >
                      X (Twitter)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
