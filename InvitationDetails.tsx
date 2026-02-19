
import React from 'react';
import { Calendar, Clock, MapPin, Info } from 'lucide-react';

interface InvitationDetailsProps {
  language: 'en' | 'zh';
}

const InvitationDetails: React.FC<InvitationDetailsProps> = ({ language }) => {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h2 className="font-serif-luxury text-3xl md:text-4xl font-bold mb-4">
          {language === 'en' ? 'Our Celebration' : '我們的幸福見證'}
        </h2>
        <div className="h-1 w-24 bg-rose-600 mx-auto"></div>
        
        {language === 'en' ? (
          <div className="mt-6 text-slate-600 max-w-lg mx-auto leading-relaxed space-y-4 text-justify">
            <p>
              In the game of destiny, we were lucky enough to draw each other, forming the perfect pair of Hearts.
            </p>
            <p>
              I am Queenie, I am Kenny. As we are about to step into the wedding hall, what we cherish most is you, who have accompanied us throughout our growth.
            </p>
            <p>
              For us, this is not just a wedding, but a gathering of emotions. Because of your presence, our promise is more meaningful; because of your witness, this legend of Hearts is complete.
            </p>
            <p className="font-semibold text-rose-700">
              We sincerely invite you to share in our grand joy.
            </p>
          </div>
        ) : (
          <div className="mt-6 text-slate-600 max-w-lg mx-auto leading-relaxed space-y-4 text-justify">
            <p>
              在命運的牌局中，我們幸運地抽到了彼此，組成最完美的紅桃一對。
            </p>
            <p>
              我是 Queenie，我是 Kenny。在我們即將步入婚姻殿堂的這個重要時刻，心裡最惦記的，就是一直以來陪伴我們成長的你。
            </p>
            <p>
              對我們而言，這不只是一場婚禮，更是一份情感的凝聚。因為有你在場，我們的承諾才更具意義；因為有你的見證，這份紅桃傳說才算圓滿。
            </p>
            <p className="font-semibold text-rose-700">
              誠摯邀請你，來參與我們的盛大喜悅。
            </p>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-rose-50 p-8 rounded-3xl text-center flex flex-col items-center">
          <div className="w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center mb-6">
            <Calendar size={24} />
          </div>
          <h3 className="font-serif-luxury font-bold text-xl mb-2">
            {language === 'en' ? 'The Date' : '日期'}
          </h3>
          <p className="text-slate-800 font-semibold">
            {language === 'en' ? 'Saturday, Apr 25, 2026' : '2026年4月25日 (星期六)'}
          </p>
          <p className="text-slate-500 text-sm mt-1">
            {language === 'en' ? 'Save the date in your hearts' : '請預留時間見證我們的愛'}
          </p>
        </div>

        <div className="bg-rose-50 p-8 rounded-3xl text-center flex flex-col items-center">
          <div className="w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center mb-6">
            <Clock size={24} />
          </div>
          <h3 className="font-serif-luxury font-bold text-xl mb-2">
            {language === 'en' ? 'The Schedule' : '時間'}
          </h3>
          <ul className="text-slate-800 space-y-2 text-sm">
            <li><span className="font-bold">18:00</span> － {language === 'en' ? 'Reception' : '恭候'}</li>
            <li><span className="font-bold">18:30</span> － {language === 'en' ? 'Ceremony' : '證婚'}</li>
            <li><span className="font-bold">20:00</span> － {language === 'en' ? 'Dinner' : '喜宴'}</li>
          </ul>
        </div>

        <div className="bg-rose-50 p-8 rounded-3xl text-center flex flex-col items-center">
          <div className="w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center mb-6">
            <MapPin size={24} />
          </div>
          <h3 className="font-serif-luxury font-bold text-xl mb-2">
            {language === 'en' ? 'The Venue' : '地點'}
          </h3>
          <p className="text-slate-800 font-semibold">
            {language === 'en' ? 'Harbour Grand Kowloon' : '九龍海逸君綽酒店'}
          </p>
          <p className="text-slate-600 text-sm mt-1">
            {language === 'en' ? 'Grand Ballroom, 1/F' : '一樓宴會大禮堂'}
          </p>
          <p className="text-slate-500 text-xs mt-2">
            {language === 'en' ? (
              <>20 Tak Fung Street, Whampoa Garden,<br/>Hunghom, Kowloon, Hong Kong</>
            ) : (
              <>香港九龍紅磡黃埔花園德豐街20號</>
            )}
          </p>
          <p className="text-slate-500 text-xs mt-1">
            {language === 'en' ? '(MTR Whampoa Station, Exit D2)' : '(港鐵黃埔站 D2 出口)'}
          </p>
          <a 
            href="https://maps.app.goo.gl/qE2CKcLMEQ3vpfZDA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rose-600 text-xs mt-3 underline cursor-pointer hover:text-rose-800 font-semibold"
          >
            {language === 'en' ? 'View Map' : '查看地圖'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default InvitationDetails;
