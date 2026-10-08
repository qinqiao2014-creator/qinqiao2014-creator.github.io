import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ExternalLink, Github, GitPullRequest, Lock } from 'lucide-react';

// ============================================================================
// 小径分岔的花园 —— 「别人的项目」总集
//
// 两类都直接列在这一页，不再拆二级栏目：
//   · client  商业委托 —— 匿名脱敏：只写行业 + 做了什么 + 技术栈 + 成果，
//              不写客户名 / logo / 内部架构 / 业务数据（需客户书面授权才可具名）
//   · oss     开源贡献 —— 公开可验真：附仓库 / PR 链接，任何人都能去核对
//
// 新增项目：往 works 数组里加一条即可，卡片会自动渲染；
//          页面上按「商业委托 → 开源贡献」自动归位排序，无需手动插队。
// 口径红线（ABB）：4 个 PR 全部「已提交、等待评审」，0 个已合并 ——
//              不可写成「已贡献代码」或「已合并」。
// ============================================================================

type WorkKind = 'client' | 'oss';

type WorkLink = {
  label: string;
  url: string;
  kind: 'repo' | 'pr';
};

type WorkItem = {
  id: string;
  kind: WorkKind;
  title: string;
  titleEn: string;
  field: string;
  fieldEn: string;
  year: string;
  intro: string;
  introEn: string;
  points: string[];
  pointsEn: string[];
  tech: string[];
  status: string;
  statusEn: string;
  links: WorkLink[];
};

