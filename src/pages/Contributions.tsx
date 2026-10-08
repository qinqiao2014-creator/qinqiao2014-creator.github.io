import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, GitBranch } from 'lucide-react';

// ============================================================================
// 开源贡献页面
// 与「看不见的城市」相反：这里默认公开可验真。每条贡献贴原仓库链接 / PR 链接，
// 任何人都能去核对。当前以 ABB 开源贡献为例占位，后续可继续追加。
// TODO(用户): 在此补充各开源贡献的仓库 / PR / 所做工作。
// ============================================================================

// type Contribution = {
//   repo: string;
//   repoEn: string;
//   role: string;
//   roleEn: string;
//   desc: string;
//   descEn: string;
//   tech: string[];
//   url: string;
//   pr?: string;
// };
//
// const contributions: Contribution[] = [
//   {
//     repo: 'ABB 开源项目',
//     repoEn: 'ABB Open-Source Project',
//     role: '开源贡献者',
//     roleEn: 'Open-Source Contributor',
//     desc: '参与赛道一·新智基座方向的文档与代码贡献，提交经源码反证核对。',
//     descEn: 'Contributed docs and code to the Track-1 Agent-Infra direction, with submissions cross-checked against source.',
//     tech: ['Agent', 'Infra', 'Documentation'],
//     url: 'https://github.com/ ORG/REPO',
//     pr: 'https://github.com/ORG/REPO/pull/NN',
//   },
// ];

const t = {
  zh: {
    back: '小径分岔的花园',
    heroTitle: '开源贡献',
    heroSubtitle: 'Open Source Contributions',
    heroDesc:
      '在公开仓库里落子——PR 可点、提交可验真，与「看不见的城市」正好相反：这里不匿名，每一笔贡献都属于公开的协作，任何人都能去原仓库核对。',
    heroQuote: '"我们读过的书，终将成为我们写过的代码的一部分。"',
    emptyTitle: '贡献列表整理中',
    emptyDesc: '开源贡献的仓库与 PR 正在整理并补全链接，即将上线。',
    verifyNote: '本栏所有条目均附原仓库 / PR 链接，可公开验真。',
  },
  en: {
    back: 'The Garden of Forking Paths',
    heroTitle: 'Open Source Contributions',
    heroSubtitle: 'Open Source Contributions',
    heroDesc:
      "Moves made in public repositories — PRs clickable, commits verifiable. The opposite of 'Invisible Cities': nothing is anonymous here; every contribution belongs to open collaboration anyone can check against the original repo.",
    heroQuote: '"The books we have read will eventually become part of the code we write."',
    emptyTitle: 'Contributions in progress',
    emptyDesc: 'Repositories and PRs are being organized and linked, and will go live soon.',
    verifyNote: 'Every entry here links to its original repo / PR and is publicly verifiable.',
  },
};

export function Contributions() {
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
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(67,120,116,0.12),transparent_50%),linear-gradient(180deg,rgba(108,188,178,0.06),transparent_50%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#6cbcb2]/40 to-transparent" />
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
          <p className="font-noto text-sm text-text-muted italic border-l-2 border-[#6cbcb2]/40 pl-4 max-w-2xl">
            {c.heroQuote}
          </p>
        </div>
      </section>

      {/* Contributions */}
      <section className="bg-bg-primary pb-20 px-5">
        <div className="max-w-content mx-auto">
          {/* TODO: 填入 contributions 后，用 .map 渲染卡片（参考 LibraryOfBabel.tsx 的卡片结构） */}
          <div
            data-animate
            className="border border-dashed border-border-custom rounded bg-bg-secondary/50 p-12 text-center"
          >
            <GitBranch className="w-10 h-10 text-[#6cbcb2] mx-auto mb-4" />
            <h2 className="font-noto font-bold text-xl text-text-primary mb-2">{c.emptyTitle}</h2>
            <p className="font-noto text-sm text-text-muted max-w-md mx-auto leading-relaxed">{c.emptyDesc}</p>
            <p className="font-noto text-xs text-text-muted/70 mt-6 border-t border-border-custom pt-4 max-w-md mx-auto">
              {c.verifyNote}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
