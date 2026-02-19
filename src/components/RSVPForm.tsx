import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbygxzo3hbvHj-Mag0fwUiCXgsK44vj5atfDIorfFg2COxwykJpJLo-mkJKKcjAdXqL8ow/exec";

interface RSVPFormProps {
  language: 'en' | 'zh';
}

const RSVPForm: React.FC<RSVPFormProps> = ({ language }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    status: 'attending',
    adults: '1',
    children: '0',
    message: '',
    phone: '',
    email: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      alert(language === 'en' ? "Something went wrong. Please try again." : "發生錯誤，請重試。");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center">
            <CheckCircle2 size={48} />
          </div>
        </div>
        <h2 className="text-3xl font-serif-luxury font-bold mb-4">
          {language === 'en' ? 'Thank You!' : '感謝您的回覆！'}
        </h2>
        <p className="text-slate-300">
          {language === 'en' ? "Your response has been recorded. We can't wait to see you!" : "您的回覆已記錄。期待與您相見！"}
        </p>
        <button 
           onClick={() => setSubmitted(false)}
           className="mt-8 text-rose-400 hover:underline text-sm"
        >
          {language === 'en' ? 'Need to change something?' : '需要修改資料？'}
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif-luxury font-bold mb-4">
          {language === 'en' ? 'Will You Join Us?' : '出席確認'}
        </h2>
        <p className="text-slate-400">
          {language === 'en' ? 'Kindly RSVP by March 15th, 2026' : '請於 2026年3月15日 前回覆'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 uppercase tracking-widest text-slate-400">
            {language === 'en' ? 'Your Full Name' : '您的全名'}
          </label>
          <input
            required
            type="text"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-600 text-white placeholder-slate-500"
            placeholder={language === 'en' ? "Enter your name" : "請輸入您的姓名"}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 uppercase tracking-widest text-slate-400">
              {language === 'en' ? 'Attendance' : '出席狀況'}
            </label>
            <select
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-600 text-white"
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
            >
              <option value="attending" className="bg-slate-900">
                {language === 'en' ? 'Joyfully Attending' : '準時出席'}
              </option>
              <option value="declining" className="bg-slate-900">
                {language === 'en' ? 'Regretfully Declining' : '遺憾缺席'}
              </option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 uppercase tracking-widest text-slate-400">
              {language === 'en' ? 'Number of Adults' : '成人人數'}
            </label>
            <select
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-600 text-white"
              value={formData.adults}
              onChange={(e) => setFormData({...formData, adults: e.target.value})}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num} className="bg-slate-900">{num}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
           <label className="block text-sm font-medium mb-2 uppercase tracking-widest text-slate-400">
              {language === 'en' ? 'Number of Children' : '小童人數'}
            </label>
            <select
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-600 text-white"
              value={formData.children}
              onChange={(e) => setFormData({...formData, children: e.target.value})}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num} className="bg-slate-900">{num}</option>
              ))}
            </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 uppercase tracking-widest text-slate-400">
            {language === 'en' ? 'Message for the Couple' : '給新人的祝福/留言'}
          </label>
          <textarea
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-600 text-white placeholder-slate-500"
            placeholder={language === 'en' ? "Write a message..." : "寫下您的祝福..."}
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 uppercase tracking-widest text-slate-400">
              {language === 'en' ? 'Contact Number' : '聯絡電話'}
            </label>
            <input
              required
              type="text"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-600 text-white placeholder-slate-500"
              placeholder="+852 9XXX XXXX"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 uppercase tracking-widest text-slate-400">
              {language === 'en' ? 'Email Address' : '電郵地址'}
            </label>
            <input
              required
              type="email"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-600 text-white placeholder-slate-500"
              placeholder="example@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-rose-600 hover:bg-rose-700 disabled:bg-rose-400 text-white font-bold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg shadow-rose-900/20"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              {language === 'en' ? 'Sending...' : '傳送中...'}
            </>
          ) : (
            <>
              {language === 'en' ? 'Submit RSVP' : '提交回覆'}
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default RSVPForm;
