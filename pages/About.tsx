
import React from 'react';
/* Added missing Zap import */
import { Target, Eye, Users, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">About Nextgen Tech Hub</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Nepal’s trusted provider of data entry, report writing, MS Office assistance, and other digital services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Nextgen Tech Hub was founded with the vision to empower businesses and individuals with reliable digital solutions. Our team of skilled professionals ensures accuracy, efficiency, and timely delivery in every project, whether it’s data entry, report preparation, or IT support.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Starting from a small team of digital enthusiasts in Kathmandu, we've grown to serve clients across various sectors, providing the technical backbone they need to focus on their core objectives.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/office1/400/400" alt="Office Work" className="rounded-2xl shadow-lg" />
              <img src="https://picsum.photos/seed/office2/400/400" alt="Team Meeting" className="rounded-2xl shadow-lg mt-8" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-indigo-600 p-12 rounded-3xl text-white shadow-xl shadow-indigo-200">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-indigo-100 text-lg leading-relaxed">
                To provide high-quality digital services that save time and enhance productivity for businesses and individuals throughout Nepal.
              </p>
            </div>

            <div className="bg-slate-900 p-12 rounded-3xl text-white shadow-xl shadow-slate-200">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                To become Nepal’s most trusted digital solutions partner, recognized for excellence, integrity, and technological innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-16">The Values We Live By</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-indigo-600">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Client First</h3>
              <p className="text-slate-600">Your success is our priority. We listen, adapt, and deliver exactly what you need.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-indigo-600">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Quality Focused</h3>
              <p className="text-slate-600">We don't just finish tasks; we perfect them. Accuracy is non-negotiable.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-indigo-600">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Innovation</h3>
              <p className="text-slate-600">We use the latest digital tools to ensure we're always ahead of the curve.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
