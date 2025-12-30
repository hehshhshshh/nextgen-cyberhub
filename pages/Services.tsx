
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  FileText, 
  Monitor, 
  Wrench, 
  Briefcase, 
  CheckCircle2,
  Table,
  Presentation,
  FileCode,
  ArrowRight
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Data Entry',
      description: 'Fast and accurate entry of data into spreadsheets, databases, or online systems. We handle large volumes with precision.',
      details: ['Excel/Google Sheets', 'Database Management', 'Online Form Filling', 'Data Cleaning'],
      icon: <Database size={40} className="text-indigo-600" />,
      color: 'bg-indigo-50'
    },
    {
      title: 'Report Writing',
      description: 'Professionally structured reports for business, academic, and project needs. We focus on clarity and professional formatting.',
      details: ['Business Proposals', 'Project Reports', 'Academic Research', 'Technical Documentation'],
      icon: <FileText size={40} className="text-blue-600" />,
      color: 'bg-blue-50'
    },
    {
      title: 'MS Office Support',
      description: 'Expert assistance with Word, Excel, and PowerPoint for presentations, complex documents, and advanced data analysis.',
      details: ['Word Formatting', 'Excel Formulas & Macros', 'PPT Presentation Design', 'Document Automation'],
      icon: <Monitor size={40} className="text-purple-600" />,
      color: 'bg-purple-50'
    },
    {
      title: 'Digital Tools Assistance',
      description: 'Help with spreadsheets, online tools, and software solutions. We help you pick and master the right tools for your work.',
      details: ['Workflow Automation', 'Cloud Tool Setup', 'SaaS Implementation', 'Tool Troubleshooting'],
      icon: <Wrench size={40} className="text-teal-600" />,
      color: 'bg-teal-50'
    },
    {
      title: 'Custom Projects',
      description: 'Tailored digital solutions based on your business or personal requirements. If it’s digital, we can likely help.',
      details: ['Custom IT Solutions', 'Digitization Projects', 'Virtual Assistance', 'Event Digital Support'],
      icon: <Briefcase size={40} className="text-rose-600" />,
      color: 'bg-rose-50'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Explore Nextgen Tech Hub services including data entry, report writing, MS Office support, and other digital solutions in Nepal.
          </p>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-8 p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group ${index === services.length - 1 ? 'lg:col-span-2 max-w-4xl mx-auto' : ''}`}
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${service.color}`}>
                  {service.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 size={18} className="text-indigo-500" />
                        <span className="text-sm font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all"
                  >
                    Inquire About This Service <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Grid for MS Office (Visual Highlight) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">MS Office Mastery</h2>
          <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">Specialized support for the tools you use every day.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/contact" className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1 block group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <FileCode size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">MS Word</h3>
              <p className="text-slate-600 text-sm mb-4">Professional formatting, document structuring, and template creation.</p>
              <span className="text-xs font-bold text-blue-600 uppercase">Book Help</span>
            </Link>
            <Link to="/contact" className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1 block group">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Table size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">MS Excel</h3>
              <p className="text-slate-600 text-sm mb-4">Complex data analysis, financial modeling, and pivot tables.</p>
              <span className="text-xs font-bold text-green-600 uppercase">Analyze Data</span>
            </Link>
            <Link to="/contact" className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1 block group">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Presentation size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">PowerPoint</h3>
              <p className="text-slate-600 text-sm mb-4">Stunning visual decks that communicate your ideas effectively.</p>
              <span className="text-xs font-bold text-orange-600 uppercase">Design Deck</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Need a Custom Solution?</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">We’re ready to tackle projects of any size and complexity. Tell us about your requirements.</p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-500/30"
          >
            Contact us now to start your project!
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