const works: WorkItem[] = [
  {
    id: 'abb',
    kind: 'oss',
    title: 'AgentBehaviorBench 智能体接入',
    titleEn: 'AgentBehaviorBench Agent Onboarding',
    field: 'AI Agent 行为评测基准 · 开源',
    fieldEn: 'AI Agent Behavior Benchmark · Open Source',
    year: '2026.10',
    intro:
      'AgentBehaviorBench 是一个面向 AI Agent 的行为评测基准：它把来自不同开源项目的 Agent 装进统一沙箱运行，观察它们的真实行为——怎么调用工具、推理轨迹长什么样、缺资源时如何退化。平台只接受「一条消息进、一条答复出」的形态，而上游 Agent 常常是网页界面、后台守护进程或长驻命令行，因此每个 Agent 都需要写一套接入单元，把它真正的入口接到平台上。我为这个基准接入三个开源 Agent，并修复了平台工具链上的真实缺陷。',
    introEn:
      'AgentBehaviorBench is a behavior benchmark for AI agents. It runs agents from different open-source projects inside a uniform sandbox and observes what they actually do — which tools they call, what their reasoning traces look like, and how they degrade when resources are missing. The platform only accepts a one-message-in / one-answer-out shape, while upstream agents are often web UIs, background daemons or long-running CLIs — so each agent needs an onboarding unit that wires its real entrypoint to the platform. I onboarded three open-source agents into this benchmark and fixed real defects in its toolchain.',
    points: [
      '扫地机器人客服 Agent —— 上游只发布了网页界面，真正的推理图封装在类里；我把平台的调用接到它真正的图入口。接入过程中撞出并修掉一个上游缺陷：三个中间件只实现了同步钩子，用异步驱动会直接抛错——这个 bug 本地冒烟抓不到，只在完整评测流程里才暴露。这是唯一走完三阶段全流程的任务，并归档了脱敏 trace（695 个文件）。',
      '代码合规审查 Agent —— 它本身是常驻守护进程，没有「处理一次请求」的入口，我把它包装成「一次评测 = 一个待审提交」。此外把安全扫描器的离线供给做到字段级保真：规则快照路径原本会污染规则 ID 前缀，与线上不一致，我把它移到文件系统根目录，使 check_id 与线上 registry 逐字段一致。',
      '数学建模 Agent —— 输入一道建模题、输出一篇 LaTeX 论文，26 个节点的流水线。我完成三段式实证（可导入 / 可构造 / 输入被真实消费），并处理了流水线中间的人工审核环节与 LaTeX 依赖。',
      '平台工具链修复 —— 官方接入命令会在第一步就卡死。我定位出三个成因，修掉其中两个：程序自己写的字段却被要求提供证据、复核可以「一边拒绝一边通过」导致门禁静默失效。第三个属维护者的边界取舍。',
    ],
    pointsEn: [
      'Robot Vacuum Support Agent — The upstream project only ships a web UI while the actual reasoning graph is encapsulated in a class; I wired the platform to its real graph entrypoint. The onboarding exposed a real upstream defect: three middlewares implemented only sync hooks, so async driving raised immediately — a bug local smoke tests cannot catch, surfacing only in the full evaluation flow. The only task that went through all three evaluation stages, ending with an archived redacted trace (695 files).',
      'Code Compliance Review Agent — A long-running daemon with no per-request entrypoint, so I repackaged it as "one evaluation = one pending commit". I also made the offline security-scanner supply field-level faithful: the rule-snapshot path was polluting rule-ID prefixes, so I relocated it to the filesystem root to keep check_id byte-identical to the live registry.',
      'Mathematical Modeling Agent — Takes a modeling problem and produces a LaTeX paper through a 26-node pipeline. I delivered a three-stage proof (importable / constructible / input genuinely consumed), and handled an intermediate human-approval gate plus the LaTeX dependency.',
      'Platform Toolchain Fix — The official onboarding command would hang at its first step. I traced three causes and fixed two of them: fields the program writes itself were being demanded as evidence; and a review could "reject and approve at the same time", silently defeating the gate. The third is a scope decision for maintainers.',
    ],
    tech: ['LangGraph', 'Docker', 'Python', 'Agent Evaluation', 'OpenTelemetry', 'Semgrep'],
    status:
      '4 个 Pull Request 已提交（3 个 Agent 接入 + 1 个工具链修复）：其中 #336（cra-agent 接入）已合并进 main，其余 #335、#337（接入）+ #338（工具链修复）仍在等待维护者评审与合并。另对 10 个开放任务逐一验证输入契约后做了可行性判定，均给出代码级结论。',
    statusEn:
      'Four pull requests submitted (three agent onboardings plus one toolchain fix): #336 (cra-agent onboarding) has been merged into main; the other three — #335 and #337 (onboardings) and #338 (toolchain fix) — remain awaiting maintainer review and merge. Separately, ten open tasks were assessed for feasibility — each verified against its input contract, with a code-level conclusion for each.',
    links: [
      { label: 'DefuzeX-AI/AgentBehaviorBench', url: 'https://github.com/DefuzeX-AI/AgentBehaviorBench', kind: 'repo' },
      { label: 'PR #335', url: 'https://github.com/DefuzeX-AI/AgentBehaviorBench/pull/335', kind: 'pr' },
      { label: 'PR #336', url: 'https://github.com/DefuzeX-AI/AgentBehaviorBench/pull/336', kind: 'pr' },
      { label: 'PR #337', url: 'https://github.com/DefuzeX-AI/AgentBehaviorBench/pull/337', kind: 'pr' },
      { label: 'PR #338', url: 'https://github.com/DefuzeX-AI/AgentBehaviorBench/pull/338', kind: 'pr' },
    ],
  },
  {
    id: 'ar-glasses',
    kind: 'client',
    title: 'AI 眼镜 · 会展导览',
    titleEn: 'AI Glasses · Exhibition Guide',
    field: '智能硬件 / 会展服务',
    fieldEn: 'Smart Hardware / Exhibition Services',
    year: '2026',
    intro:
      '为大型展会场景的 AI 眼镜做纯语音交互与室内导航——参观者不用掏手机、不用看屏幕，开口就能问路、找展位。整套交互必须适配 AR 眼镜的视野遮挡限制，所以最终形态是一个「少打扰、不挡视线」的语音优先方案。',
    introEn:
      'Pure voice interaction and indoor navigation for AI glasses in large exhibition venues — visitors ask their way and find booths without pulling out a phone or looking at a screen. The whole interaction had to respect the occlusion limits of AR glasses, so the final form is a voice-first design that interferes as little as possible with the wearer\'s view.',
    points: [
      '在眼镜端集成语音识别与语音合成，把「说话 → 识别 → 理解 → 回答 → 播报」整条链路跑通，做到全程不依赖手动操作。',
      '接入室内定位与路径规划，把导航结果转成可直接播报的语音指引，而不是要求用户看小屏地图。',
      '按 AR 低遮挡原则重做界面：放弃中心徽章与大浮窗方案，改为不挡真实视野的轻量提示。',
      '交付可上机的 APK，并完成真机联调与现场场景验证。',
    ],
    pointsEn: [
      'Integrated speech recognition and synthesis on the glasses, wiring the full loop — speak, recognize, understand, answer, speak back — with no manual operation at any point.',
      'Integrated indoor positioning and routing, turning navigation results into spoken guidance instead of a tiny map the wearer has to read.',
      'Redesigned the UI around low-occlusion AR principles: dropped center badges and large overlays in favor of lightweight cues that never block the real view.',
      'Delivered a shippable APK with real-device integration testing and on-site validation.',
    ],
    tech: ['Android', 'Kotlin', 'ASR / TTS', 'Indoor Positioning', 'Navigation SDK', 'AR UI'],
    status: '已交付可上机 APK，语音交互与导航链路全部跑通。按合同约定，客户名称与商务细节不予披露。',
    statusEn:
      'A shippable APK delivered, with the voice-interaction and navigation paths fully wired. Per contract, the client name and commercial details are not disclosed.',
    links: [],
  },
  {
    id: 'screening',
    kind: 'client',
    title: '公共健康筛查系统',
    titleEn: 'Public Health Screening System',
    field: '医疗健康 / 公共卫生',
    fieldEn: 'Healthcare / Public Health',
    year: '2026',
    intro:
      '一套三端协同的筛查系统：现场采集端、专业复核端、管理后台，覆盖从数据采集到复核归档的完整链路。业务口径与合规要求都很硬——推理方案必须在受控环境内本地运行，数据不出域。',
    introEn:
      'A three-endpoint screening system — on-site capture, professional review, and an admin console — covering the full path from data collection to review and archival. Both the domain requirements and compliance constraints were strict: inference had to run locally inside a controlled environment, with no data leaving the premises.',
    points: [
      '三端打通：现场采集端（移动应用）、专业复核端（桌面端）、管理后台，覆盖采集 → 复核 → 归档全流程。',
      '承担三端的前端界面实现，把专业筛查流程拆成不易出错的表单化步骤。',
      '编写薄后端接口，串联采集端与复核端之间的数据流转与状态同步。',
      '按合规要求选择本地化推理方案，确保技术路径可审计、数据不出域。',
    ],
    pointsEn: [
      'Wired all three endpoints: on-site capture (mobile app), professional review (desktop), and an admin console — covering capture, review and archival end to end.',
      'Built the front-end for all three surfaces, breaking a specialized screening workflow into form-driven steps that are hard to get wrong.',
      'Wrote the thin backend that connects the capture and review sides, keeping data flow and state in sync.',
      'Chose a local, compliance-friendly inference approach so the technical path stays auditable and data never leaves the premises.',
    ],
    tech: ['Vue', 'TypeScript', 'FastAPI', 'Python'],
    status: '三端已打通并走通采集到归档的完整流程。按合同约定，客户名称与业务细节不予披露。',
    statusEn:
      'All three endpoints connected, with the full capture-to-archival flow working. Per contract, the client name and business details are not disclosed.',
    links: [],
  },
];

