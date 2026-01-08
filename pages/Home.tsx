
import React from 'react';
import { Page } from '../types';
import { ArrowRight, Zap, Shield, BarChart3, Users } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Next-Gen Digital Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Empowering Businesses for the <span className="text-blue-600 italic">Digital Age</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              We provide world-class consulting, cloud optimization, and AI strategies that turn technological complexity into competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Book a Free Consultation <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => onNavigate('cases')}
                className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all"
              >
                View Case Studies
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-50">
              <img 
                src="https://picsum.photos/seed/consulting1/800/600" 
                alt="Modern Office" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/20">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Success Rate</p>
                  <p className="text-2xl font-black text-slate-900">98.4%</p>
                </div>
                <div className="bg-blue-600/90 backdrop-blur p-4 rounded-xl shadow-lg border border-blue-400/20 text-white">
                  <p className="text-xs font-bold opacity-80 uppercase tracking-widest mb-1">Client Growth</p>
                  <p className="text-2xl font-black">+45% YoY</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
            {['TechFlow', 'Zenith', 'Arcane', 'Lumina', 'Vertex', 'Nova'].map((name) => (
              <div key={name} className="flex justify-center">
                <span className="text-2xl font-bold text-slate-800 tracking-tighter italic">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Nexus Digital?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We combine deep industry expertise with cutting-edge technology to deliver measurable business outcomes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Zap className="text-blue-600" size={32} />}
              title="Agile Execution"
              description="Rapid prototyping and deployment cycles to stay ahead of the competition."
            />
            <FeatureCard 
              icon={<Shield className="text-green-600" size={32} />}
              title="Secure by Design"
              description="Enterprise-grade security protocols integrated into every solution we build."
            />
            <FeatureCard 
              icon={<BarChart3 className="text-purple-600" size={32} />}
              title="Data-Driven"
              description="Insight-led decision making supported by advanced analytics and AI."
            />
            <FeatureCard 
              icon={<Users className="text-orange-600" size={32} />}
              title="Human-Centric"
              description="Focused on creating meaningful experiences for your customers and team."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to scale your digital presence?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Our experts are ready to help you navigate the complex landscape of digital transformation.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-xl inline-flex items-center gap-3"
          >
            Start Your Journey Now <ArrowRight size={24} />
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]"></div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-300 group">
    <div className="mb-6 p-4 bg-white rounded-xl shadow-sm inline-block group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

export default Home;
