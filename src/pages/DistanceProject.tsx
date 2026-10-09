import {
  ArrowLeft,
  Globe,
  Brain,
  Glasses,
  Database,
  Server,
  Boxes,
  GitBranch,
  Award,
  Users,
  Sparkles,
  Cpu,
  Play,
  Film,
  Music,
  ListMusic,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';

// 两支宣传片，面向不同场合，都保留：
//   · 原版产品介绍片（AdventureX 比赛 Demo 完整演示）
//   · Tripothon S1 定制版（为 Tripo AI 全球首届世界构建黑客松专门剪的版本，
//     赛事主题 A Gift for ____）
const BILIBILI_VIDEO = 'https://www.bilibili.com/video/BV14f3q6mE8R/';
const TRIPOTHON_VIDEO = 'https://www.bilibili.com/video/BV15JHp65EQh/';
// 概念专辑《DISTANCE》已在网易云音乐发行（2026-10-02，12 轨）
const ALBUM_URL = 'https://music.163.com/#/album?id=401724420';
const SITE_URL = 'https://www.distance3d.xyz/';
const XR_URL = 'https://xr.distance3d.xyz/';

const t = {
  zh: {
    back: '返回首页',
    title: 'distance',
    subtitle: '光年尺度下，人与人之间关系的距离',
    tag: 'AdventureX 2026 PICO 赛道第二名 · Tripothon S1 参赛作品',
    desc: 'distance 是一个 AI-native 的动态关系宇宙：你的出生、地点、教育、工作、项目、技能、记忆，以及你和他人的双向行为，会被编译成个人图谱，持续影响星球质量、关系强度、空间距离与 3D 宇宙布局——关系变淡，那颗星球就真的变暗、漂远。',
    status: '团队作品 · 主站 distance3d.xyz · XR 出口 xr.distance3d.xyz',
    cta: '产品介绍视频',
    ctaSite: '访问主站',
    ctaXr: '打开 XR',

    awardTitle: '赛事',
    awardDesc: '同一个世界，两次送出去比赛——第一版拿奖，这一版是 rebuilt 之后的重投。',
    awards: [
      {
        badge: 'v1 · 已获奖',
        title: 'AdventureX 2026',
        note: 'PICO 赛道 第二名 · 优胜 Web 应用创作者。distance 的第一版在这里完成并拿奖。',
      },
      {
        badge: 'v2 · 评审中',
        title: 'Tripothon S1',
        note: 'Tripo AI 主办的全球首届「世界构建黑客松」，主题 A Gift for ____——创造一个世界，把它当作礼物送给某个人。distance 以现在的完整形态（三层尺度 + 家园 + 生态星球）参赛，评审进行中，10 月 25 日揭晓。',
      },
    ],

    whatTitle: '这是什么',
    whatDesc:
      'distance 想回答一个问题：你和好友的关系，能不能「看见」？每个人都是一颗由自己经历长出来的星球——不是填出来的，是算出来的：资料、共同记忆、双向行为被 AI 编译成个人图谱，关系强弱直接换算成轨道距离。星球也不只是远远看着：它有地表、有家园，走进去，地面上的每样东西都从某段记忆里长出来——一次旅行长成一块纪念石，一段夜聊长成一盏灯，点一下就跳回那段记忆。',

    trailerTitle: '宣传片',
    trailerDesc: '两支片子面向不同场合，都保留：一支讲完整流程，一支为 Tripothon S1 专门剪。',
    trailers: [
      {
        label: '产品介绍片',
        badge: '原版',
        note: '完整演示比赛 Demo 的主流程：注册、星球诞生、三层尺度漫游到彗星访问。',
        cta: '去 B 站观看',
        url: BILIBILI_VIDEO,
      },
      {
        label: 'Tripothon S1 定制版',
        badge: '比赛定制',
        note: '为 Tripothon S1 —— Tripo AI 主办的全球首届世界构建黑客松（主题 A Gift for ____）专门剪的版本。',
        cta: '去 B 站观看',
        url: TRIPOTHON_VIDEO,
      },
    ],

    worksTitle: '影像与音乐',
    worksDesc: '这个世界不只跑在浏览器里——它还有一支 MV，还有一整张概念专辑。',
    works: [
      {
        badge: 'MV',
        label: '《回信》MV',
        note: '专辑终曲的影像版本。第一句问候被送进深空之后，十二首曲目走完这条路，最后一首是回信：收星星的人，回信给送星星的人。',
        cta: '观看',
        url: '',
      },
      {
        badge: '概念专辑 · 已发行',
        label: 'DISTANCE · 12 轨',
        note: '2026 年 10 月 2 日在网易云音乐发行，36 分 38 秒。三幕走完「仰望与坍缩 → 守护 → 坠落与代价」，终曲「回信」收束——整条线是「发问 → 回信」。音乐由 AI 生成（StepFun StepAudio 3 Music），真人逐首选定。',
        cta: '去网易云听',
        url: ALBUM_URL,
      },
    ],
    albumTitle: '专辑结构',
    albumMeta: '12 轨 · 36 分 38 秒 · 艺人 阿早 · 2026-10-02 发行',
    albumActs: [
      { name: 'Intro · 开篇', desc: '开篇主题曲，全专辑由此开场' },
      { name: '第一幕 · 仰望与坍缩', desc: '发问 / 闪烁之后 / 物理学不存在了 / 凝视' },
      { name: '第二幕 · 守护', desc: '执剑 / 送星星的人' },
      { name: '第三幕 · 坠落与代价', desc: '前进四 / 俗人 / 最后一个物理学家 / 不择手段' },
      { name: '终曲 · 回信', desc: '收星星的人，回信给送星星的人' },
    ],

    demoTitle: '主流程',
    demoDesc: '从注册到走进别人家门的完整链路',
    demoSteps: [
      {
        title: '注册与身份引导',
        desc: '性格与星球原型选择后播放 Genesis 创世动画，你的星球在宇宙中诞生；会话可恢复，XR 端另有便捷登录与注册。',
      },
      {
        title: '资料与记忆录入',
        desc: '结构化填写经历，也可上传照片、聊天截图和视频作为记忆来源；AI 分析后的记忆卡片你可以逐条编辑确认。',
      },
      {
        title: '建立关系与 Activity',
        desc: '好友发现与关系编辑；发布文字、图片、音频、视频，这些行为会作为生态信号与双向证据参与计算。',
      },
      {
        title: '三层尺度漫游',
        desc: 'Planet 视角看自己的星球与家园；Galaxy 视角看好友星系分布；Nebula 视角看更宏观的圈层网络。',
      },
      {
        title: '彗星跃迁旅行',
        desc: '选中好友星球，乘彗星穿越星云抵达，落进对方家园里看见别人留下的痕迹与留言，再返回自己的星球。',
      },
      {
        title: '家园建造与整件布置',
        desc: '在自己的地表放置整件建筑，可查看建筑详情与出处、管理协作者授权；宇宙里的星球消费同一份已放建筑与演化数据。',
      },
    ],

    vrTitle: 'XR · 为 PICO 头显单独构建的版本',
    vrDesc:
      'distance 的 3D 场景不是为某一种屏幕写死的：主站与头显版共用同一份产品实现和同一个 FastAPI 后端，换的是呈现层而不是业务逻辑。桌面浏览器直接打开主站；PICO 头显上有一个单独构建的 XR 版本，用 PICO OS 6 原生支持的 WebXR 接管整个空间、独立渲染——既能做全沉浸 VR，也能做与现实空间结合的 AR。',
    vrFeatures: [
      '主站 www.distance3d.xyz：桌面 / 移动浏览器直接打开',
      'PICO 头显版 xr.distance3d.xyz：为头显单独构建，含便捷登录与注册',
      '基于 PICO OS 6 原生支持的 WebXR：支持沉浸 VR 与透视 AR，手柄、手势、全身追踪等多种交互',
      '已完成官方 PICO OS 6 环境下的平面与 XR 双形态验收',
      '同一套场景 + 同一个后端，不为每个出口各写一份',
    ],

    jupiterTitle: 'Jupiter · 裸眼 3D 相框',
    jupiterDesc:
      'distance 不止跑在屏幕里：我们把它做进了一台真实的裸眼 3D 相框。无需眼镜，光栅面板用 10 个原生视点把 distance 的星球、家园与故事直接「浮」在桌面上——你绕着走，画面就跟着变。',
    jupiterFeatures: [
      '自研上框 App：把 distance 打包成可直接装进相框安卓系统的应用，实物上电即看',
      '六张 1200×1920 成品画面 + 十视点交错图集：星球、家园、全景各就各位，光栅面板原生分辨率铺满',
      '三首内置音乐（抵达 / 家园 / 宇宙）：画面与声音一同在相框里循环',
      '「故事模式」10 幕：把 distance 的双线叙事《苏醒》做成逐帧 3D 分镜——两个灵魂在不同星球醒来，手里攥着同一枚星图残片，循着同一颗带环行星重逢',
      '美术来源：Blender 程序化地貌与经典场景 · Tripo 生成叙事空间 3D 资产 · World Labs 泼溅世界；最终由 Jupiter Interlace SDK 交错成裸眼 3D',
      '已交付实机验收：故事 S01 铺满版经设备实拍像素比对通过，与 v13 主应用各自版本共存',
    ],

    coreTitle: '核心体验',
    core: [
      {
        title: '3D 关系宇宙',
        desc: '每个人都是一颗星球。关系是轨道，记忆是质量。在三维空间中直观感受你与他人的距离远近。',
      },
      {
        title: 'AI 记忆闭环',
        desc: '记忆分析由内嵌在后端里的 Memory Agent 完成：它加载你的记忆上下文、产出结构化结论，再触发质量、关系与距离的重算——前端不并行跑 Agent。',
      },
      {
        title: '地表家园与建造',
        desc: '五类生态——海洋、火山、翠绿、晶体、类地，各有专用原生 GLB，叠加程序化地貌、水体、熔岩与植被；可放置整件建筑并追溯出处。',
      },
      {
        title: '三层尺度 + 彗星旅行',
        desc: 'Planet / Galaxy / Nebula 三段尺度切换，配合彗星跃迁的过渡动画，像科幻电影一样在关系网络里漫游。',
      },
      {
        title: '每小时演化',
        desc: '关系不是快照而是连续量：后台 worker 整点重算一遍宇宙，关系淡了星球就变暗、漂远。',
      },
    ],

    techTitle: '技术架构',
    tech: [
      { icon: 'server', title: 'FastAPI 后端', desc: 'FastAPI · Pydantic v2 · SQLAlchemy 2 · Alembic · 分层架构；Memory Agent 直接内嵌，Node Demo 仅作历史参考' },
      { icon: 'database', title: '数据层', desc: 'PostgreSQL 事实源 → 事务性 outbox → Neo4j 图投影 · 版本化空间快照' },
      { icon: 'brain', title: 'AI 与算法', desc: '记忆分析 · 语义证据 · 亲和度；mass.v2 / relationship.v4 / layout.v2 均带版本号，可独立演进与回放' },
      { icon: 'glasses', title: '前端与呈现', desc: 'Vite · React 19 · TypeScript · React Three Fiber · Drei · Postprocessing · Zustand · 中英 i18n' },
      { icon: 'cpu', title: '运行时与部署', desc: 'Nginx + FastAPI + PostgreSQL + Neo4j 的 Compose 栈；每小时演化 worker 与 outbox worker 各自独立进程' },
    ],

    mechanismTitle: '核心机制',
    mechanisms: [
      { name: '星球质量 · mass.v2', desc: '综合个人档案、教育、工作经历、项目、技能与记忆计算。记忆会随时间衰减，持续更新才能保持质量。' },
      { name: '关系距离 · relationship.v4', desc: '由互动频率、最近联系、共同经历、持续时间、双向行为与语义证据共同决定，动态计算两人之间的距离。' },
      { name: '空间布局 · layout.v2', desc: '力导向算法模拟真实物理：关系好的星球靠得近，疏远的被推远；布局结果落成版本化空间快照供前端消费。' },
      { name: '每小时演化', desc: '后台 worker 整点运行：衰减旧事件 → 重算星球质量 → 更新关系距离 → 重新布局并生成新快照。' },
      { name: '图投影 outbox', desc: 'PostgreSQL 写入后经事务性 outbox 异步投影到 Neo4j，失败可重试，保证事实源与图查询最终一致。' },
    ],

    teamTitle: '团队',
    teamNote: '两支比赛队伍，成员不完全重合',
    teamGroupA: 'AdventureX 2026',
    teamGroupANote: 'PICO 赛道第二名',
    team: [
      { name: '周雨涵', role: '产品 / UI / UX', color: '#ffc08e' },
      { name: '詹丽', role: '视觉传达', color: '#e9818d' },
      { name: '丁羿然', role: '技术开发', color: '#5d477f' },
      { name: '阿早', role: '技术开发', color: '#ffe0bd' },
    ],
    teamGroupB: 'Tripothon S1',
    teamGroupBNote: 'Tripo AI 世界构建黑客松 · 主题 A Gift for ____',
    teamB: [
      { name: '阿早', role: '总负责人', color: '#ffe0bd' },
      { name: '史登会', role: '队员', color: '#8fb8e8' },
      { name: '梁潇', role: '队员', color: '#c9a6e8' },
    ],

  },
  en: {
    back: 'Back to Home',
    title: 'distance',
    subtitle: 'The Distance Between People, at the Scale of Light-Years',
    tag: 'AdventureX 2026 — 2nd Place, PICO Track · Tripothon S1 Entry',
    desc: 'distance is an AI-native dynamic relationship universe. Your birth, location, education, work, projects, skills, memories — and the two-way behavior between you and others — are compiled into a personal graph that continuously drives planet mass, relationship strength, spatial distance and the 3D universe layout. When a relationship fades, that planet really does dim and drift away.',
    status: 'Team Project · Site distance3d.xyz · XR at xr.distance3d.xyz',
    cta: 'Product Video',
    ctaSite: 'Visit Site',
    ctaXr: 'Open XR',

    awardTitle: 'Competitions',
    awardDesc: 'One world, sent to two competitions — the first version won; this one is the rebuilt re-entry.',
    awards: [
      {
        badge: 'v1 · Won',
        title: 'AdventureX 2026',
        note: '2nd Place, PICO Track · Outstanding Web App Creator. The first version of distance was completed and awarded here.',
      },
      {
        badge: 'v2 · In review',
        title: 'Tripothon S1',
        note: "Tripo AI's first global world-building hackathon, themed A Gift for ____ — build a world and give it to someone as a gift. distance entered in its current full form (three scales, homesteads, ecological planets); judging is underway and winners are announced on October 25.",
      },
    ],

    whatTitle: 'What Is This',
    whatDesc:
      'distance asks: can you "see" your relationships? Everyone gets a planet grown out of their own life — not filled in by hand, but computed: profile data, shared memories and two-way behavior are compiled by AI into a personal graph, and relationship strength converts directly into orbital distance. A planet is not something you only gaze at from afar either — it has a surface and a home. Walk onto it and every object on the ground grew out of a specific memory: a trip becomes a memorial stone, a late-night conversation becomes a lamp, and tapping it takes you back to that memory.',

    trailerTitle: 'Trailers',
    trailerDesc: 'Two cuts for two occasions — one walks the full flow, the other was cut specifically for Tripothon S1.',
    trailers: [
      {
        label: 'Product Intro',
        badge: 'Original',
        note: 'The full competition demo flow: signup, planet genesis, three-scale roaming and comet travel.',
        cta: 'Watch on Bilibili',
        url: BILIBILI_VIDEO,
      },
      {
        label: 'Tripothon S1 Cut',
        badge: 'Made for a contest',
        note: 'Cut specifically for Tripothon S1 — the first global world-building hackathon by Tripo AI (theme: A Gift for ____).',
        cta: 'Watch on Bilibili',
        url: TRIPOTHON_VIDEO,
      },
    ],

    worksTitle: 'Film & Music',
    worksDesc: 'This world does not live only in a browser — it has a music video, and a whole concept album.',
    works: [
      {
        badge: 'Music Video',
        label: '“Hui Xin” (The Reply) — MV',
        note: 'The visual version of the album’s closing track. After the first greeting is sent into deep space and twelve tracks walk that road, the last one is the reply: the one who received the star writes back to the one who sent it.',
        cta: 'Watch',
        url: '',
      },
      {
        badge: 'Concept Album · Released',
        label: 'DISTANCE · 12 tracks',
        note: 'Released on NetEase Cloud Music on 2 October 2026, running 36 minutes 38 seconds. Three acts move through "looking up and collapse", "guardianship", and "falling and its price", closing with "The Reply" — the whole arc runs from question to reply. Music generated with AI (StepFun StepAudio 3 Music), with takes chosen track by track by a human.',
        cta: 'Listen on NetEase',
        url: ALBUM_URL,
      },
    ],
    albumTitle: 'Album Structure',
    albumMeta: '12 tracks · 36:38 · Artist: Zaosu · released 2026-10-02',
    albumActs: [
      { name: 'Intro', desc: 'Opening theme — the album begins here' },
      { name: 'Act I · Looking Up and Collapse', desc: 'Asking / After the Flicker / Physics No Longer Exists / The Gaze' },
      { name: 'Act II · Guardianship', desc: 'Holding the Sword / The One Who Sent the Star' },
      { name: 'Act III · Falling and Its Price', desc: 'Forward Four / An Ordinary Man / The Last Physicist / By Any Means' },
      { name: 'Finale · The Reply', desc: 'The one who received the star writes back to the one who sent it' },
    ],

    demoTitle: 'Main Flow',
    demoDesc: 'The full path from signup to walking into someone else\'s home',
    demoSteps: [
      {
        title: 'Signup & Onboarding',
        desc: 'Pick a personality and planet prototype, then watch the Genesis animation as your planet is born. Sessions are resumable, and XR offers quick login and signup.',
      },
      {
        title: 'Profile & Memory Intake',
        desc: 'Enter structured history, or upload photos, chat screenshots and videos as memory sources. AI-extracted memory cards stay editable until you confirm each one.',
      },
      {
        title: 'Relationships & Activity',
        desc: 'Friend discovery and relationship editing; post text, images, audio or video. This behavior feeds back as ecosystem signals and mutual evidence.',
      },
      {
        title: 'Navigate Three Scales',
        desc: 'Planet view for your own planet and home surface; Galaxy view for the distribution of friends; Nebula view for the wider network of circles.',
      },
      {
        title: 'Comet Travel',
        desc: 'Select a friend\'s planet and ride a comet through the nebula to land inside their home, where you can see the traces and messages others left, then travel back.',
      },
      {
        title: 'Home Building & Placement',
        desc: 'Place structures on your own terrain, inspect each building\'s details and provenance, and manage collaborator permissions. Planets in the universe consume the same placed-structure and evolution data.',
      },
    ],

    vrTitle: 'XR · A Version Built Specifically for PICO Headsets',
    vrDesc:
      'The 3D scene is not hard-wired to one screen: the main site and the headset version share one product implementation and one FastAPI backend. What changes is the presentation layer, not the business logic. Desktop browsers open the main site; on PICO headsets there is a separately built XR version that uses WebXR — natively supported by PICO OS 6 — to take over the whole space and render on its own: full immersive VR as well as AR blended with the real room.',
    vrFeatures: [
      'Main site www.distance3d.xyz — opens directly in desktop or mobile browsers',
      'PICO headset version xr.distance3d.xyz — built for headsets, with quick login and signup',
      'Built on WebXR, natively supported by PICO OS 6 — immersive VR and passthrough AR, with controllers, hands and full-body tracking',
      'Validated in both flat and XR forms on the official PICO OS 6 environment',
      'One scene graph and one backend — no per-outlet duplicate implementations',
    ],

    jupiterTitle: 'Jupiter · Glasses-free 3D Frame',
    jupiterDesc:
      'distance does not only live on a screen: we built it into a real glasses-free 3D photo frame. No glasses needed — a lenticular panel with 10 native viewpoints floats distance\'s planets, homes and story right on your desk, and the picture shifts as you move around it.',
    jupiterFeatures: [
      'A custom frame app for the frame: distance packaged into an app that installs straight onto the frame\'s Android system, running the moment it powers on',
      'Six 1200×1920 final images plus a ten-viewpoint interlaced atlas: planets, homes and panoramas laid out at the panel\'s native resolution',
      'Three built-in tracks (Arrival / Homestead / Universe): picture and sound loop together inside the frame',
      '"Story mode" — 10 chapters: the distance two-thread narrative "Awakening" as frame-by-frame 3D storyboards — two souls wake on different planets, each clutching the same shard of a star chart, reuniting across a shared ringed planet',
      'Art sources: Blender procedural terrain and classic scenes · Tripo-generated narrative-space 3D assets · World Labs splat worlds; finally interlaced into glasses-free 3D by the Jupiter Interlace SDK',
      'Delivered and verified on-device: the full-bleed S01 story passed pixel-level device comparison, coexisting with the v13 main app as separate versions',
    ],

    coreTitle: 'Core Experience',
    core: [
      {
        title: '3D Relationship Universe',
        desc: 'Everyone is a planet. Relationships are orbits, memories are mass. Feel your distance to others in three-dimensional space.',
      },
      {
        title: 'AI Memory Loop',
        desc: 'Memory analysis runs in an agent embedded in the backend: it loads your memory context, produces structured conclusions, then triggers recomputation of mass, relationships and distance — the front end never runs an agent in parallel.',
      },
      {
        title: 'Home Surface & Building',
        desc: 'Five biomes — ocean, volcano, verdant, crystal and terrestrial — each with dedicated native GLB assets plus procedural terrain, water, lava and vegetation. Structures can be placed and traced back to their provenance.',
      },
      {
        title: 'Three Scales + Comet Travel',
        desc: 'Planet / Galaxy / Nebula scale switching with a cinematic comet transition, so roaming the relationship network feels like a sci-fi film.',
      },
      {
        title: 'Hourly Evolution',
        desc: 'A relationship is not a snapshot but a continuous quantity: a background worker recomputes the universe on the hour, so faded ties dim and drift.',
      },
    ],

    techTitle: 'Tech Architecture',
    tech: [
      { icon: 'server', title: 'FastAPI Backend', desc: 'FastAPI · Pydantic v2 · SQLAlchemy 2 · Alembic · layered architecture; the memory agent is embedded directly — the Node demo is history only' },
      { icon: 'database', title: 'Data Layer', desc: 'PostgreSQL source of truth → transactional outbox → Neo4j graph projection · versioned spatial snapshots' },
      { icon: 'brain', title: 'AI & Algorithms', desc: 'Memory analysis · semantic evidence · affinity; mass.v2 / relationship.v4 / layout.v2 are all versioned so each can evolve and be replayed independently' },
      { icon: 'glasses', title: 'Frontend & Rendering', desc: 'Vite · React 19 · TypeScript · React Three Fiber · Drei · Postprocessing · Zustand · Chinese/English i18n' },
      { icon: 'cpu', title: 'Runtime & Deployment', desc: 'Compose stack of Nginx + FastAPI + PostgreSQL + Neo4j, with the hourly evolution worker and outbox worker as separate processes' },
    ],

    mechanismTitle: 'Core Mechanisms',
    mechanisms: [
      { name: 'Planet Mass · mass.v2', desc: 'Computed from profile, education, work history, projects, skills and memories. Memories decay over time, so mass has to be maintained.' },
      { name: 'Relationship Distance · relationship.v4', desc: 'Driven by interaction frequency, recency, shared experiences, duration, two-way behavior and semantic evidence.' },
      { name: 'Spatial Layout · layout.v2', desc: 'Force-directed physics: close relationships pull planets together, distant ones push apart. Results are persisted as versioned spatial snapshots for the front end.' },
      { name: 'Hourly Evolution', desc: 'A background worker runs on the hour: decay old events → recompute planet mass → update relationship distances → re-layout and emit a new snapshot.' },
      { name: 'Graph Projection Outbox', desc: 'Writes to PostgreSQL are asynchronously projected into Neo4j through a transactional outbox with retry, keeping the source of truth and graph queries eventually consistent.' },
    ],

    teamTitle: 'Team',
    teamNote: 'Two competition squads with partially overlapping members',
    teamGroupA: 'AdventureX 2026',
    teamGroupANote: '2nd place, PICO track',
    team: [
      { name: 'Zhou Yuhan', role: 'Product / UI / UX', color: '#ffc08e' },
      { name: 'Zhan Li', role: 'Visual Design', color: '#e9818d' },
      { name: 'Ding Yiran', role: 'Engineering', color: '#5d477f' },
      { name: 'Zaosusu', role: 'Engineering', color: '#ffe0bd' },
    ],
    teamGroupB: 'Tripothon S1',
    teamGroupBNote: "Tripo AI world-building hackathon · theme: A Gift for ____",
    teamB: [
      { name: 'Zaosusu', role: 'Team Lead', color: '#ffe0bd' },
      { name: 'Shi Denghui', role: 'Team member', color: '#8fb8e8' },
      { name: 'Liang Xiao', role: 'Team member', color: '#c9a6e8' },
    ],

  },
};

function TechIcon({ type }: { type: string }) {
  switch (type) {
    case 'server':
      return <Server className="w-5 h-5" />;
    case 'database':
      return <Database className="w-5 h-5" />;
    case 'brain':
      return <Brain className="w-5 h-5" />;
    case 'glasses':
      return <Glasses className="w-5 h-5" />;
    default:
      return <Cpu className="w-5 h-5" />;
  }
}

export function DistanceProject() {
  const { lang } = useLang();
  const c = t[lang as 'zh' | 'en'] || t.zh;

  return (
    <div className="min-h-screen bg-bg-primary animate-fade-in">
      <main className="pt-16 pb-20">
        {/* Header */}
        <div className="max-w-content mx-auto px-5 pt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-text-muted hover:text-[#9bd8cf] transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-noto text-sm">{c.back}</span>
          </Link>

          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-noto bg-[#0f8b8d]/12 text-[#0f8b8d] border border-[#0f8b8d]/25 mb-4">
              <Award className="w-3.5 h-3.5" />
              {c.tag}
            </span>
          </div>

          <h1 className="font-serif-lit font-bold text-3xl md:text-5xl text-text-primary mb-3 tracking-tight">
            {c.title}
          </h1>
          <p className="font-noto text-lg md:text-xl text-text-secondary mb-4">
            {c.subtitle}
          </p>
          <p className="font-noto text-sm text-text-muted mb-6 max-w-2xl leading-relaxed">
            {c.desc}
          </p>
          <p className="font-noto text-xs text-text-muted/60 mb-4">{c.status}</p>
          <div className="flex flex-wrap items-center gap-3 mb-16">
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded border border-[#0f8b8d]/60 bg-[#0f8b8d]/12 text-text-primary hover:bg-[#0f8b8d]/18 hover:border-[#0f8b8d] transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="font-noto text-sm">{c.ctaSite}</span>
            </a>
            <a
              href={XR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded border border-border-custom text-text-secondary hover:border-[#6cbcb2] hover:text-text-primary transition-colors duration-200"
            >
              <Glasses className="w-4 h-4" />
              <span className="font-noto text-sm">{c.ctaXr}</span>
            </a>
          </div>
        </div>

        {/* Competitions —— 两届赛事 */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <h2 className="font-noto font-bold text-xl text-text-primary mb-2 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#0f8b8d]" />
            {c.awardTitle}
          </h2>
          <p className="font-noto text-sm text-text-muted mb-6">{c.awardDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.awards.map((a, i) => (
              <div
                key={i}
                className="p-5 rounded border border-border-custom bg-bg-secondary"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-noto bg-[#0f8b8d]/12 text-[#0f8b8d] border border-[#0f8b8d]/25">
                    {a.badge}
                  </span>
                  <h3 className="font-noto font-semibold text-base text-text-primary">{a.title}</h3>
                </div>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{a.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What is this */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <h2 className="font-noto font-bold text-xl text-text-primary mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#6cbcb2]" />
            {c.whatTitle}
          </h2>
          <p className="font-noto text-sm text-text-secondary leading-relaxed max-w-2xl">
            {c.whatDesc}
          </p>
        </div>

        {/* Trailers —— 两支宣传片都保留 */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <h2 className="font-noto font-bold text-xl text-text-primary mb-4 flex items-center gap-2">
            <Film className="w-5 h-5 text-[#6cbcb2]" />
            {c.trailerTitle}
          </h2>
          <p className="font-noto text-sm text-text-muted mb-6">{c.trailerDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.trailers.map((v, i) => (
              <a
                key={i}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded border border-border-custom bg-bg-secondary hover:border-[#6cbcb2]/60 transition-colors duration-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-noto bg-[#0f8b8d]/12 text-[#0f8b8d] border border-[#0f8b8d]/25">
                    {v.badge}
                  </span>
                  <h3 className="font-noto font-semibold text-base text-text-primary">{v.label}</h3>
                </div>
                <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4">{v.note}</p>
                <span className="inline-flex items-center gap-2 font-noto text-sm text-[#9bd8cf] group-hover:text-[#6cbcb2] transition-colors duration-200">
                  <Play className="w-3.5 h-3.5" />
                  {v.cta}
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Film & Music —— MV 与概念专辑 */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <h2 className="font-noto font-bold text-xl text-text-primary mb-2 flex items-center gap-2">
            <Music className="w-5 h-5 text-[#6cbcb2]" />
            {c.worksTitle}
          </h2>
          <p className="font-noto text-sm text-text-muted mb-6">{c.worksDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.works.map((w, i) => {
              const inner = (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-noto bg-[#0f8b8d]/12 text-[#0f8b8d] border border-[#0f8b8d]/25">
                      {w.badge}
                    </span>
                    <h3 className="font-noto font-semibold text-base text-text-primary">{w.label}</h3>
                  </div>
                  <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4">{w.note}</p>
                  {w.url ? (
                    <span className="inline-flex items-center gap-2 font-noto text-sm text-[#9bd8cf] group-hover:text-[#6cbcb2] transition-colors duration-200">
                      <Play className="w-3.5 h-3.5" />
                      {w.cta}
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  ) : null}
                </>
              );
              return w.url ? (
                <a
                  key={i}
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 rounded border border-border-custom bg-bg-secondary hover:border-[#6cbcb2]/60 transition-colors duration-200"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={i}
                  className="block p-5 rounded border border-border-custom bg-bg-secondary"
                >
                  {inner}
                </div>
              );
            })}
          </div>

          {/* 专辑结构 */}
          <div className="mt-6 p-5 rounded border border-border-custom bg-bg-secondary">
            <h3 className="font-noto font-semibold text-base text-text-primary mb-1 flex items-center gap-2">
              <ListMusic className="w-4 h-4 text-[#6cbcb2]" />
              {c.albumTitle}
            </h3>
            <p className="font-noto text-xs text-text-muted mb-4">{c.albumMeta}</p>
            <div className="space-y-3">
              {c.albumActs.map((act, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <span className="font-noto text-sm text-text-primary sm:w-44 sm:shrink-0">{act.name}</span>
                  <span className="font-noto text-sm text-text-muted">{act.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Demo Walkthrough */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <h2 className="font-noto font-bold text-xl text-text-primary mb-6 flex items-center gap-2">
            <Play className="w-5 h-5 text-[#6cbcb2]" />
            {c.demoTitle}
          </h2>
          <p className="font-noto text-sm text-text-muted mb-6">{c.demoDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.demoSteps.map((step, i) => (
              <div
                key={i}
                className="p-5 rounded border border-border-custom bg-bg-secondary hover:border-[#6cbcb2]/40 transition-colors duration-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0f8b8d]/10 text-[#0f8b8d] text-xs font-bold font-inter">
                    {i + 1}
                  </span>
                  <h3 className="font-noto font-semibold text-base text-text-primary">
                    {step.title}
                  </h3>
                </div>
                <p className="font-noto text-sm text-text-secondary leading-relaxed pl-8">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Experience */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <h2 className="font-noto font-bold text-xl text-text-primary mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#6cbcb2]" />
            {c.coreTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.core.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded border border-border-custom bg-bg-secondary hover:border-[#6cbcb2]/40 transition-colors duration-200"
              >
                <h3 className="font-noto font-semibold text-base text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* XR / PICO headset version */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <div className="p-6 rounded border border-[#0f8b8d]/20 bg-[#0f8b8d]/5">
            <h2 className="font-noto font-bold text-xl text-text-primary mb-4 flex items-center gap-2">
              <Glasses className="w-5 h-5 text-[#0f8b8d]" />
              {c.vrTitle}
            </h2>
            <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4">
              {c.vrDesc}
            </p>
            <ul className="space-y-2">
              {c.vrFeatures.map((feat, i) => (
                <li
                  key={i}
                  className="font-noto text-sm text-text-muted flex items-start gap-2"
                >
                  <span className="text-[#0f8b8d] mt-0.5">◆</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Jupiter · glasses-free 3D frame */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <div className="p-6 rounded border border-[#6cbcb2]/20 bg-[#6cbcb2]/5">
            <h2 className="font-noto font-bold text-xl text-text-primary mb-4 flex items-center gap-2">
              <Boxes className="w-5 h-5 text-[#6cbcb2]" />
              {c.jupiterTitle}
            </h2>
            <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4">
              {c.jupiterDesc}
            </p>
            <ul className="space-y-2">
              {c.jupiterFeatures.map((feat, i) => (
                <li
                  key={i}
                  className="font-noto text-sm text-text-muted flex items-start gap-2"
                >
                  <span className="text-[#6cbcb2] mt-0.5">◆</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <h2 className="font-noto font-bold text-xl text-text-primary mb-6 flex items-center gap-2">
            <Boxes className="w-5 h-5 text-[#6cbcb2]" />
            {c.techTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.tech.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded border border-border-custom bg-bg-secondary hover:border-[#6cbcb2]/40 transition-colors duration-200"
              >
                <div className="flex items-center gap-2 text-[#6cbcb2] mb-2">
                  <TechIcon type={item.icon} />
                  <h3 className="font-noto font-semibold text-base text-text-primary">
                    {item.title}
                  </h3>
                </div>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mechanisms */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <h2 className="font-noto font-bold text-xl text-text-primary mb-6 flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-[#6cbcb2]" />
            {c.mechanismTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.mechanisms.map((m, i) => (
              <div
                key={i}
                className="p-5 rounded border border-border-custom bg-bg-secondary"
              >
                <h3 className="font-noto font-semibold text-base text-[#9bd8cf] mb-2">
                  {m.name}
                </h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team —— 两支比赛队伍分组 */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <h2 className="font-noto font-bold text-xl text-text-primary mb-2 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#6cbcb2]" />
            {c.teamTitle}
          </h2>
          <p className="font-noto text-sm text-text-muted mb-6">{c.teamNote}</p>

          {[
            { name: c.teamGroupA, note: c.teamGroupANote, members: c.team },
            { name: c.teamGroupB, note: c.teamGroupBNote, members: c.teamB },
          ].map((group, gi) => (
            <div key={gi} className={gi > 0 ? 'mt-8' : ''}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                <h3 className="font-noto font-semibold text-base text-text-primary">{group.name}</h3>
                <span className="font-noto text-xs text-text-muted">{group.note}</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {group.members.map((member, i) => (
                  <div
                    key={i}
                    className="p-5 rounded border border-border-custom bg-bg-secondary text-center"
                  >
                    <div
                      className="w-12 h-12 rounded-full border-2 mx-auto mb-3 flex items-center justify-center text-lg font-bold"
                      style={{ borderColor: member.color }}
                    >
                      <span style={{ color: member.color }}>{member.name[0]}</span>
                    </div>
                    <h4 className="font-noto font-semibold text-sm text-text-primary mb-1">
                      {member.name}
                    </h4>
                    <p className="font-noto text-xs text-text-muted">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>


      </main>

      <Footer />
    </div>
  );
}
