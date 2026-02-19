import React, { useState, useEffect } from 'react';
import { Sparkles, Loader2, Quote } from 'lucide-react';

interface AIBlessingProps {
  language: 'en' | 'zh';
}

const AIBlessing: React.FC<AIBlessingProps> = ({ language }) => {
  const [blessing, setBlessing] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const generateBlessing = async () => {
    setLoading(true);
    try {
      const { GoogleGenAI } = await import('@google/genai');
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string;
      const ai = new GoogleGenAI({ apiKey });
      const prompt = language === 'en'
        ? 'Write a short, romantic wedding blessing for Queenie Yung (The Queen of Hearts) and Kenny Tang (The King of Hearts). They are getting married. Write in elegant English. Keep it poetic and theme it around A Royal Match or The Perfect Hand. Approximately 80 words.'
        : '為 翁健宜 (紅桃Q) 和 鄧國健 (紅桃K) 寫一段簡短浪漫的婚禮祝福。他們即將結婚。請用優美的中文撰寫。保持詩意，主題圍繞「天生一對」或「完美的牌局」。大約 80 字。';

      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: prompt,
        config: { temperature: 0.8 },
      });

      setBlessing(response.text || (language === 'en' ? 'May your life together be a winning hand of love.' : '願你們的生活如同一手好牌，充滿愛與幸運。'));
    } catch (error) {
      console.error('Error generating blessing:', error);
      setBlessing(language === 'en'
        ? 'In the deck of life, Queenie and Kenny have found the most precious cards. A King and Queen joined by one heart, forever winning the game of love.'
        : '在人生的牌局中，鄧國健 和 翁健宜 找到了最珍貴的牌。國王與皇后心心相印，永遠贏得這場愛的遊戲。'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateBlessing();
  }, [language]);

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-rose-100 text-center relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-600 text-white p-3 rounded-full shadow-lg">
        <Sparkles size={24} />
      </div>
      <h3 className="font-serif-luxury text-2xl font-bold text-slate-900 mb-6">
        {language === 'en' ? 'A Message from the Cards' : '來自紙牌的祝福'}
      </h3>
      {loading ? (
        <div className="flex flex-col items-center justify-center py-12 space-y-4">
          <Loader2 className="animate-spin text-rose-500" size={32} />
          <p className="text-slate-400 font-serif-luxury italic">
            {language === 'en' ? 'Consulting the Oracle of Hearts...' : '正在諮詢紅桃神諭...'}
          </p>
        </div>
      ) : (
        <div className="relative">
          <Quote className="absolute -top-4 -left-4 text-rose-100" size={48} />
          <div className="relative z-10 text-slate-700 font-serif-luxury italic text-lg leading-relaxed whitespace-pre-line">
            {blessing}
          </div>
          <Quote className="absolute -bottom-4 -right-4 text-rose-100 rotate-180" size={48} />
        </div>
      )}
      <button
        onClick={generateBlessing}
        disabled={loading}
        className="mt-10 text-rose-600 text-sm font-semibold hover:text-rose-700 transition-colors inline-flex items-center gap-2 group"
      >
        <Sparkles size={14} className="group-hover:rotate-12 transition-transform" />
        {language === 'en' ? 'Regenerate Royal Blessing' : '重新生成皇家祝福'}
      </button>
    </div>
  );
};

export default AIBlessing;
