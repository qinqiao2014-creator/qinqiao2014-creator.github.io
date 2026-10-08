import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Building2 } from 'lucide-react';

// ============================================================================
// 商业委托（甲方项目）页面
// 披露原则：默认匿名脱敏。每条案例仅写 行业 + 解决的问题 + 技术栈 + 可量化成果，
// 不写客户实名 / logo / 内部架构 / 业务数据。需具名须先取得客户书面授权。
// TODO(用户): 在此填入各商业项目的披露颗粒度。参考占位结构见下方 clientProjects。
// 填好后用 .map 渲染卡片，卡片结构可参考 LibraryOfBabel.tsx。
// ============================================================================

// type ClientProject = {
//   title: string;
//   titleEn: string;
//   industry: string;
//   industryEn: string;
//   problem: string;
//   problemEn: string;
//   tech: string[];
//   outcome: string;
//   outcomeEn: string;
//   disclosure: 'anonymous' | 'named';
// };
//
// const clientProjects: ClientProject[] = [
//   {
//     title: 'AI 眼镜 · 广交会参展',
//     titleEn: 'AI Glasses · Canton Fair',
//     industry: '智能硬件 / 会展服务',
//     industryEn: 'Smart Hardware / Exhibition',
//     problem: '为参展设备集成纯语音交互与室内导航。',
//     problemEn: 'Integrated pure voice interaction and indoor navigation for exhibition devices.',
//     tech: ['Android', 'ASR/TTS', 'Amap SDK', 'Indoor Navigation'],
//     outcome: '交付可用 APK，跑通语音交互与导航链路。',
//     outcomeEn: 'Delivered a working APK with voice interaction and navigation wired through.',
//     disclosure: 'anonymous',
//   },
// ];

const t = {
  zh: {
    back: '小径分岔的花园',
    heroTitle: '看不见的城市',
    heroSubtitle: 'Invisible Cities · 卡尔维诺',
    heroDesc:
      '为甲方构筑的系统，像马可·波罗讲给忽必烈的城——建成后归甲方所有，挂着甲方的名，对外匿名。这里只留下我能说的部分：行业、解决的问题、技术栈与可量化成果。',
    heroQuote: '"看不见的城市，是那些一旦被描述，就不再是原来的样子的城市。"',
    emptyTitle: '案例整理中',
    emptyDesc: '商业委托的案例正在按脱敏标准整理，即将上线。',
    disclosureNote: '本栏所有案例均经匿名脱敏，不含客户实名与内部数据。',
  },
  en: {
    back: 'The Garden of Forking Paths',
    heroTitle: 'Invisible Cities',
    heroSubtitle: 'Invisible Cities · Calvino',
    heroDesc:
      "Systems built for clients, like the cities Marco Polo told Kublai Khan — once delivered they belong to the client, bear their name, and stay anonymous to the public. Only what I can say remains: industry, the problem solved, the stack, and measurable outcomes.",
    heroQuote: '"Invisible cities are those that, once described, are no longer what they were."',
    emptyTitle: 'Case studies in progress',
    emptyDesc: 'Client case studies are being prepared under anonymization standards and will go live soon.',
    disclosureNote: 'All cases here are anonymized — no client names or internal data.',
  },
};

export function InvisibleCities() {
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

  return (
    <div className="min-h-screen bg-bg-primary pt-14">
      {/* Hero */}
      <section className="relative py-20 md:py-28 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(67,120,116,0.12),transparent_50%),linear-gradient(180deg,rgba(244,162,97,0.06),transparent_50%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f4a261]/40 to-transparent" />
        <div className="relative max-w-content mx-auto">
          <Link
            to="/garden-of-forking-paths"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-[#9bd8cf] transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-noto">{c.back}</span>
          </Link>
          <h1 className="font-serif-lit font-bold text-4xl md:text-6xl text-text-primary tracking-tight mb-4">
            {c.heroTitle}
          </h1>
          <p className="font-inter text-base md:text-lg text-text-secondary italic mb-3">{c.heroSubtitle}</p>
          <p className="font-noto text-base md:text-lg text-text-secondary max-w-3xl leading-relaxed mb-6">
            {c.heroDesc}
          </p>
          <p className="font-noto text-sm text-text-muted italic border-l-2 border-[#f4a261]/40 pl-4 max-w-2xl">
            {c.heroQuote}
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-bg-primary pb-20 px-5">
        <div className="max-w-content mx-auto">
          {/* TODO: 填入 clientProjects 后，用 .map 渲染卡片（参考 LibraryOfBabel.tsx 的卡片结构） */}
          <div
            data-animate
            className="border border-dashed border-border-custom rounded bg-bg-secondary/50 p-12 text-center"
          >
            <Building2 className="w-10 h-10 text-[#f4a261] mx-auto mb-4" />
            <h2 className="font-noto font-bold text-xl text-text-primary mb-2">{c.emptyTitle}</h2>
            <p className="font-noto text-sm text-text-muted max-w-md mx-auto leading-relaxed">{c.emptyDesc}</p>
            <p className="font-noto text-xs text-text-muted/70 mt-6 border-t border-border-custom pt-4 max-w-md mx-auto">
              {c.disclosureNote}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
