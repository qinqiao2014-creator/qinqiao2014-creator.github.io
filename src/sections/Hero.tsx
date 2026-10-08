import { Github } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const t = {
  zh: {
    subtitle: '开源吉他和弦识别项目',
    desc: '996样本物理感知数据集 · v1.1.0 已发布',
    by: 'by 阿早 · 2026',
    motto: '日拱一卒，功不唐捐',
  },
  en: {
    subtitle: 'Open Source Guitar Chord Recognition',
    desc: '996-sample physics-aware dataset · v1.1.0 released',
    by: 'by Zaosusu · 2026',
    motto: 'Brick by brick, nothing is in vain.',
  },
};

export function Hero() {
  const { lang } = useLang();
  const c = t[lang];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-bg-primary px-5 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(108,188,178,0.16),transparent_36%),linear-gradient(180deg,rgba(244,241,232,0.05),transparent_50%)]" />
      <div className="relative max-w-content w-full text-center animate-rise-in">
        <h1 className="font-serif-lit font-bold text-4xl md:text-6xl text-text-primary tracking-tight mb-5">
          OpenGuitarChordProject
        </h1>
        <p className="font-noto text-lg md:text-xl text-text-secondary mb-3">
          {c.subtitle}
        </p>
        <p className="font-noto text-sm md:text-base text-text-muted mb-8">
          {c.desc}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="https://github.com/qinqiao2014-creator/ogcp-pilot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#6cbcb2]/50 bg-[#6cbcb2]/10 rounded text-text-primary hover:border-[#9bd8cf] hover:bg-[#6cbcb2]/15 transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            <span className="font-noto text-sm">GitHub</span>
          </a>
          <a
            href="https://huggingface.co/datasets/Zaosusu/ogcp-pilot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border-custom bg-bg-secondary/80 rounded text-text-primary hover:border-[#9bd8cf] hover:text-[#9bd8cf] transition-colors duration-200"
          >
            <span className="font-noto text-sm">🤗 Hugging Face</span>
          </a>
        </div>
        <p className="font-noto text-sm text-text-muted">{c.by}</p>
        <p className="font-noto text-sm text-text-muted">{c.motto}</p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 border-2 border-border-custom rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-text-muted rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
