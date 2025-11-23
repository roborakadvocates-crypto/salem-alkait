import React from 'react';
import { Phone, MessageCircle, Instagram, Globe, MapPin, Share2 } from 'lucide-react';
import BackgroundLogo from './components/BackgroundLogo';
import ProfileHeader from './components/ProfileHeader';
import ContactButton from './components/ContactButton';
import { LINKS } from './constants';

const App: React.FC = () => {
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'المحامي سالم الكيت',
          text: 'بطاقة أعمال المحامي والمستشار القانوني سالم الكيت',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      alert('نعتذر، خاصية المشاركة غير مدعومة في متصفحك.');
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 relative overflow-x-hidden selection:bg-amber-500/30">
      
      {/* Background Watermark */}
      <BackgroundLogo />

      {/* Main Card Container */}
      <main className="w-full max-w-md relative z-10">
        
        {/* Card Content */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 shadow-2xl ring-1 ring-white/5 relative overflow-hidden">
            
            {/* Top decorative glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>

            {/* Share Button (Top Left) */}
            <button 
              onClick={handleShare}
              className="absolute top-5 left-5 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
              aria-label="مشاركة البطاقة"
            >
              <Share2 size={18} />
            </button>

            {/* Header Section */}
            <ProfileHeader />

            {/* Actions Grid */}
            <div className="flex flex-col gap-2 mt-4">
              
              <ContactButton 
                label="اتصال مباشر" 
                subLabel="0527862750"
                icon={Phone} 
                url={LINKS.PHONE}
                colorClass="text-green-500"
              />

              <ContactButton 
                label="واتساب" 
                subLabel="محادثة فورية"
                icon={MessageCircle} 
                url={LINKS.WHATSAPP}
                colorClass="text-green-400"
              />

              <ContactButton 
                label="انستجرام" 
                subLabel="@lawyer_salemalkait"
                icon={Instagram} 
                url={LINKS.INSTAGRAM}
                colorClass="text-pink-500"
              />

              <ContactButton 
                label="الموقع الإلكتروني" 
                subLabel="rakadvocates.com"
                icon={Globe} 
                url={LINKS.WEBSITE}
                colorClass="text-blue-400"
              />

            </div>

            {/* Footer / Logo Section */}
            <div className="mt-8 pt-6 border-t border-slate-700/50 flex flex-col items-center opacity-80">
               {/* Small version of logo if available, or text */}
               <div className="w-16 h-auto mb-2 opacity-90">
                 <img 
                    src="logo.png" 
                    alt="Logo" 
                    className="object-contain"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                 />
               </div>
               <p className="text-slate-500 text-xs font-light">رأس الخيمة للمحاماة والاستشارات القانونية</p>
            </div>
        </div>
      </main>

      {/* Very bottom copyright */}
      <footer className="mt-8 text-slate-600 text-xs relative z-10">
        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة
      </footer>
    </div>
  );
};

export default App;