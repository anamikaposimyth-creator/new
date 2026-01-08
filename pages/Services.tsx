
import React from 'react';
import { Cloud, Layout, PieChart, Cpu, Search, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const mainServices = [
    {
      title: "Strategy & Advisory",
      description: "Navigate market shifts with data-backed business models and roadmap planning.",
      icon: <PieChart size={36} />,
      color: "blue",
      details: ["Digital Roadmap Development", "Business Model Innovation", "Market Opportunity Analysis", "M&A Technical Due Diligence"]
    },
    {
      title: "Cloud Transformation",
      description: "Scale with confidence using modern cloud architectures and DevSecOps practices.",
      icon: <Cloud size={36} />,
      color: "indigo",
      details: ["AWS/Azure Migration", "Serverless Architecture", "Infrastructure as Code", "Cost Optimization"]
    },
    {
      title: "AI & Data Science",
      description: "Harness the power of Generative AI and ML to automate complex business tasks.",
      icon: <Cpu size={36} />,
      color: "purple",
      details: ["Custom LLM Integration", "Predictive Analytics", "Data Warehouse Design", "Automated Workflows"]
    },
    {
      title: "Experience Design",
      description: "Beautiful, intuitive interfaces that convert visitors into loyal customers.",
      icon: <Layout size={36} />,
      color: "pink",
      details: ["UI/UX Strategy", "Interactive Prototyping", "User Research & Testing", "Brand Identity Systems"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate growth and operational excellence.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-${service.color}-50 flex items-center justify-center text-${service.color}-600 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 text-lg">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                        <CheckCircle2 size={16} className="text-blue-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-slate-400">A rigorous, end-to-end framework for success.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discover', desc: 'In-depth analysis of your business landscape.' },
              { step: '02', title: 'Strategize', desc: 'Crafting a bespoke roadmap for transformation.' },
              { step: '03', title: 'Implement', desc: 'Agile development and seamless integration.' },
              { step: '04', title: 'Optimize', desc: 'Continuous monitoring and iterative improvement.' }
            ].map((phase, idx) => (
              <div key={idx} className="relative p-6 bg-white/5 rounded-2xl border border-white/10">
                <span className="text-5xl font-black text-white/10 absolute top-4 right-6">{phase.step}</span>
                <h4 className="text-xl font-bold mb-3">{phase.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
