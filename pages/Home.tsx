
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Database, 
  FileEdit, 
  Layout, 
  Cpu, 
  CheckCircle2, 
  Zap,
  TrendingUp,
  ShieldCheck,
  Phone
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-32 bg-slate-50">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold tracking-wide uppercase">
                Trusted by Businesses Across Nepal
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Nextgen Tech Hub – Your <span className="text-indigo-600">Trusted Digital</span> Solutions Partner
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Providing professional data entry, report writing, MS Office support, and a range of digital services tailored for efficiency and accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-500/25 flex items-center justify-center gap-2 group"
                >
                  Get Started Today <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-md flex items-center justify-center"
                >
                  View Our Services
                </Link>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900">500+</span>
                  <span className="text-sm text-slate-500 uppercase tracking-wider">Reports Written</span>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900">10k+</span>
                  <span className="text-sm text-slate-500 uppercase tracking-wider">Data Entries</span>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900">100%</span>
                  <span className="text-sm text-slate-500 uppercase tracking-wider">Accuracy</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Data entry services by Nextgen Tech Hub Nepal" 
                  className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-500">Service Status</div>
                    <div className="text-lg font-bold text-slate-900">Active & Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">We Make Your Work Easier</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Nextgen Tech Hub is a Nepal-based digital service provider dedicated to making your work easier and more efficient. From accurate data entry to professional report writing and other digital solutions, we deliver high-quality services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why Choose Nextgen Tech Hub?</h2>
            <div className="mt-4 w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Fast Delivery</h3>
              <p className="text-slate-600 leading-relaxed">
                We understand the value of time. Our processes are streamlined to ensure quick turnaround without compromising quality.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">High Accuracy</h3>
              <p className="text-slate-600 leading-relaxed">
                Accuracy is our top priority. Every project goes through a rigorous quality check to ensure error-free results.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-8">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Scalable Solutions</h3>
              <p className="text-slate-600 leading-relaxed">
                Whether you're an individual or a large business, our services scale to meet your specific project requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="md:w-2/3">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Expert Services at Your Fingertips</h2>
              <p className="mt-4 text-lg text-slate-600">We offer specialized digital solutions to help your business grow and operate smoothly.</p>
            </div>
            <Link to="/services" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group">
              View All Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/services" className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:bg-white hover:shadow-xl transition-all">
              <Database className="text-indigo-600 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Data Entry</h3>
              <p className="text-sm text-slate-600 mb-4">Fast and accurate data entry into any system or database.</p>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-1">Learn More <ArrowRight size={12} /></span>
            </Link>
            <Link to="/services" className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:bg-white hover:shadow-xl transition-all">
              <FileEdit className="text-indigo-600 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Report Writing</h3>
              <p className="text-sm text-slate-600 mb-4">Professionally structured reports for any business use.</p>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-1">Learn More <ArrowRight size={12} /></span>
            </Link>
            <Link to="/services" className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:bg-white hover:shadow-xl transition-all">
              <Layout className="text-indigo-600 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">MS Office</h3>
              <p className="text-sm text-slate-600 mb-4">Expert help with Word, Excel, and PowerPoint documents.</p>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-1">Learn More <ArrowRight size={12} /></span>
            </Link>
            <Link to="/services" className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:bg-white hover:shadow-xl transition-all">
              <Cpu className="text-indigo-600 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Custom Projects</h3>
              <p className="text-sm text-slate-600 mb-4">Tailored digital solutions for unique requirements.</p>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-1">Learn More <ArrowRight size={12} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Optimize Your Workflow?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation on how we can help your business with digital efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
            >
              Contact Us Now
            </Link>
            <a
              href="tel:+9779867707340"
              className="px-8 py-4 bg-indigo-500 text-white border border-indigo-400 rounded-xl font-bold text-lg hover:bg-indigo-400 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} /> Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
