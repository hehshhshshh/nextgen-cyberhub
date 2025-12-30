
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, NavLink } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  FileText, 
  Database, 
  Monitor, 
  Wrench, 
  Briefcase,
  ChevronRight,
  Home as HomeIcon,
  Info,
  Package,
  Contact as ContactIcon,
  BookOpen
} from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon size={18} /> },
    { name: 'About', path: '/about', icon: <Info size={18} /> },
    { name: 'Services', path: '/services', icon: <Package size={18} /> },
    { name: 'Blog', path: '/blog', icon: <BookOpen size={18} /> },
    { name: 'Contact', path: '/contact', icon: <ContactIcon size={18} /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              N
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Nextgen <span className="text-indigo-600">Tech Hub</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-semibold transition-colors hover:text-indigo-600 ${
                    isActive ? 'text-indigo-600' : 'text-slate-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Hire Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-indigo-600 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) => 
                  `flex items-center space-x-4 px-4 py-4 rounded-xl text-base font-semibold transition-all ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-600' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`
                }
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
            <div className="pt-4 px-4">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="flex items-center justify-center w-full py-4 rounded-xl bg-indigo-600 text-white font-bold shadow-lg"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center text-white font-bold text-lg">
                N
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Nextgen Tech Hub
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Your trusted partner for professional data entry, report writing, and digital solutions in Nepal. We empower businesses with efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 transition-colors" aria-label="Facebook">
                <Facebook size={20} className="text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 transition-colors" aria-label="Instagram">
                <Instagram size={20} className="text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="hover:text-indigo-400 transition-colors flex items-center space-x-2 group"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Data Entry Solutions</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Professional Report Writing</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">MS Office Assistance</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Digital Productivity Tools</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Custom IT Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+9779867707340" className="flex items-start space-x-3 text-slate-400 hover:text-indigo-400 transition-colors">
                  <Phone size={18} className="text-indigo-500 mt-1 flex-shrink-0" />
                  <span>+977-9867707340</span>
                </a>
              </li>
              <li>
                <a href="mailto:nextgencyberhub@gmail.com" className="flex items-start space-x-3 text-slate-400 hover:text-indigo-400 transition-colors">
                  <Mail size={18} className="text-indigo-500 mt-1 flex-shrink-0" />
                  <span className="break-all">nextgencyberhub@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin size={18} className="text-indigo-500 mt-1 flex-shrink-0" />
                <span>Kathmandu, Nepal (Online only)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Nextgen Tech Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
