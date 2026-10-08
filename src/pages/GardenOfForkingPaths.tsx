import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ExternalLink, Github, GitPullRequest, Lock } from 'lucide-react';

// ============================================================================
// 合作项目 —— 为他人做的项目总集（商业委托 + 开源贡献）
//
// 两类都直接列在这一页，不再拆二级栏目：
//   · client  商业委托 —— 匿名脱敏：只写行业 + 做了什么 + 技术栈 + 成果，
//              不写客户名 / logo / 内部架构 / 业务数据（需客户书面授权才可具名）
//   · oss     开源贡献 —— 公开可验真：附仓库 / PR 链接，任何人都能去核对
//
// 新增项目：往 works 数组里加一条即可，卡片会自动渲染；
//          页面上按「商业委托 → 开源贡献」自动归位排序，无需手动插队。
// 口径红线（ABB，2026-10-08 复核）：#336（cra-agent 接入）已合并进 main；
//              #335 / #337（Agent 接入）、#338（工具链修复）仍在评审中 ——
//              只有 #336 可写「已合并」，其余只能写「已提交、等待评审」。
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
    title: 'AI 眼镜（ROKID）· 广交会 AI 导览助手',
    titleEn: 'AI Glasses (ROKID) · Canton Fair AI Guide',
    field: '智能硬件 / 会展导览',
    fieldEn: 'Smart Hardware / Exhibition Guidance',
    year: '2026',
    intro:
      '为超大型展会做的眼镜端导览助手：参观者戴着眼镜，中英文开口就能问路、找展位、查展商、做同传，全程不用掏手机。工程上前后端分离——眼镜端是一个 APK，设备控制面是独立的后台服务：现场每一副眼镜的品牌文案、模型密钥、版本档位、工具开关都在后台改，改完热同步到设备，不用重发安装包。',
    introEn:
      'An on-glasses guide built for a very large trade fair: wearing the glasses, visitors ask for directions, find booths, look up exhibitors and get live interpretation — in Chinese or English, entirely by voice, without pulling out a phone. The system is split front-to-back: the glasses run a single APK, while a separate backend acts as the device control plane. Branding, copy, model keys, release tiers and tool switches for every pair on site are managed in the backend and hot-synced to the device — no need to re-issue an install package for a copy change.',
    points: [
      '眼镜端一体化 APK：语音唤醒后先做本地中英文关键词分流，命中就直接进对应工具，不绕道大模型。消费版六个工具——展会智能体、同声传译、扫码联网、设置、室外导航、室内导航；企业版由后台一键收敛成同传与设置两项。',
      '室内导航：场馆 Hall / Booth 由独立大模型与独立会话理解，一次只问缺的下一项（目的地 → 当前馆 → 当前展位），路线按「Hall 14.1 A06 → A11」这类地图关系播报，不编造左右转和精确距离；看不清位置时可用相机拍公司名或展位号辅助定位，拍到多个展位只提示、不替用户猜。',
      '室外导航接导航 SDK 做真实定位与路线规划；现场物联网网络不含地图域名白名单时，请求经后端域名中转，位置仍由眼镜自身定位与地图服务给出，不让模型编路线。',
      '展商检索：说「拍照」进可见预览、手动按快门，视觉识别出清晰展商名后自动去知识库检索并回答；图片模糊、同时出现多家公司或查无收录都如实提示，不编造展商信息。',
      '设备控制面后台：新眼镜首次启动自动注册领身份并同步完整默认配置，现场不用手填密钥；全局默认与单设备独立设置分离，全局改动在任何时候都不覆盖某副眼镜自己的设置，热更新与重启后仍保持。',
      '屏幕常亮策略自己接管：同传、导航、展会、扫码、拍照运行期间一律不灭屏，只有「设置」允许空闲息屏——工具正在服务用户时灭屏就算缺陷。',
    ],
    pointsEn: [
      'A single integrated APK on the glasses: after wake word, local Chinese/English keyword routing decides the target — a hit opens the tool directly instead of passing through an LLM. The consumer profile ships six tools (exhibition agent, live interpretation, QR-based networking, settings, outdoor navigation, indoor navigation); the enterprise profile collapses to interpretation and settings with one backend switch.',
      'Indoor navigation: hall and booth semantics are handled by a dedicated model with its own session, asking only for the one missing item at a time (destination → current hall → current booth). Routes are announced as map relations such as "Hall 14.1 A06 → A11" — no invented left/right turns or precise distances. When the location is unclear, the camera can read a company name or booth number to help localize; if two booths appear, it asks instead of guessing.',
      'Outdoor navigation uses a navigation SDK for real positioning and routing. When the venue IoT network lacks the map domain allowlist, requests are relayed through the backend domain — positioning still comes from the glasses and the map service, never from a model inventing a route.',
      'Exhibitor lookup: saying "take a photo" opens a visible preview, the shutter is pressed manually, and a clearly recognized exhibitor name is automatically queried against the knowledge base. Blurry shots, two companies in frame, or no matching record produce honest prompts — no fabricated exhibitor data.',
      'Device control-plane backend: a fresh pair self-registers on first launch and pulls the complete default configuration, so nobody fills in keys on site. Global defaults and per-device overrides are kept separate; a global change never overwrites what a specific pair has set, and that survives hot updates and reboots.',
      'Screen-on policy is owned by the app: interpretation, navigation, exhibition, QR and camera all keep the display awake, and only Settings may idle to sleep — dimming the screen while a tool is serving the user counts as a defect.',
    ],
    tech: ['Android · Java', 'Rokid Glass SDK', 'AMap Navigation SDK', 'ASR / TTS', 'Dify', 'Qwen', 'Node.js 控制面'],
    status:
      '眼镜端 APK 与设备控制面已分离部署并打通，语音入口、室内外导航、展商检索、同传与后台远程配置均已上机验证；真实场馆的佩戴、步行与到达验收仍有部分项在收尾。按约定，客户名称与商务细节不予披露。',
    statusEn:
      'The glasses APK and the device control plane are deployed separately and fully wired: voice entry, indoor and outdoor navigation, exhibitor lookup, interpretation and remote backend configuration are all validated on device. On-site acceptance involving wearing the glasses, walking and arrival still has items being closed out. Per agreement, the client name and commercial details are not disclosed.',
    links: [],
  },
  {
    id: 'scoliosis',
    kind: 'client',
    title: '儿童青少年脊柱侧弯智能辅助筛查系统',
    titleEn: 'AI-Assisted Scoliosis Screening System for Children & Adolescents',
    field: '医疗健康 / 医学影像辅助筛查',
    fieldEn: 'Healthcare / Medical Imaging Assisted Screening',
    year: '2026',
    intro:
      'ScoliAssist —— 面向儿童青少年的脊柱侧弯智能辅助筛查系统，三端协同：现场采集端、医生复核端、系统管理后台。我方承担三个前端与一个薄后端；模型推理、关键点与几何指标、风险分级由甲方算法服务提供，经后端唯一出口接入。边界很硬：只做辅助分诊，不替代医生诊断，不输出实测角度，一切结论须经医生人工复核。',
    introEn:
      'ScoliAssist — an AI-assisted scoliosis screening system for children and adolescents, spanning three surfaces: on-site capture, doctor review, and an admin console. My side delivered the three front ends plus a thin backend; model inference, keypoints, geometric metrics and risk grading come from the client’s algorithm service, integrated through a single backend outlet. The boundary is strict: assisted triage only — it never replaces a doctor’s diagnosis, never outputs measured angles, and every conclusion must be reviewed and signed by a physician.',
    points: [
      '采集端（Android）：受检者录入、六视角标准化采集、拍摄过程实时质控与离线缓存，弱网或无网的筛查现场也能完成采集。',
      '医生复核端（Web）：原图与关键点叠加可视化，医生逐例复核、修正并签发，输出双版 PDF 报告。',
      '管理后台（Web）：机构与账号管理、阈值配置、统计看板、审计日志。',
      '薄后端（FastAPI）：授权、业务流程、任务调度、结果存储、报告生成，并统一适配甲方算法接口作为单一集成点；图像与媒体直传私有云存储，不经业务进程转发。',
      '合规：全链路私有化部署、数据不出院（等保三级）；历史结论不可覆盖，所有修改留痕进审计日志。',
    ],
    pointsEn: [
      'Capture app (Android): subject registration, standardized six-view capture, real-time quality checks during shooting, and offline caching — so screening can run at sites with weak or no connectivity.',
      'Doctor review console (Web): keypoints overlaid on the original images, case-by-case review, correction and sign-off, producing two versions of the PDF report.',
      'Admin console (Web): organization and account management, threshold configuration, statistics dashboards, and audit logs.',
      'Thin backend (FastAPI): authorization, business flow, task scheduling, result storage and report generation, plus a single adapter for the client’s algorithm API as the one integration point; images go straight to private cloud storage instead of being relayed by the business process.',
      'Compliance: fully on-premise deployment with data never leaving the hospital (Level-3 protection); historical conclusions cannot be overwritten and every change is recorded in the audit log.',
    ],
    tech: ['Kotlin · Jetpack Compose', 'CameraX · Room', 'Vue 3 · TypeScript', 'FastAPI · Python', 'MySQL', '私有云 OSS'],
    status: '三端已打通，采集 → 复核 → 签发归档的完整流程跑通。按合同约定，甲方名称与业务细节不予披露。',
    statusEn:
      'All three surfaces are connected, with the full capture → review → sign-off and archival flow working. Per contract, the client’s name and business details are not disclosed.',
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
    heroTitle: '合作项目',
    heroSubtitle: '匿名委托 · 公开贡献',
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
    heroTitle: 'Collaborations',
    heroSubtitle: 'Anonymous commissions · public contributions',
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