// 展示顺序：商业委托在前、开源贡献在后 —— 与主页第 V 节的分类介绍同序。
// 往 works 追加新项目时不必关心插入位置，这里会自动归位（同类内保持声明顺序）。
const kindRank: Record<WorkKind, number> = { client: 0, oss: 1 };
const orderedWorks = [...works].sort((a, b) => kindRank[a.kind] - kindRank[b.kind]);

const t = {
  zh: {
    back: '返回首页',
    heroTitle: '小径分岔的花园',
    heroSubtitle: 'The Garden of Forking Paths · 博尔赫斯',
    subtitle: '在别人的迷宫里落子',
    heroDesc:
      '这里放的都不是我自己的作品——是我在别人的世界里落下的子。一类是为甲方构筑、归甲方所有、对外不挂我名的系统；一类是在公开仓库里留下的、任何人都能核对的提交。两类都直接列在下面。',
    heroQuote: '"时间永远分岔，通向无数的将来。" —— 博尔赫斯',
    kindClient: '商业委托 · 匿名',
    kindOss: '开源贡献 · 可验真',
    whatIDid: '做了什么',
    techStack: '技术栈',
    statusLabel: '当前状态',
    reveal: '相关链接',
    countLabel: '个项目',
  },
  en: {
    back: 'Back to Home',
    heroTitle: 'The Garden of Forking Paths',
    heroSubtitle: 'The Garden of Forking Paths · Borges',
    subtitle: "Moves made inside others' mazes",
    heroDesc:
      "Nothing here is my own work — these are the moves I made inside others' worlds. Some are systems built for clients: owned by them, bearing their name, unattributed to me in public. Others are commits left in public repositories that anyone can check. Both are listed directly below.",
    heroQuote: '"Time forks perpetually toward innumerable futures." — Borges',
    kindClient: 'Commissioned · Anonymous',
    kindOss: 'Open Source · Verifiable',
    whatIDid: 'What I Did',
    techStack: 'Tech Stack',
    statusLabel: 'Status',
    reveal: 'Links',
    countLabel: 'projects',
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
          scrollTrigger: { trigger: section, start: 'top 88%', once: true },
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

      {/* Works — 一条条直接列，卡片自带披露级别 */}
      <section className="bg-bg-primary pb-16 px-5">
        <div className="max-w-content mx-auto space-y-10">
          {orderedWorks.map((w) => {
            const isClient = w.kind === 'client';
            const accent = isClient ? '#f4a261' : '#6cbcb2';
            return (
              <article
                key={w.id}
                data-animate
                className="relative border border-border-custom rounded bg-bg-secondary overflow-hidden hover:border-[#6cbcb2]/60 transition-colors duration-200"
              >
                {/* Header */}
                <div className="p-6 md:p-8 border-b border-border-custom/60 bg-bg-primary/50">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-noto"
                      style={{
                        backgroundColor: `${accent}1a`,
                        border: `1px solid ${accent}4d`,
                        color: accent,
                      }}
                    >
                      {isClient ? <Lock className="w-3 h-3" /> : <GitPullRequest className="w-3 h-3" />}
                      {isClient ? c.kindClient : c.kindOss}
                    </span>
                    <span className="font-noto text-xs text-text-muted">
                      {lang === 'zh' ? w.field : w.fieldEn}
                    </span>
                    <span className="ml-auto font-inter text-xs text-text-muted tabular-nums">{w.year}</span>
                  </div>

                  <h2 className="font-serif-lit font-bold text-2xl md:text-3xl text-text-primary mb-2">
                    {lang === 'zh' ? w.title : w.titleEn}
                  </h2>
                  <p className="font-inter text-sm md:text-base text-text-muted italic mb-5">
                    {lang === 'zh' ? w.titleEn : w.title}
                  </p>
                  <p className="font-noto text-sm md:text-base text-text-secondary leading-relaxed">
                    {lang === 'zh' ? w.intro : w.introEn}
                  </p>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8">
                  <h3 className="font-noto font-bold text-base text-text-primary mb-5 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                    {c.whatIDid}
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {(lang === 'zh' ? w.points : w.pointsEn).map((p, i) => (
                      <li
                        key={i}
                        className="relative pl-5 font-noto text-sm text-text-secondary leading-relaxed"
                      >
                        <span
                          className="absolute left-0 top-[0.55em] w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: `${accent}99` }}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Tech stack */}
                    <div className="lg:col-span-1">
                      <h3 className="font-noto font-bold text-sm text-text-primary mb-3">{c.techStack}</h3>
                      <div className="flex flex-wrap gap-2">
                        {w.tech.map((tech) => (
                          <span
                            key={tech}
                            className="inline-block px-2.5 py-1 rounded text-xs font-mono"
                            style={{
                              backgroundColor: `${accent}14`,
                              border: `1px solid ${accent}33`,
                              color: accent,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Status */}
                    <div className="lg:col-span-2">
                      <h3 className="font-noto font-bold text-sm text-text-primary mb-3">{c.statusLabel}</h3>
                      <p className="font-noto text-sm text-text-secondary leading-relaxed border-l-2 pl-4" style={{ borderColor: `${accent}66` }}>
                        {lang === 'zh' ? w.status : w.statusEn}
                      </p>

                      {w.links.length > 0 && (
                        <div className="mt-6">
                          <h3 className="font-noto font-bold text-sm text-text-primary mb-3">{c.reveal}</h3>
                          <div className="flex flex-wrap gap-2">
                            {w.links.map((l) => (
                              <a
                                key={l.url}
                                href={l.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-border-custom bg-bg-primary/50 hover:border-[#6cbcb2] hover:bg-[#6cbcb2]/5 text-xs font-noto text-text-secondary hover:text-[#9bd8cf] transition-all duration-200 group"
                              >
                                {l.kind === 'pr' ? (
                                  <GitPullRequest className="w-3.5 h-3.5" />
                                ) : (
                                  <Github className="w-3.5 h-3.5" />
                                )}
                                <span>{l.label}</span>
                                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 披露原则说明 */}
      <section data-animate className="bg-bg-primary pb-20 px-5">
        <div className="max-w-content mx-auto border-t border-border-custom pt-8">
          <p className="font-noto text-xs text-text-muted leading-relaxed max-w-3xl">
            {lang === 'zh'
              ? '商业委托条目均经匿名脱敏，不含客户实名、内部架构与业务数据——需取得客户书面授权后才会具名。开源贡献条目则相反：所有链接均可公开点击核对。'
              : 'Commissioned entries are anonymized — no client names, internal architecture or business data, and naming requires written client authorization. Open-source entries are the opposite: every link is publicly clickable and verifiable.'}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
