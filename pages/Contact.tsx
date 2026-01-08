
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send to API
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Let's Connect</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Whether you have a specific project in mind or just want to explore the possibilities, our team is here to help.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email</p>
                      <p className="text-lg text-slate-900 font-semibold">hello@nexusdigital.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                      <p className="text-lg text-slate-900 font-semibold">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Office</p>
                      <p className="text-lg text-slate-900 font-semibold">123 Innovation Drive, Silicon Valley, CA 94025</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-900 rounded-2xl text-white">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                   <MessageSquare size={18} className="text-blue-400" /> Need quick help?
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Try our AI consultant on the bottom right of the screen for instant answers about our services.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                      <Send size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                    <p className="text-slate-600 text-lg">Thank you for reaching out. One of our consultants will contact you within 24 hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-blue-600 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                        <input 
                          type="text" 
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Work Email</label>
                        <input 
                          type="email" 
                          required
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Service Required</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
                        <option>Digital Strategy</option>
                        <option>Cloud Infrastructure</option>
                        <option>AI/ML Integration</option>
                        <option>UI/UX Design</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Message</label>
                      <textarea 
                        rows={5}
                        required
                        placeholder="Tell us about your project or challenges..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      Send Message <Send size={20} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
