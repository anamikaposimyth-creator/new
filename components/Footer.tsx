
import React from 'react';
import { Page } from '../types';
import { Rocket, Twitter, Linkedin, Github, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">NEXUS<span className="text-blue-600">DIGITAL</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Bridging the gap between technological innovation and sustainable business growth since 2015.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"><Github size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Case Studies', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onNavigate(item.toLowerCase().replace(' ', '') as Page)}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Strategy', 'Cloud Solutions', 'AI & ML', 'UI/UX Design'].map((item) => (
                <li key={item} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-slate-400 mb-4 text-sm">Join our newsletter for the latest insights in digital transformation.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-slate-800 border-none rounded-xl py-3 pl-4 pr-12 focus:ring-2 focus:ring-blue-500 text-white outline-none"
              />
              <button className="absolute right-2 top-1.5 p-1.5 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2024 Nexus Digital Consulting. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
