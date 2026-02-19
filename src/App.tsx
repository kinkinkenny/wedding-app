
import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Clock, Star, Music, ChevronDown, Globe } from 'lucide-react';
import InvitationDetails from './components/InvitationDetails';
import RSVPForm from './components/RSVPForm';
import AIBlessing from './components/AIBlessing';

type Language = 'en' | 'zh';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState<Language>('zh');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="min-h-screen text-slate-800 selection:bg-rose-200">
      {/* Language Toggle */}
      <button 
        onClick={toggleLanguage}
        className="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-rose-100 text-rose-600 hover:bg-rose-50 transition-all duration-300 group"
        aria-label="Toggle Language"
      >
        <Globe size={24} className="group-hover:rotate-12 transition-transform" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {language === 'en' ? '切換至中文' : 'Switch to English'}
        </span>
      </button>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#fffaf5]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 text-rose-600 rotate-12"><Heart size={80} fill="currentColor" /></div>
          <div className="absolute bottom-20 right-20 text-rose-600 -rotate-12"><Heart size={60} fill="currentColor" /></div>
          <div className="absolute top-1/2 left-1/4 text-rose-200"><Heart size={120} fill="currentColor" /></div>
          <div className="absolute bottom-1/3 right-1/4 text-rose-200"><Heart size={100} fill="currentColor" /></div>
        </div>

        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-center z-10 px-4 w-full max-w-4xl`}>
          <h2 className="text-rose-600 font-serif-luxury text-xl md:text-2xl uppercase tracking-[0.3em] mb-8">
            {language === 'en' ? 'Save The Date' : '誠摯邀請'}
          </h2>
          
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="/Q&K.png" 
              alt="Queenie & Kenny" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/800/600?blur=2";
                e.currentTarget.alt = "Please add Q&K.png to public folder";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          <h1 className="font-serif-luxury text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Queenie <span className="text-rose-600">&</span> Kenny
          </h1>
          
          <p className="font-serif-luxury italic text-xl md:text-2xl text-slate-600 mb-10">
            {language === 'en' ? 'Are Getting Married' : '我們結婚了'}
          </p>

          <button 
            onClick={() => scrollTo('details')}
            className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 bg-rose-600 rounded-full hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 shadow-lg shadow-rose-200"
          >
            {language === 'en' ? 'See Invitation Details' : '查看婚禮詳情'}
            <ChevronDown className="ml-2 animate-bounce" />
          </button>
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <InvitationDetails language={language} />
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-24 bg-slate-900 text-white relative">
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <RSVPForm language={language} />
        </div>
        <div className="absolute bottom-0 right-0 p-10 opacity-10">
           <Heart size={200} fill="currentColor" className="text-rose-500" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white text-center border-t border-rose-100">
        <p className="font-script text-3xl text-rose-600 mb-2">Queenie & Kenny</p>
        <p className="text-slate-400 text-sm tracking-widest uppercase">
          {language === 'en' ? 'Thank you for being part of our story' : '感謝您參與我們的人生篇章'}
        </p>
      </footer>
    </div>
  );
};

export default App;
