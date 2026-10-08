import { ExternalLink, ArrowLeft, Github, Star, Briefcase, Clock, Mic, Image, FileText, GitBranch, Code2, CheckCircle2, ArrowRight, Activity, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { resolveStars } from '../lib/resolveStars';

type SkillDetail = {
  name: string;
  nameEn: string;
  tag: string;
  tagEn: string;
  oneLiner: string;
  oneLinerEn: string;
  desc: string;
  descEn: string;
  features: string[];
  featuresEn: string[];
  tech: string[];
  url: string;
  stars: number;
  icon: React.ReactNode;
};

const t = {
  zh: {
    back: '返回首页',
    heroTitle: '巴别图书馆',
    heroSubtitle: 'The Library of Babel',
    heroDesc: '我造的工具与技能收藏——Skill、工作流，以及能把 AI 当学徒使的各类装置。博尔赫斯设想了一座包含一切可能之书的无限图书馆；这里是我造的那些书。',
    heroQuote: '"我一直在写那本同样的书，只是稍稍变动一下标题。" —— 博尔赫斯',
    viewRepo: '查看仓库',
    features: '核心能力',
    techStack: '技术栈',
    stars: 'Star',
  },
  en: {
    back: 'Back to Home',
    heroTitle: 'The Library of Babel',
    heroSubtitle: 'The Library of Babel',
    heroDesc: 'My collection of crafted tools and skills — skills, workflows, and contraptions that put AI to work as an apprentice. Borges imagined an infinite library containing every possible book; these are the ones I\'ve written.',
    heroQuote: '"I have always been writing the same book, only with slight variations of title." — Borges',
    viewRepo: 'View Repository',
    features: 'Key Features',
    techStack: 'Tech Stack',
    stars: 'Stars',
  },
};

const skillsData: SkillDetail[] = [
  {
    name: 'zhicheng-shenbao-skill',
    nameEn: 'zhicheng-shenbao-skill',
    tag: '申报助手',
    tagEn: 'Filing Helper',
    oneLiner: '职称初定与评审申报全流程自动化',
    oneLinerEn: 'End-to-end automation for professional-title declaration & review',
    desc: '面向江苏省（以南京为例）的职称初定与评审申报全流程 Skill。覆盖：正确搜索入口、区级登记机关选择、企业 session 切换、变更事项勾选、经营范围规范表述勾选（避坑许可项目）、系统自动生成材料、提交、电子签名、进度查询。也适用于高淳区 / 江宁开发区等不同区县场景。',
    descEn: 'A full-lifecycle skill for professional title declaration and review filing in Jiangsu Province (Nanjing as reference). Covers: correct search portal, district authority selection, enterprise session switching, change item selection, standardized business scope wording (avoiding pitfall licensing items), auto-generated materials, submission, e-signature, and progress tracking. Also applicable to Gaochun, Jiangning Development Zone, and other districts.',
    features: [
      '从搜索入口到提交的全流程引导，不遗漏任何步骤',
      '自动识别并规避许可类经营范围表述陷阱',
      '系统自动生成申报材料，减少手工填写错误',
      '支持电子签名与在线提交，进度实时可查',
      '适配南京各区县（江宁 / 高淳 / 鼓楼等）的不同登记机关',
    ],
    featuresEn: [
      'End-to-end guidance from portal search to submission — no step missed',
      'Auto-detects and avoids licensing business scope pitfalls',
      'Auto-generates filing materials, reducing manual entry errors',
      'Supports e-signature and online submission with real-time progress tracking',
      'Adapts to different district authorities across Nanjing (Jiangning / Gaochun / Gulou, etc.)',
    ],
    tech: ['WorkBuddy Skill', 'Browser Automation', 'JavaScript'],
    url: 'https://github.com/qinqiao2014-creator/zhicheng-shenbao-skill',
    stars: 1,
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    name: 'schedule-onepager-skill',
    nameEn: 'schedule-onepager-skill',
    tag: '效率工具',
    tagEn: 'Productivity',
    oneLiner: '一页纸排期表，数据驱动生成 HTML 并直接渲染进邮箱',
    oneLinerEn: 'One-page schedule generator that renders HTML straight into your inbox',
    desc: '把零散进来的行程信息归档成一张排期表，并在被要求时发送到邮箱。一个 skill、一个 SQLite（personal.db，三张表：schedule / todo /history）、一个统一 CLI（personal.py）。HTML 排期表只是 export 导出视图，永不手工编辑，倒计时自动按导出日重算。支持「今日 TODO」与「每日历史记录」两种独立模式。',
    descEn: 'Archives scattered schedule items into a single one-pager, with optional email delivery. One skill, one SQLite database (personal.db, 3 tables: schedule / todo / history), one unified CLI (personal.py). The HTML schedule is purely an export view — never hand-edited, countdowns auto-recalculate on export date. Supports independent "Today\'s TODO" and "Daily History" modes.',
    features: [
      '三表架构：排期表 / 今日 TODO / 每日历史记录，互不合并',
      '数据驱动 HTML 渲染，倒计时自动重算',
      '邮件发送走 SMTP 直连（HTML 正文渲染，非附件）',
      'CLI 统一入口：schedule | todo | history add/list/export/done/set/stats',
      '跨月自动清理已完成历史记录，保持视图清爽',
    ],
    featuresEn: [
      'Three-table architecture: Schedule / Today\'s TODO / Daily History — never merged',
      'Data-driven HTML rendering with auto-recalculating countdowns',
      'Email via direct SMTP (HTML rendered in body, not attachment)',
      'Unified CLI: schedule | todo | history add/list/export/done/set/stats',
      'Auto-cleanup of completed records on month boundary',
    ],
    tech: ['Python', 'SQLite', 'SMTP', 'HTML/CSS', 'WorkBuddy Skill'],
    url: 'https://github.com/qinqiao2014-creator/schedule-onepager-skill',
    stars: 0,
    icon: <Clock className="w-6 h-6" />,
  },
  {
    name: 'live-class-skill',
    nameEn: 'live-class-skill',
    tag: '会议转录',
    tagEn: 'Meeting Notes',
    oneLiner: '直播课 / 会议的「代听」转写，自动生成纪要文本',
    oneLinerEn: '"Attend-for-you" transcription for live classes & meetings, auto-generating minutes',
    desc: '当你没法亲自参加直播课或会议时，这个 skill 充当你的「代听」——录制 / 接入音视频流，自动转写成文字纪要。支持直播课回放、会议录音、视频文件等多种输入源。输出结构化纪要，含时间戳、发言人识别（如可用）、关键要点提取。',
    descEn: 'When you can\'t attend a live class or meeting in person, this skill serves as your "attend-for-you" proxy — records / taps into AV streams and auto-transcribes into text minutes. Supports live class replays, meeting recordings, video files, and more. Outputs structured minutes with timestamps, speaker identification (when available), and key point extraction.',
    features: [
      '多源输入：直播课回放 / 会议录音 / 本地视频文件',
      '自动转写 + 结构化纪要生成，含时间戳对齐',
      '关键要点提取与摘要，不用听完全文就能抓重点',
      '支持中英双语转写',
      '输出 Markdown 格式纪要，可直接归档或分享',
    ],
    featuresEn: [
      'Multi-source input: live class replays / meeting recordings / local video files',
      'Auto-transcription + structured minute generation with timestamp alignment',
      'Key point extraction and summarization — grasp highlights without full playback',
      'Supports Chinese and English transcription',
      'Outputs Markdown-formatted minutes ready for archiving or sharing',
    ],
    tech: ['Whisper / faster-whisper', 'Python', 'FFmpeg', 'WorkBuddy Skill'],
    url: 'https://github.com/qinqiao2014-creator/live-class-skill',
    stars: 1,
    icon: <Mic className="w-6 h-6" />,
  },
  {
    name: 'imgbox-skill',
    nameEn: 'imgbox-skill',
    tag: '图像生成',
    tagEn: 'Image Gen',
    oneLiner: '聚合多家生图模型（含 StepFun）的一站式入口，含 AI 抠图',
    oneLinerEn: 'One-stop hub aggregating multiple image models (including StepFun), with AI matting',
    desc: '聚合多家生图模型 + AI 抠图的一站式入口。内置 StepFun / 火山方舟 Seedream，支持任意 OpenAI 兼容生图接口，以及基于 U²-Net 的本地 AI 抠图。当需要生成、编辑、修改图片（概念图、海报、宣传物料、展位视觉、产品 mockup），或说"用 seedream 出图 / 生成图片 / 豆包画图"时调用。',
    descEn: 'A one-stop hub aggregating multiple image generation models plus AI matting. Built-in StepFun / Volcano Ark Seedream, supports any OpenAI-compatible image generation API, plus local U²-Net-based AI matting. Triggered when you need to generate, edit, or modify images (concept art, posters, promotional materials, booth visuals, product mockups), or say "use seedream / generate image".',
    features: [
      '多模型聚合：StepFun / Seedream / 任意 OpenAI 兼容接口',
      '内置 AI 抠图（U²-Net），生成后直接去背景',
      '支持文生图、图生图、编辑等多种操作模式',
      '一站式入口：不再需要分别记各家的 API 和参数格式',
      '已融合原 stepfun-img-skill 功能，统一调用',
    ],
    featuresEn: [
      'Multi-model aggregation: StepFun / Seedream / any OpenAI-compatible API',
      'Built-in AI matting (U²-Net) for instant background removal',
      'Supports text-to-image, image-to-image, editing, and more',
      'One-stop entry: no need to remember each provider\'s API and param format',
      'Merged former stepfun-img-skill into unified interface',
    ],
    tech: ['StepFun API', 'Seedream / Volcano Ark', 'U²-Net', 'OpenAI Compatible', 'Python'],
    url: 'https://github.com/qinqiao2014-creator/imgbox-skill',
    stars: 0,
    icon: <Image className="w-6 h-6" />,
  },
  {
    name: 'resume-onepager-skill',
    nameEn: 'resume-onepager-skill',
    tag: '简历',
    tagEn: 'Resume',
    oneLiner: '一页纸简历生成，输出带真实文字层的 A4 PDF / PNG',
    oneLinerEn: 'One-page resume generator exporting A4 PDF / PNG with real text layers',
    desc: '一页纸简历生成器。内置 data/<user>/ 隔离层（如 data/覃翘/me.yaml 为 AI Agent / resume profile），公开 GitHub、工作流自动归档输入数据。输出带真实文字层的 A4 PDF 或 PNG——不是图片模拟文字，而是真正的可选中文本，方便 HR 系统解析和搜索引擎索引。',
    descEn: 'One-page resume generator with built-in data/<user>/ isolation layer (e.g., data/覃翘/me.yaml as the AI agent / resume profile). Public GitHub repo with auto-archived input data workflow. Exports A4 PDF or PNG with real text layers — not image-simulated text, but actual selectable text for easy HR system parsing and search engine indexing.',
    features: [
      '真实文字层输出：PDF/PNG 中的文字可选中、可复制、可搜索',
      '用户数据隔离：data/<user>/ 目录隔离多用户 profile',
      'A4 一页纸排版，自适应中英文内容长度',
      'YAML 驱动的内容配置，改数据不改模板',
      '公开 GitHub 工作流，输入数据自动归档版本管理',
    ],
    featuresEn: [
      'Real text layer output: text in PDF/PNG is selectable, copyable, searchable',
      'User data isolation: data/<user>/ directory isolates multiple user profiles',
      'A4 one-page layout, adaptive to Chinese/English content length',
      'YAML-driven content configuration — change data, not template',
      'Public GitHub workflow with auto-archived input data versioning',
    ],
    tech: ['Python', 'ReportLab / PIL', 'YAML', 'PDF Generation', 'WorkBuddy Skill'],
    url: 'https://github.com/qinqiao2014-creator/resume-onepager-skill',
    stars: 0,
    icon: <FileText className="w-6 h-6" />,
  },
  {
    name: 'multi-agent-async-workflow',
    nameEn: 'multi-agent-async-workflow',
    tag: '工作流',
    tagEn: 'Workflow',
    oneLiner: '多 Agent 异步协同，以 GitHub Issues 作为任务总线',
    oneLinerEn: 'Multi-agent async collaboration using GitHub Issues as a task bus',
    desc: '多智能体异步协作工作流的核心架构。大模型规划 + 小模型执行的推压栈模式，独立 session 桥接、GitHub Issues 作为持久化消息队列（日均数十条）。计划以公共仓库开源，推进重命名以体现异步特性。同步关注 yoda agent 吸收复用。通用底座作为同方向沉淀进行对照复用。',
    descEn: 'Core architecture for multi-agent async collaboration workflows. Large-model planning + small-model execution push/pop stack pattern, independent session bridging, GitHub Issues as persistent message queue (tens of messages daily). Planned for open-source release under a public repository, with renaming to reflect async nature. Parallel exploration of yoda agent absorption and reuse. General-purpose base serves as reference for the same direction.',
    features: [
      '推压栈调度：大模型规划意图、小模型执行具体任务',
      'GitHub Issues 当消息队列：天然持久化、可搜索、可追溯',
      '独立 session 桥接：每个 Agent 在自己的上下文中运行',
      '异步协作：无需轮询、事件驱动的任务分发与结果回收',
      '通用底座可复用：不绑定特定 Agent 框架或 LLM 提供商',
    ],
    featuresEn: [
      'Push/pop stack scheduling: large model plans intent, small model executes tasks',
      'GitHub Issues as message queue: natively persistent, searchable, traceable',
      'Independent session bridging: each Agent runs in its own context',
      'Async collaboration: event-driven task dispatch and result collection without polling',
      'Reusable general base: not tied to any specific Agent framework or LLM provider',
    ],
    tech: ['GitHub API', 'Python', 'Async Architecture', 'Multi-Agent Systems', 'Message Queue Pattern'],
    url: 'https://github.com/qinqiao2014-creator/multi-agent-async-workflow',
    stars: 7,
    icon: <GitBranch className="w-6 h-6" />,
  },
  {
    name: 'agent-usage-skill',
    nameEn: 'agent-usage-skill',
    tag: '用量监控',
    tagEn: 'Usage Monitor',
    oneLiner: '本地多 AI Agent Token 用量统一监控看板',
    oneLinerEn: 'Unified local dashboard for multi-Agent Token usage monitoring',
    desc: '本地多 AI Agent Token 用量统一监控 Skill。插件化架构——装了新 Agent，丢一个插件文件就能接入；实时监控，数据源一变看板自动刷新；写了 SKILL.md，任何 AI 都能自动发现并调用。涵盖总用量 KPI、每日趋势、各 Agent 对比、模型 TOP15、会话明细，并提供结构化 JSON 的 Agent API。单文件 exe，本地运行，数据不上传云端。',
    descEn: 'A unified local Token-usage monitoring skill for multiple AI Agents. Plugin-based architecture — drop a plugin file to onboard a new Agent; real-time watch that auto-refreshes the dashboard on data change; ships a SKILL.md so any AI can auto-discover and invoke it. Covers total-usage KPIs, daily trends, per-Agent comparison, model TOP15, session details, plus a structured-JSON Agent API. Single-file exe, runs locally, no data uploaded to the cloud.',
    features: [
      '插件化架构：接入新 Agent 只需丢一个插件文件',
      '实时监控 + SSE 推送，数据源变化看板自动刷新',
      '总用量 KPI、每日趋势堆叠柱、各 Agent 对比、模型 TOP15',
      'Agent API 返回结构化 JSON，AI 直接调用无需解析',
      '单文件 exe，本地运行，数据不上传云端',
    ],
    featuresEn: [
      'Plugin architecture — onboard a new Agent with just one plugin file',
      'Real-time monitoring + SSE push, dashboard auto-refreshes on data change',
      'Total-usage KPIs, daily trend stacked bars, per-Agent comparison, model TOP15',
      'Agent API returns structured JSON for direct AI invocation',
      'Single-file exe, runs locally, no data uploaded to the cloud',
    ],
    tech: ['Python', 'SSE', 'SQLite', 'Dashboard', 'WorkBuddy Skill'],
    url: 'https://github.com/qinqiao2014-creator/agent-usage-skill',
    stars: 0,
    icon: <Activity className="w-6 h-6" />,
  },
  {
    name: 'form-autofill-skill',
    nameEn: 'form-autofill-skill',
    tag: '填表助手',
    tagEn: 'Form Helper',
    oneLiner: '一次录档，表单自动填；提交永远由你本人点',
    oneLinerEn: 'Record once, forms auto-fill — submit always by you',
    desc: '一次录档，表单自动填；提交永远由你本人点。给它一个在线表单（默认面向飞书多维表格公开表单，也适用一般 Web 表单），抓出每个字段的标签 / 类型 / 是否必填，用你的固定信息档案做映射，能对上的直接填，对不上的回头问你，最后给你一张对照表复核，把填好的表单留在浏览器里等你本人点提交。不保存密码，不猜身份证号，不替你按下提交。',
    descEn: 'Record once, forms auto-fill; submit always by you. Give it an online form (Feishu multi-dimensional-table public forms by default, also general web forms). It extracts each field\'s label / type / required flag, maps against your fixed-info profile, fills what matches, asks you for the rest, then hands you a comparison table to review and leaves the filled form in the browser for your own submit. No password saved, no ID guessed, no submit clicked on your behalf.',
    features: [
      '固定信息档案作单一数据源，能对上的字段直接自动填',
      '未知 / 创作类 / 敏感字段回头问你，绝不瞎猜',
      '硬规则：永不自动提交，提交按钮永远由人点',
      '填完给一张对照表复核，私人信息外置不入库',
      'Python 标准库 + agent-browser (CDP)，可只用对照表自己复制',
    ],
    featuresEn: [
      'Fixed-info profile as single source of truth, auto-fills matching fields',
      'Unknown / creative / sensitive fields ask you — never guessed',
      'Hard rule: never auto-submit, the submit button is always yours',
      'Comparison table for review; private info kept external, never committed',
      'Python stdlib + agent-browser (CDP); can use the table alone to copy-paste',
    ],
    tech: ['Python', 'agent-browser (CDP)', 'Feishu Forms', 'Bash/PowerShell', 'WorkBuddy Skill'],
    url: 'https://github.com/qinqiao2014-creator/form-autofill-skill',
    stars: 0,
    icon: <ClipboardList className="w-6 h-6" />,
  },
];

export function LibraryOfBabel() {
  const { lang } = useLang();
  const c = t[lang];

  const sortedSkills = skillsData
    .map((s) => ({ ...s, stars: resolveStars(s.url, s.stars) }))
    .sort((a, b) => b.stars - a.stars);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray<HTMLElement>('[data-animate]');
    sections.forEach((section) => {
      gsap.fromTo(section,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
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
          <p className="font-inter text-base md:text-lg text-text-secondary italic mb-3">
            {c.heroSubtitle}
          </p>
          <p className="font-noto text-base md:text-lg text-text-secondary max-w-3xl leading-relaxed mb-6">
            {c.heroDesc}
          </p>
          <p className="font-noto text-sm text-text-muted italic border-l-2 border-[#f4a261]/40 pl-4 max-w-2xl">
            {c.heroQuote}
          </p>
        </div>
      </section>

      {/* Skills Detail List */}
      <section className="bg-bg-primary pb-20 px-5">
        <div className="max-w-content mx-auto space-y-16">
          {sortedSkills.map((skill) => (
            <article
              key={skill.name}
              data-animate
              className="relative border border-border-custom rounded bg-bg-secondary overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 md:p-8 border-b border-border-custom/60 bg-bg-primary/50">
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#6cbcb2]/10 border border-[#6cbcb2]/30 flex items-center justify-center text-[#6cbcb2]">
                    {skill.icon}
                  </div>

                  {/* Title Area */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block px-2.5 py-0.5 rounded text-xs font-noto bg-[#6cbcb2]/10 text-[#6cbcb2] border border-[#6cbcb2]/30">
                        {lang === 'zh' ? skill.tag : skill.tagEn}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-noto text-text-muted">
                        <Star className="w-3.5 h-3.5 text-[#f4a261]" />
                        <span>{skill.stars}</span>
                      </span>
                    </div>
                    <h2 className="font-noto font-bold text-xl md:text-2xl text-text-primary mb-2">
                      {lang === 'zh' ? skill.name : skill.nameEn}
                    </h2>
                    <p className="font-noto text-base text-text-secondary leading-relaxed">
                      {lang === 'zh' ? skill.oneLiner : skill.oneLinerEn}
                    </p>
                  </div>

                  {/* Repo Link */}
                  <a
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded border border-border-custom bg-bg-secondary hover:border-[#6cbcb2] hover:bg-[#6cbcb2]/5 text-sm font-noto text-text-secondary hover:text-[#9bd8cf] transition-all duration-200 group"
                  >
                    <Github className="w-4 h-4" />
                    <span>{c.viewRepo}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8">
                {/* Description */}
                <p className="font-noto text-sm md:text-base text-text-secondary leading-relaxed mb-8">
                  {lang === 'zh' ? skill.desc : skill.descEn}
                </p>

                {/* Features + Tech Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Features */}
                  <div className="lg:col-span-2">
                    <h3 className="font-noto font-bold text-base text-text-primary mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6cbcb2]" />
                      {c.features}
                    </h3>
                    <ul className="space-y-3">
                      {(lang === 'zh' ? skill.features : skill.featuresEn).map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-noto text-text-secondary leading-relaxed">
                          <ArrowRight className="w-4 h-4 text-[#6cbcb2]/60 mt-0.5 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="font-noto font-bold text-base text-text-primary mb-4 flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-[#f4a261]" />
                      {c.techStack}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-block px-3 py-1 rounded text-xs font-mono bg-[#f4a261]/10 text-[#d4873e] border border-[#f4a261]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stars highlight for high-star repos */}
                    {skill.stars >= 5 && (
                      <div className="mt-6 p-3 rounded bg-[#f4a261]/5 border border-[#f4a261]/20">
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="w-4 h-4 text-[#f4a261]" />
                          <span className="font-noto text-xs font-bold text-[#d4873e]">
                            {skill.stars} {c.stars}
                          </span>
                        </div>
                        <p className="font-noto text-xs text-text-muted">
                          {lang === 'zh'
                            ? '这是星标最多的仓库，受到社区较多关注'
                            : 'The most-starred repo in this collection, with notable community interest'}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
