
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { BlogPost } from '../types.ts';

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'How to Make Accurate Reports Quickly',
      description: 'Master the art of structuring your data and using templates to slash your report writing time in half.',
      date: 'Oct 12, 2025',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '2',
      title: 'Tips for Efficient Data Entry',
      description: 'Learn keyboard shortcuts and data validation tricks that ensure 100% accuracy while maintaining high speed.',
      date: 'Nov 05, 2025',
      image: 'https://images.unsplash.com/photo-1586281380349-631531a3d242?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '3',
      title: 'MS Office Tricks for Professionals',
      description: 'Beyond copy-paste: discover advanced MS Word and Excel features that will make you look like a tech wizard.',
      date: 'Dec 15, 2025',
      image: 'https://images.unsplash.com/photo-1454165833767-027ffcb70310?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '4',
      title: 'Cyber Tools Every Business Should Know',
      description: 'A curated list of free and paid digital tools that can help your small business automate tedious daily tasks.',
      date: 'Jan 20, 2026',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 uppercase tracking-tight">Our Blog & Tips</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Read helpful articles from Nextgen Tech Hub on data entry, report writing, MS Office tips, and digital productivity.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/contact" className="relative block rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              alt="Featured" 
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent flex items-end">
              <div className="p-10 text-white max-w-2xl">
                <div className="inline-block px-3 py-1 bg-indigo-600 rounded-lg text-xs font-bold uppercase mb-4 tracking-widest">Featured Article</div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">Maximizing Digital Productivity in 2026</h2>
                <p className="text-slate-300 text-lg mb-6 line-clamp-2">The digital landscape is changing fast. Here's how businesses in Nepal can stay ahead by leveraging automation and specialized digital services.</p>
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="flex items-center gap-1"><Calendar size={14} /> Feb 10, 2026</span>
                  <span className="flex items-center gap-1"><User size={14} /> Nextgen Team</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-xl transition-all"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur shadow-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-indigo-600">Expert Tips</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8 line-clamp-3">
                    {post.description}
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-indigo-600 hover:gap-3 transition-all">
                    Inquire About This <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="px-10 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all shadow-md hover:shadow-lg">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Placeholder */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-2xl shadow-sm mb-6 text-indigo-600">
            <BookOpen size={32} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Subscribe to our Newsletter</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">Get the latest digital productivity tips and service updates delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              required
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
            <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg active:scale-95">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
