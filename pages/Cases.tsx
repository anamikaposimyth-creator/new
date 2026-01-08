
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CaseStudy } from '../types';
import { TrendingUp, Clock, Target } from 'lucide-react';

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    client: 'EcoLogistics Global',
    title: 'Modernizing Supply Chain with Real-time AI',
    challenge: 'Inefficient routing and unpredictable warehouse delays led to 15% revenue leakage.',
    solution: 'Implemented a custom IoT and ML-driven tracking system on AWS Lambda.',
    outcome: 'Reduced operational costs by 22% and improved delivery accuracy to 99.4%.',
    metrics: [
      { name: 'Before', value: 78 },
      { name: 'After', value: 99 }
    ],
    image: 'https://picsum.photos/seed/logistics/800/400'
  },
  {
    id: '2',
    client: 'FinVantage Inc.',
    title: 'Digital-First Banking Transformation',
    challenge: 'Legacy core banking systems prevented rapid deployment of new customer features.',
    solution: 'Migrated 100+ microservices to Kubernetes with a modern React Native frontend.',
    outcome: 'Time-to-market for new features reduced from 6 months to 2 weeks.',
    metrics: [
      { name: 'Speed (old)', value: 15 },
      { name: 'Speed (new)', value: 95 }
    ],
    image: 'https://picsum.photos/seed/fintech/800/400'
  }
];

const Cases: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Case Studies</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore how we've helped industry leaders navigate their most complex digital challenges.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {caseStudies.map((study, idx) => (
            <div key={study.id} className={`flex flex-col lg:flex-row items-stretch gap-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="mb-6">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">{study.client}</span>
                  <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-4">{study.title}</h2>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600">
                      <Target size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">The Challenge</h4>
                      <p className="text-slate-600">{study.challenge}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Our Solution</h4>
                      <p className="text-slate-600">{study.solution}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">The Outcome</h4>
                      <p className="text-slate-600">{study.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-6">
                <div className="rounded-2xl overflow-hidden shadow-xl h-64 border border-slate-200">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex-grow">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="text-blue-600" size={18} /> Performance Impact (%)
                  </h4>
                  <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={study.metrics} margin={{ top: 5, right: 30, left: -20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                        <Tooltip 
                           contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                          {study.metrics.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#cbd5e1' : '#2563eb'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cases;
