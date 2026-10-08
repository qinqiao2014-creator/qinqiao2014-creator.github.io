import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, GitBranch, ArrowRight, ArrowLeft } from 'lucide-react';

const t = {
  zh: {
    back: '返回首页',
    heroTitle: '小径分岔的花园',
    heroSubtitle: 'The Garden of Forking Paths · 博尔赫斯',
    subtitle: '在别人的迷宫里落子',
    heroDesc:
      '这里收录的，都不是我自己的作品——是我在别人的世界里落子的痕迹。两条小径在此分岔：一条通向「看不见的城市」，为甲方构筑、归甲方所有、不挂我名；一条通向「开源贡献」，在公开社区里落子，可验真。',
    heroQuote: '"时间永远分岔，通向无数的将来。" —— 博尔赫斯',
    card1Title: '看不见的城市',
    card1Sub: 'Invisible Cities',
    card1Desc: '商业委托。为甲方构筑的系统，挂甲方的名、归甲方所有，对外匿名脱敏。',
    card2Title: '开源贡献',
    card2Sub: 'Open Source Contributions',
    card2Desc: '在公开仓库里落子——PR 可点、提交可验真，社区共同拥有。',
    enter: '进入',
  },
  en: {
    back: 'Back to Home',
    heroTitle: 'The Garden of Forking Paths',
    heroSubtitle: 'The Garden of Forking Paths · Borges',
    subtitle: "Moves made inside others' mazes",
    heroDesc:
      "Nothing here is my own work — these are the traces of moves I made inside others' worlds. Two paths fork here: one leads to 'Invisible Cities', built for clients, owned by them, anonymous to the public; the other to 'Open Source Contributions', where I play in public repos, verifiable by anyone.",
    heroQuote: '"Time forks perpetually toward innumerable futures." — Borges',
    card1Title: 'Invisible Cities',
    card1Sub: 'Invisible Cities',
    card1Desc:
      'Client commissions. Systems built for clients, bearing their name, owned by them, anonymized in public.',
    card2Title: 'Open Source Contributions',
    card2Sub: 'Open Source Contributions',
    card2Desc: 'Moves made in public repositories — PRs clickable, commits verifiable, community-owned.',
    enter: 'Enter',
  },
};

export function GardenOfForkingPaths() {
  const { lang } = useLang();
  const c = t[lang];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray<HTMLElement>('[data-animate]');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 85%', once: true },
        }
      );
    });
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const cards = [
    {
      to: '/invisible-cities',
      title: c.card1Title,
      sub: c.card1Sub,
      desc: c.card1Desc,
      icon: <Building2 className="w-6 h-6" />,
      accent: '#f4a261',
    },
    {
      to: '/contributions',
      title: c.card2Title,
      sub: c.card2Sub,
      desc: c.card2Desc,
      icon: <GitBranch className="w-6 h-6" />,
      accent: '#6cbcb2',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary pt-14">
      {/* Hero */}
      <section className="relative py-20 md:py-28 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(67,120,116,0.12),transparent_50%),linear-gradient(180deg,rgba(244,162,97,0.06),transparent_50%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f4a261]/40 to-transparent" />
        <div className="relative max-w-content mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-[#9bd8cf] transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-noto">{c.back}</span>
          </Link>
          <h1 className="font-serif-lit font-bold text-4xl md:text-6xl text-text-primary tracking-tight mb-4">
            {c.heroTitle}
          </h1>
          <p className="font-inter text-base md:text-lg text-text-secondary italic mb-3">{c.heroSubtitle}</p>
          <p className="font-noto text-sm text-[#9bd8cf] mb-6 tracking-wide">{c.subtitle}</p>
          <p className="font-noto text-base md:text-lg text-text-secondary max-w-3xl leading-relaxed mb-6">
            {c.heroDesc}
          </p>
          <p className="font-noto text-sm text-text-muted italic border-l-2 border-[#f4a261]/40 pl-4 max-w-2xl">
            {c.heroQuote}
          </p>
        </div>
      </section>

      {/* Two paths */}
      <section className="bg-bg-primary pb-20 px-5">
        <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              data-animate
              className="group relative border border-border-custom rounded bg-bg-secondary overflow-hidden hover:border-[#6cbcb2] transition-colors duration-200"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${card.accent}1a`, border: `1px solid ${card.accent}4d`, color: card.accent }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <h2 className="font-noto font-bold text-xl md:text-2xl text-text-primary">{card.title}</h2>
                    <p className="font-inter text-sm text-text-muted italic">{card.sub}</p>
                  </div>
                </div>
                <p className="font-noto text-sm md:text-base text-text-secondary leading-relaxed mb-6">{card.desc}</p>
                <span className="inline-flex items-center gap-2 font-noto text-sm" style={{ color: card.accent }}>
                  {c.enter}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
