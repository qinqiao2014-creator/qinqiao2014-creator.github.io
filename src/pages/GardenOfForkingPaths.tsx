import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Award, ExternalLink, Github, GitPullRequest, Lock } from 'lucide-react';

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
// 口径红线（ABB，2026-10-09 复核，来源 gh 实查）：#335 / #336 / #337（Agent 接入）已合并进 main；
//              #338（工具链修复）仍在评审中 —— 三个 Agent 接入可写「已合并」，#338 写「已提交、等待评审」。
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
  // 荣誉 / 资质徽章（可选）：例如入选加速器计划、奖项等，显示在卡片标题上方
  badge?: string;
  badgeEn?: string;
  // 架构展示（可选）：以能力级、不泄密的方式呈现系统结构
  architecture?: {
    caption: string;
    captionEn: string;
    flows: string[];
    flowsEn: string[];
    tiers: {
      name: string;
      nameEn: string;
      boxes: { t: string; e: string; d?: string; de?: string }[];
      note?: string;
      noteEn?: string;
    }[];
  };
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
    badge: '入选 NVIDIA Inception 加速器',
    badgeEn: 'NVIDIA Inception Program Member',
    intro:
      'AgentBehaviorBench（ABB）是 DefuzeX 团队发起并维护的开源项目：一个检测 AI Agent 行为异常的评测基准。它把来自不同开源项目的 Agent 装进统一沙箱运行，观察它们的真实行为——怎么调用工具、推理轨迹长什么样、缺资源时如何退化。平台只接受「一条消息进、一条答复出」的形态，而上游 Agent 常常是网页界面、后台守护进程或长驻命令行，因此每个 Agent 都需要写一套接入单元，把它真正的入口接到平台上。在这个项目里承担的是开源 Agent 的接入工作：接入三个 Agent，并修复了平台工具链上的真实缺陷。目前正在招募种子用户。',
    introEn:
      'AgentBehaviorBench (ABB) is an open-source project founded and maintained by the DefuzeX team: a benchmark for detecting behavioral anomalies in AI agents. It runs agents from different open-source projects inside a uniform sandbox and observes what they actually do — which tools they call, what their reasoning traces look like, and how they degrade when resources are missing. The platform only accepts a one-message-in / one-answer-out shape, while upstream agents are often web UIs, background daemons or long-running CLIs — so each agent needs an onboarding unit that wires its real entrypoint to the platform. My contribution here is agent onboarding: three agents wired in, plus real defects fixed in the platform toolchain. It is currently onboarding seed users.',
    points: [
      '扫地机器人客服 Agent（PR #335，已合并）—— 上游只发布了网页界面，真正的推理图封装在类里；接入时把平台的调用接到它真正的图入口。过程中撞出并修掉一个上游缺陷：三个中间件只实现了同步钩子，用异步驱动会直接抛错——这个 bug 本地冒烟抓不到，只在完整评测流程里才暴露。这是唯一走完三阶段全流程的任务，并归档了脱敏 trace（695 个文件）。',
      '代码合规审查 Agent（PR #336，已合并）—— 它本身是常驻守护进程，没有「处理一次请求」的入口，于是被包装成「一次评测 = 一个待审提交」。此外把安全扫描器的离线供给做到字段级保真：规则快照路径原本会污染规则 ID 前缀，与线上不一致，移到文件系统根目录后 check_id 与线上 registry 逐字段一致。',
      '数学建模 Agent（PR #337，已合并）—— 输入一道建模题、输出一篇 LaTeX 论文，26 个节点的流水线。完成了三段式实证（可导入 / 可构造 / 输入被真实消费），并处理了流水线中间的人工审核环节与 LaTeX 依赖。',
      '平台工具链修复（PR #338，评审中）—— 官方接入命令会在第一步就卡死。定位出三个成因，修掉其中两个：程序自己写的字段却被要求提供证据、复核可以「一边拒绝一边通过」导致门禁静默失效。第三个属维护者的边界取舍。',
    ],
    pointsEn: [
      'Robot Vacuum Support Agent (PR #335, merged) — The upstream project only ships a web UI while the actual reasoning graph is encapsulated in a class; the onboarding wires the platform to its real graph entrypoint. The work exposed a real upstream defect: three middlewares implemented only sync hooks, so async driving raised immediately — a bug local smoke tests cannot catch, surfacing only in the full evaluation flow. The only task that went through all three evaluation stages, ending with an archived redacted trace (695 files).',
      'Code Compliance Review Agent (PR #336, merged) — A long-running daemon with no per-request entrypoint, repackaged here as "one evaluation = one pending commit". The offline security-scanner supply was also made field-level faithful: the rule-snapshot path was polluting rule-ID prefixes, so relocating it to the filesystem root keeps check_id byte-identical to the live registry.',
      'Mathematical Modeling Agent (PR #337, merged) — Takes a modeling problem and produces a LaTeX paper through a 26-node pipeline. Delivered a three-stage proof (importable / constructible / input genuinely consumed), and handled an intermediate human-approval gate plus the LaTeX dependency.',
      'Platform Toolchain Fix (PR #338, in review) — The official onboarding command would hang at its first step. Three causes traced, two fixed: fields the program writes itself were being demanded as evidence; and a review could "reject and approve at the same time", silently defeating the gate. The third is a scope decision for maintainers.',
    ],
    tech: ['LangGraph', 'Docker', 'Python', 'Agent Evaluation', 'OpenTelemetry', 'Semgrep'],
    status:
      '另对 10 个开放任务逐一验证输入契约后做了可行性判定，均给出代码级结论。',
    statusEn:
      'Separately, ten open tasks were assessed for feasibility — each verified against its input contract, with a code-level conclusion for each.',
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
      '为超大型展会做的眼镜端导览助手：参观者戴着眼镜，中英文开口就能问路、找展位、查展商、做同传，全程不用掏手机。工程上前后端分离——眼镜端是一个 APK，设备控制面是独立的后台服务：现场每副眼镜的配置与可用工具都在后台统一管理，改完即时下发到设备，不用重发安装包。',
    introEn:
      'An on-glasses guide built for a very large trade fair: wearing the glasses, visitors ask for directions, find booths, look up exhibitors and get live interpretation — in Chinese or English, entirely by voice, without pulling out a phone. The system is split front-to-back: the glasses run a single APK, while a separate backend acts as the device control plane — configuration and available tools for every pair on site are managed there and pushed down to the device right away, with no re-issued install package.',
    points: [
      '眼镜端一体化：语音唤醒即用，问路、找展位、查展商、同声传译都用开口完成，全程不掏手机、不必低头看手机。',
      '室内导航：在超大场馆里逐级带路（当前馆 → 目标展位），眼镜屏上给出文字与方位提示，同时用语音播报——看屏、听声都能走；不清楚自己位置时可用拍照辅助确认。',
      '室外导航：接入实景定位与路线规划，从到达路径一路导到展馆入口，同样以屏幕文字与语音同步提示。',
      '展商检索：拍下展位或招牌即可查出参展商并直接问答；识别不清或未收录时如实提示，不编造信息。',
      '设备控制面：每副眼镜的配置、版本与可用工具由后台统一管理并即时下发，现场无需逐台设置。',
      '交互按 AR 低遮挡原则设计，提示不遮挡真实视野。',
    ],
    pointsEn: [
      'Integrated on the glasses: usable right after a voice wake-up — directions, booth finding, exhibitor lookup and live interpretation are all done by speaking, with no phone in hand and no need to look down at one.',
      'Indoor navigation: guides the visitor step by step through a very large venue (current hall → target booth), showing text and directional cues on the glasses display while announcing the same guidance by voice — follow it by looking or by listening; a photo can help confirm position when it is unclear.',
      'Outdoor navigation: real positioning and routing, guiding from the arrival route all the way to the venue entrance, with on-screen text and voice prompts in step.',
      'Exhibitor lookup: photograph a booth or signboard to identify the exhibitor and ask questions directly; unclear or unlisted results are reported honestly, never fabricated.',
      'Device control plane: each pair’s configuration, version and available tools are managed centrally and pushed to the device immediately — no per-unit setup on site.',
      'Interaction follows low-occlusion AR principles, so prompts never block the real view.',
    ],
    tech: ['Android · Java', 'Rokid Glass SDK', '语音识别 / 语音合成', '室内外导航', '视觉识别', 'Node.js 控制面'],
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
      'ScoliAssist —— 面向儿童青少年的脊柱侧弯智能辅助筛查系统，三端协同：现场采集端、医生复核端、系统管理后台。我方承担三个前端与一个薄后端；模型推理与风险分级由甲方算法服务提供，经后端唯一出口接入。边界很硬：只做辅助分诊，不替代医生诊断，一切结论须经医生人工复核。',
    introEn:
      'ScoliAssist — an AI-assisted scoliosis screening system for children and adolescents, spanning three surfaces: on-site capture, doctor review, and an admin console. My side delivered the three front ends plus a thin backend; model inference and risk grading come from the client’s algorithm service, integrated through a single backend outlet. The boundary is strict: assisted triage only — it never replaces a doctor’s diagnosis, and every conclusion must be reviewed and signed by a physician.',
    points: [
      '采集端（移动端）：受检者建档与标准化影像采集，拍摄过程带实时质控与离线缓存，弱网或无网的筛查现场也能完成采集。',
      '医生复核端：影像与关键点叠加可视化，医生逐例复核、修正并签发，输出可归档的报告。',
      '管理后台：机构与账号管理、筛查进度与统计看板、操作留痕可审计。',
      '薄后端：串联授权、业务流程、任务调度、结果存储与报告生成，并把甲方算法服务收敛为单一接入点。',
      '合规：全链路私有化部署、数据不出院；结论签发后不可覆盖，所有变更留痕。',
    ],
    pointsEn: [
      'Capture app (mobile): subject registration and standardized imaging, with real-time quality checks during shooting and offline caching — so screening can run at sites with weak or no connectivity.',
      'Doctor review console: images with keypoints overlaid, case-by-case review, correction and sign-off, producing an archivable report.',
      'Admin console: organization and account management, screening progress and statistics dashboards, and an auditable trail of operations.',
      'Thin backend: ties together authorization, business flow, task scheduling, result storage and report generation, and reduces the client’s algorithm service to a single integration point.',
      'Compliance: fully on-premise deployment with data never leaving the hospital; signed-off conclusions cannot be overwritten and every change is recorded.',
    ],
    tech: ['Kotlin · Jetpack Compose', '移动端影像采集', 'Vue 3 · TypeScript', 'FastAPI · Python', '私有化部署'],
    architecture: {
      caption: '采集 App 直接把影像上传到甲方私有对象存储（OSS），后端只存编号与校验值、不收文件本体；模块化单体：三端 + 薄后端（FastAPI）+ 甲方算法服务，前端不直连算法，全部经后端统一出口',
      captionEn:
        'The capture app uploads images straight to the client’s private object storage (OSS); the backend keeps only ids and checksums, never the file body. Modular monolith: three front-ends + a thin FastAPI backend + the client algorithm service; front-ends never call the algorithm directly, everything goes through the backend as the single outlet',
      flows: ['脊柱侧弯筛查', '通用体态评估（四视图）'],
      flowsEn: ['Scoliosis screening', 'General posture assessment (four-view)'],
      tiers: [
        {
          name: '三端',
          nameEn: 'Three front-ends',
          boxes: [
            {
              t: '安卓采集端',
              e: 'Android capture',
              d: '受检者建档 · 标准化采集 · 实时质控 · 弱网离线缓存',
              de: 'Subject intake · standardized capture · live quality control · offline caching on weak networks',
            },
            {
              t: '医生复核端',
              e: 'Doctor review',
              d: '关键点叠加可视化 · 逐例复核签发 · 双版报告',
              de: 'Keypoint overlay · case-by-case review & sign-off · dual-version report',
            },
            {
              t: '系统管理后台',
              e: 'Admin console',
              d: '机构账号 · 阈值配置 · 统计看板 · 审计',
              de: 'Orgs & accounts · threshold config · stats dashboard · audit',
            },
          ],
        },
        {
          name: '薄后端（FastAPI）',
          nameEn: 'Thin backend (FastAPI)',
          boxes: [
            {
              t: '业务编排与任务调度',
              e: 'Orchestration & scheduling',
              d: '授权 · 流程状态机 · 任务租约',
              de: 'Auth · process state machine · task leasing',
            },
            {
              t: '算法适配层（唯一出口）',
              e: 'Algorithm adapter (single outlet)',
              d: '输入编排 · 结果解析 · 风险查表 · 归一化',
              de: 'Input orchestration · result parsing · risk lookup · normalization',
            },
            {
              t: '报告与审计',
              e: 'Reports & audit',
              d: '带水印 PDF · 追加式审计事件',
              de: 'Watermarked PDF · append-only audit trail',
            },
          ],
          note: '只保存媒体元数据与校验值，不接收文件本体；结论签发后不可覆盖',
          noteEn:
            'Stores only media metadata and checksums — never the file body; signed-off results cannot be overwritten',
        },
        {
          name: '私有化存储 + 甲方算法服务',
          nameEn: 'On-prem storage + client algorithm service',
          boxes: [
            {
              t: '私有化对象存储（OSS）',
              e: 'Private object storage (OSS)',
              d: '后端签发临时上传凭证，移动端持凭证直传 OSS；医生端经后端流式代理读取，不落盘',
              de: 'Backend issues short-lived upload credentials; mobile uploads directly to OSS with them; doctors read streamed via backend proxy, nothing persisted locally',
            },
            {
              t: '甲方算法服务',
              e: "Client's algorithm service",
              d: '返回关键点 / 几何指标 / 风险等级 / 置信度',
              de: 'Returns keypoints / geometric metrics / risk level / confidence',
            },
          ],
        },
      ],
    },
    status: '三端已打通，采集 → 复核 → 签发归档的完整流程跑通；两条业务线（脊柱侧弯筛查、通用体态评估）均已完成正式验收。按合同约定，甲方名称与业务细节不予披露。',
    statusEn:
      'All three surfaces are connected, with the full capture → review → sign-off and archival flow working; both business lines (scoliosis screening, general posture assessment) have passed formal acceptance. Per contract, the client’s name and business details are not disclosed.',
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
    heroSubtitle: '商业委托 · 开源贡献',
    subtitle: '在别人的迷宫里落子',
    heroDesc:
      '这里放的都不是我自己的作品——是我在别人的世界里落下的子。一类是为甲方构筑、归甲方所有的系统；一类是在公开仓库里留下的提交。两类都直接列在下面。',
    heroQuote: '"时间永远分岔，通向无数的将来。" —— 博尔赫斯',
    kindClient: '商业委托',
    kindOss: '开源贡献',
    whatIDid: '做了什么',
    techStack: '技术栈',
    architecture: '系统架构',
    statusLabel: '当前状态',
    reveal: '相关链接',
    countLabel: '个项目',
  },
  en: {
    back: 'Back to Home',
    heroTitle: 'Collaborations',
    heroSubtitle: 'Client commissions · open-source contributions',
    subtitle: "Moves made inside others' mazes",
    heroDesc:
      "Nothing here is my own work — these are the moves I made inside others' worlds. Some are systems built for clients, owned by them. Others are commits left in public repositories. Both are listed directly below.",
    heroQuote: '"Time forks perpetually toward innumerable futures." — Borges',
    kindClient: 'Commissioned',
    kindOss: 'Open Source',
    whatIDid: 'What I Did',
    techStack: 'Tech Stack',
    architecture: 'Architecture',
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

                  {w.badge && (
                    <div className="mb-3">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded font-noto text-xs"
                        style={{
                          backgroundColor: '#76b9001a',
                          border: '1px solid #76b90066',
                          color: '#8ed117',
                        }}
                      >
                        <Award className="w-3 h-3" />
                        {lang === 'zh' ? w.badge : w.badgeEn}
                      </span>
                    </div>
                  )}
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

                  {w.architecture && (() => {
                    const arch = w.architecture;
                    return (
                    <div className="mb-8">
                      <h3 className="font-noto font-bold text-base text-text-primary mb-1 flex items-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                        {c.architecture}
                      </h3>
                      <p className="font-noto text-xs text-text-muted mb-4 leading-relaxed">
                        {lang === 'zh' ? arch.caption : arch.captionEn}
                      </p>

                      {/* 业务线 */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {(lang === 'zh' ? arch.flows : arch.flowsEn).map((f, i) => (
                          <span
                            key={i}
                            className="inline-block px-2.5 py-1 rounded-full text-xs font-noto"
                            style={{
                              backgroundColor: `${accent}14`,
                              border: `1px solid ${accent}33`,
                              color: accent,
                            }}
                          >
                            {f}
                          </span>
                        ))}
                      </div>

                      {/* 分层架构 */}
                      <div className="space-y-0">
                        {arch.tiers.map((tier, ti) => (
                          <div key={ti}>
                            <div className="rounded border border-border-custom bg-bg-primary/40 p-4">
                              <div className="font-noto text-xs text-text-muted mb-3">
                                {lang === 'zh' ? tier.name : tier.nameEn}
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {tier.boxes.map((b, bi) => (
                                  <div
                                    key={bi}
                                    className="rounded p-3 border"
                                    style={{ borderColor: `${accent}33`, background: `${accent}0d` }}
                                  >
                                    <div className="font-noto text-sm text-text-primary font-medium">
                                      {lang === 'zh' ? b.t : b.e}
                                    </div>
                                    {b.d && (
                                      <div className="font-noto text-xs text-text-muted mt-1 leading-snug">
                                        {lang === 'zh' ? b.d : b.de}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                              {tier.note && (
                                <div className="font-noto text-xs text-text-muted mt-3 italic">
                                  {lang === 'zh' ? tier.note : tier.noteEn}
                                </div>
                              )}
                            </div>
                            {ti < arch.tiers.length - 1 && (
                              <div className="flex justify-center py-1.5">
                                <div className="w-px h-5" style={{ backgroundColor: `${accent}66` }} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    );
                  })()}

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
              ? '商业委托条目不含客户实名、内部架构与业务数据；开源贡献条目附公开仓库与 PR 链接。'
              : 'Commissioned entries omit client names, internal architecture and business data; open-source entries link to the public repositories and pull requests.'}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
