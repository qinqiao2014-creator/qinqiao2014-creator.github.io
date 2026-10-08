import { ExternalLink, ArrowLeft, Smartphone, Code2, Database, Server, Zap, Globe, Layout, MessageSquare, Mic, Image, Shield, CheckCircle, XCircle, Box, GitBranch, Activity, Layers, Cpu, HardDrive, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';

const t = {
  zh: {
    back: '返回首页',
    heroTitle: '2link 虚拟角色智能体',
    heroSubtitle: 'AI虚拟角色 · 声音克隆 · 实时通话',
    heroDesc: '面向普通用户的AI虚拟角色伴侣工具。自定义角色、人设记忆、声音克隆、实时语音通话、角色图片生成，支持豆包聊天记录一键迁移。',
    status: '2026 · 产品化落地',
    heroLink: '打开应用',
    heroLinkUrl: 'https://2link.walkingxiuxian.cn/index',
    commerceBadge: '商业化落地',
    commerceTitle: '上线即盈利',
    commerceDesc: '这不是一个停留在演示阶段的技术原型，而是一次真正的商业化落地探索。自媒体宣传引流 → 闲鱼成交授权码 → 豆包迁移插件降低换平台成本，上线第一天即实现盈利，首周营收突破 3000+。验证了 AI 陪伴产品的付费意愿与商业闭环可行性。',
    commerceStats: [
      { num: 'Day 1', label: '上线即盈利', desc: '自媒体引流 + 闲鱼成交' },
      { num: '3K+', label: '首周营收', desc: '商业闭环验证跑通' },
    ],
    highConcurrencyBadge: '高并发实战',
    highConcurrencyTitle: '从洪峰崩溃到稳定承载',
    highConcurrencyDesc: '产品上线后经历多次用户洪峰冲击，服务器被冲死过数次。每次崩溃后复盘日志、定位瓶颈、逐层优化——从连接池、请求排队到 Agent 编排并发控制——最终从崩溃走向稳定，从容承载大量并发用户。',
    highConcurrencyItems: [
      { title: '洪峰冲击', desc: '上线初期多次遭遇突发大量用户同时涌入，服务器进程被冲死，服务中断。' },
      { title: '逐层优化', desc: '复盘崩溃日志，定位瓶颈：连接池耗尽、请求堆积、Agent编排阻塞。逐步优化各层并发控制与资源管理。' },
      { title: '稳定承载', desc: '优化后从容应对高峰流量，不再因用户涌入而崩溃。' },
    ],
    featuresBadge: '核心功能',
    featuresTitle: '一个页面完成角色创建、聊天和语音互动',
    featuresDesc: '2link 面向想快速拥有虚拟角色智能体的用户，把复杂的模型调用、角色配置和工具能力集中到一个轻量网页里。',
    featureCards: [
      { title: 'AI角色聊天', desc: '设置角色名字、人设、关系、说话风格和开场白，让角色以稳定口吻与你对话。' },
      { title: '人设记忆与资料库', desc: '导入设定、聊天记录或角色资料，让智能体在长期互动中保持更一致的背景和关系。' },
      { title: '声音克隆', desc: '上传声音样本，为角色生成专属音色，用于朗读回复和更自然的语音体验。' },
      { title: '实时语音通话', desc: '通过网页直接与角色语音对话，适合陪伴、剧情互动、口语练习和沉浸式角色扮演。' },
      { title: '角色图片生成', desc: '根据外貌描述或参考图生成角色形象，让虚拟角色不只停留在文字里。' },
      { title: '本地优先保存', desc: '角色、聊天和素材优先保存在当前浏览器，登录后可使用云备份恢复重要数据。' },
    ],
    workflowBadge: '上手流程',
    workflowTitle: '不用研究 API，拿到授权码就能开始',
    workflowDesc: '适合想直接使用虚拟角色智能体的人，也适合把角色聊天、AI陪伴和语音互动做成服务交付的人。',
    workflowSteps: [
      { step: '1. 打开应用', desc: '进入网页端，不需要安装复杂环境。' },
      { step: '2. 登录账号', desc: '绑定授权码后开启在线模型能力。' },
      { step: '3. 创建角色', desc: '填写人设、外貌、关系和说话风格。' },
      { step: '4. 开始聊天', desc: '文字、朗读、图片和通话按需使用。' },
    ],
    compareBadge: '产品对比',
    compareTitle: 'Release 版更适合普通用户',
    compareDesc: '如果你不想注册模型平台、找 Key、填 Base URL 或处理报错，Release 版会更省心。',
    compareLeft: '自己折腾',
    compareLeftItems: ['注册模型平台并申请 API Key', '配置 Base URL、模型名和额度', '自己处理报错、限流和兼容问题', '图片、语音、通话能力需要分别接入'],
    compareRight: '使用 2link Release',
    compareRightItems: ['填写授权码即可开始', '聊天、图片、语音和通话集中在网页里', '角色配置和本地数据自动保存', '有基础使用、声音克隆和通话教程'],
    migratorBadge: '豆包迁移',
    migratorTitle: '豆包聊天一键迁移',
    migratorDesc: '已有豆包聊天的用户，可以安装浏览器插件，一键把历史聊天和角色上下文同步到 2link，换平台不用从零重建。',
    migratorLink: '查看迁移助手',
    techBadge: '技术实现',
    techTitle: '技术实现',
    techDesc: '2link 不是简单的模型前端套壳，而是多端协同、包含 Agent 编排、本地记忆、多模态工具链和模型网关的完整系统。',
    clientsTitle: '多端客户端',
    clientsDesc: '同一个产品，四种形态覆盖不同用户场景，各自独立运行又共享 Agent 编排和角色协议。',
    clients: [
      { icon: 'desktop', title: '桌面端（开源）', desc: '浏览器前端 + Electron 桌面壳 + 本地 Node API + SQLite。自部署模型或远程模型接口。AGPL-3.0-only 开源。', tag: '开源', repo: 'https://github.com/qinqiao2014-creator/virtual-companion-agent' },
      { icon: 'phone', title: '手机 H5/PWA（生产主力）', desc: 'IndexedDB 本地存储 + server-relay Agent 编排 + license-backend 授权网关。生产环境 systemd 部署，支持云备份与主动消息。', tag: '私有', repo: '' },
      { icon: 'smartphone', title: 'Android Flutter 客户端', desc: '完全独立运行的 Flutter 原生 App。用户自配 API Key 直连模型，本地 CRAG 记忆 + 加密备份 + 指纹锁。无服务器依赖。', tag: '私有', repo: '' },
      { icon: 'server', title: '授权网关后端', desc: 'Node.js · 账号注册/登录 · 授权码管理 · 额度计量 · 模型中转(chat/image/TTS/voice) · 管理后台 · 审计日志。API Key 服务端隔离，前端不暴露。', tag: '私有', repo: '' },
    ],
    agentTitle: 'Agent 编排',
    agentDesc: '后端统一编排入口 orchestrateCompanionTurn()，每个聊天回合由 8 个独立 Agent 协作完成：',
    agents: [
      { icon: 'layout', title: 'contextAgent', desc: '整理角色、人设、记忆和阻断事实，构建完整的上下文输入。' },
      { icon: 'git-branch', title: 'routerAgent', desc: '判断本轮输出形态：纯文本 / 带图片 / 带语音，决定调用哪些工具。' },
      { icon: 'message', title: 'textAgent', desc: '调用主回复生成逻辑，按场景生成 responseProfile 与 narrativeRhythm。' },
      { icon: 'image', title: 'imageAgent', desc: '根据文本 Agent 结果生成图片工具计划，决定 image_only / text_before_image / image_then_text 交付顺序。' },
      { icon: 'mic', title: 'voiceAgent', desc: '生成语音工具计划和情绪演绎指令，按优先级选择 clonedVoiceId > voice preset > modelConfig.audioVoice。' },
      { icon: 'check', title: 'reviewAgent', desc: '复核输出通道内容，确保多模态输出符合角色设定和安全边界。' },
      { icon: 'database', title: 'memoryAgent', desc: '规划记忆候选、摘要、安全提示写入，管理长期记忆的生命周期。' },
      { icon: 'shield', title: 'safetyAgent', desc: '安全风险识别边界，危机表达优先进入安全回复，不触发语音娱乐化输出。' },
    ],
    pipelineTitle: '三条核心链路',
    pipelineDesc: '从用户输入到多模态输出的完整数据流。',
    pipelines: [
      { icon: 'message', title: '聊天链路', desc: 'POST /api/chat → 解析 agent/character/modelConfig → 校验访问模式与额度 → 写入 user message → retrieveMemories() 召回长期记忆 → orchestrateCompanionTurn() → contextAgent → textAgent → routerAgent → imageAgent/voiceAgent → reviewAgent → finalizeChatTurn() → 返回 reply / orchestration / memory / quota' },
      { icon: 'image', title: '图片链路', desc: 'orchestration.outputs[type=image] → imageAgent 决定交付顺序 → 前端调用 POST /api/image → server.js 选择模型通道 → remote model provider /api/image 或 src/tools/imageGeneration.js → /images/generations 或 /images/edits。参考图存在时走 step-image-edit-2。图片以 assistant message 写入 SQLite，metadata 保存 imageUrl / b64Json / prompt / seed / finishReason。' },
      { icon: 'mic', title: '语音链路', desc: 'orchestration.outputs[type=voice] → 前端调用 POST /api/tts → voiceAgent 生成情绪演绎指令 → audioConfigFromModel() → remote model provider /api/tts 或 src/tools/speechSynthesis.js → /audio/speech。语音以 assistant message 写入 SQLite，metadata 保存 audio / transcript / voiceAgent。' },
    ],
    memoryTitle: '记忆与 RAG + 记忆胶囊',
    memoryDesc: '本地优先存储，多层记忆体系确保角色"不失忆"。从长期 CRAG 检索到小型常驻胶囊，每层有不同的触发条件和承载范围。',
    memoryItems: [
      { title: 'Memory Capsule（记忆胶囊）', desc: '每轮对话都会携带的小型常驻记忆，不额外调用模型。用户说"记住我...""以后叫我..."时自动写入 memory_capsule 类型记忆。胶囊最多 8 条、约 1800 字，提供关系连续性、称呼、偏好和稳定背景。涉及具体事实时仍以本轮 CRAG 证据为准。' },
      { title: 'CRAG 检索', desc: 'FTS5 keyword score + hash embedding cosine similarity + importance + confidence + recency，多维度排序召回长期记忆。只有在 CRAG 命中时才注入证据，普通闲聊只带胶囊。' },
      { title: '记忆切片与压缩', desc: 'memory_chunks 保存切片与 hash embedding，memory_chunks_fts 提供全文检索。COMPANION_COMPRESSION_WINDOW=100 控制压缩窗口，避免上下文无限膨胀。' },
      { title: '对话导演', desc: '综合最近 60 条上下文 + Memory Capsule + 动态 workingMemory + CRAG 证据 + 关系阶段，约束语气、话题预算、未完成事项和话题切换。' },
    ],
    modelTitle: '模型通道',
    modelDesc: '三种运行模式，按用户能力和隐私需求选择。',
    modelModes: [
      { title: '自部署模型', desc: 'COMPANION_SELF_HOSTED=1。用户自行管理 Base URL、Model、API Key、Image API、Audio API。本地后端直接调用用户配置的 OpenAI-compatible 或 StepFun API。' },
      { title: '远程模型接口', desc: 'COMPANION_OFFICIAL_BASE_URL。客户端连接部署方提供的远程模型接口。公开仓库只保留客户端侧配置和接口约定，不包含远程服务实现。' },
      { title: '本地体验模式', desc: 'COMPANION_PUBLIC_FREE_ACCESS=0。未配置模型通道时仍可运行本地界面、角色、记忆和部分无模型能力。公共免费体验由本地配置控制。' },
    ],
    safetyTitle: '安全边界',
    safetyDesc: '从模型调用到内容输出的多层防护。',
    safetyItems: [
      { title: '密钥隔离', desc: '浏览器前端不保存模型 API Key。真实 .env、本地数据库、访问令牌和用户数据属于运行环境资产。' },
      { title: '危机响应', desc: '自伤、自杀等危机表达优先进入安全回复，不触发语音娱乐化输出。' },
      { title: '高风险话题', desc: '医疗、法律、金融等高风险话题只做信息整理和边界提醒。' },
      { title: '语音抑制', desc: 'Voice Agent 情绪识别 + 危机工作流检测，在敏感场景下自动抑制语音输出。' },
    ],
    archBadge: '技术架构',
    archTitle: '技术架构',
    archDesc: '本地优先 + 云端分层 + 多端适配。浏览器端承担主要存储与交互，服务端负责模型中转、授权管理和主动消息调度。',
    archLayers: [
      { title: '前端层', desc: 'HTML5 · PWA · IndexedDB · Vanilla JS · 浏览器本地存储优先' },
      { title: '模型中继层', desc: 'Node.js · Coze Bot API · OpenAI-Compatible · 后端 relay 统一中转 · 不暴露 token' },
      { title: '服务端', desc: 'MySQL · 账号授权 · 云备份 · 主动消息调度(outbox) · 豆包迁移接口' },
    ],
    stackTitle: '技术栈',
    stack: [
      { icon: 'code', title: '前端', desc: 'HTML5 · CSS3 · Vanilla JS · PWA · IndexedDB · 浏览器本地存储' },
      { icon: 'server', title: '后端', desc: 'Node.js · Coze Bot API · OpenAI-Compatible Relay · MySQL' },
      { icon: 'smartphone', title: '移动端', desc: 'Flutter · 跨端适配 · 本地通知(计划)' },
    ],
    contactTitle: '联系',
    contactDesc: '对产品或技术实现感兴趣？欢迎交流：',
    email: 'qinqiao2014@gmail.com',
    repoLinks: [
      { title: '开源客户端仓库', url: 'https://github.com/qinqiao2014-creator/virtual-companion-agent' },
    ],
  },
  en: {
    back: 'Back to Home',
    heroTitle: '2link Virtual Character Agent',
    heroSubtitle: 'AI Character · Voice Clone · Real-time Call',
    heroDesc: 'An AI virtual character companion tool for everyday users. Custom roles, persona memory, voice cloning, real-time voice calls, character image generation, with one-click Doubao chat history migration.',
    status: '2026 · Product Launch',
    heroLink: 'Open App',
    heroLinkUrl: 'https://2link.walkingxiuxian.cn/index',
    commerceBadge: 'Commercial Launch',
    commerceTitle: 'Profitable from Day One',
    commerceDesc: 'This is not a demo-stage prototype, but a real commercial exploration. Social media promotion → Xianyu marketplace transactions for license codes → Doubao migration plugin lowers switching cost. Profitable on launch day, first-week revenue surpassed 3000+, validating the willingness to pay and the commercial viability of AI companion products.',
    commerceStats: [
      { num: 'Day 1', label: 'Profitable on Launch', desc: 'Social media traffic + Xianyu sales' },
      { num: '3K+', label: 'First Week Revenue', desc: 'Commercial loop validated' },
    ],
    highConcurrencyBadge: 'High Concurrency',
    highConcurrencyTitle: 'From Traffic Spikes to Stable',
    highConcurrencyDesc: 'After launch, the product experienced multiple traffic spikes that crashed the server. Each crash was followed by log review, bottleneck identification, and layer-by-layer optimization — from connection pools, request queuing, to Agent orchestration concurrency control — ultimately going from crash-prone to stable under heavy load.',
    highConcurrencyItems: [
      { title: 'Traffic Spikes', desc: 'Multiple surges of simultaneous users crashed server processes, causing service interruptions.' },
      { title: 'Layer-by-layer Optimization', desc: 'Reviewed crash logs, identified bottlenecks: connection pool exhaustion, request pileup, Agent orchestration blocking. Gradually optimized concurrency control at each layer.' },
      { title: 'Stable Under Load', desc: 'After optimization, handles peak traffic calmly. No more crashes from user surges.' },
    ],
    featuresBadge: 'Core Features',
    featuresTitle: 'Create, Chat, and Voice-interact in One Page',
    featuresDesc: '2link targets users who want a virtual character agent quickly, bundling complex model calls, role configuration, and tool capabilities into a lightweight web app.',
    featureCards: [
      { title: 'AI Character Chat', desc: 'Set name, persona, relationship, speaking style, and opening line for consistent dialogue.' },
      { title: 'Persona Memory & Database', desc: 'Import settings, chat logs, or character data for long-term consistent background and relationship.' },
      { title: 'Voice Cloning', desc: 'Upload voice samples to generate a unique timbre for reading replies and natural voice experience.' },
      { title: 'Real-time Voice Call', desc: 'Talk directly with the character via web browser, suitable for companionship, story interaction, and immersive roleplay.' },
      { title: 'Character Image Generation', desc: 'Generate character visuals from appearance descriptions or reference images.' },
      { title: 'Local-first Storage', desc: 'Characters, chats, and assets stored locally in browser; cloud backup available after login.' },
    ],
    workflowBadge: 'Getting Started',
    workflowTitle: 'No API Research Needed — Start with a License Code',
    workflowDesc: 'For users who want a virtual character agent directly, and for those who want to deliver role-chat and AI companionship as a service.',
    workflowSteps: [
      { step: '1. Open App', desc: 'Access the web app, no complex setup needed.' },
      { step: '2. Log In', desc: 'Bind license code to unlock online model capabilities.' },
      { step: '3. Create Character', desc: 'Fill in persona, appearance, relationship, and speaking style.' },
      { step: '4. Start Chatting', desc: 'Text, voice, images, and calls as needed.' },
    ],
    compareBadge: 'Comparison',
    compareTitle: 'Release Edition is Better for Regular Users',
    compareDesc: 'If you do not want to register model platforms, find API Keys, fill Base URLs, or handle errors, the Release edition is more convenient.',
    compareLeft: 'DIY Approach',
    compareLeftItems: ['Register model platform and apply for API Key', 'Configure Base URL, model name, and quota', 'Handle errors, rate limits, and compatibility yourself', 'Image, voice, and call capabilities need separate integration'],
    compareRight: 'Use 2link Release',
    compareRightItems: ['Start with just a license code', 'Chat, images, voice, and calls in one web app', 'Auto-save character config and local data', 'Tutorials for basics, voice clone, and calls'],
    migratorBadge: 'Doubao Migration',
    migratorTitle: 'One-click Doubao Chat Migration',
    migratorDesc: 'Users with existing Doubao chats can install a browser extension to sync chat history and character context to 2link — no need to rebuild from scratch when switching platforms.',
    migratorLink: 'View Migration Helper',
    techBadge: 'Technical Implementation',
    techTitle: 'Technical Implementation',
    techDesc: '2link is not a simple model frontend wrapper. It is a multi-platform, multi-repo collaborative system with Agent orchestration, local memory, multimodal toolchain, and model gateway.',
    clientsTitle: 'Multi-platform Clients',
    clientsDesc: 'One product, four forms covering different user scenarios. Each runs independently yet shares Agent orchestration and character protocols.',
    clients: [
      { icon: 'desktop', title: 'Desktop Client (Open Source)', desc: 'Browser frontend + Electron shell + local Node API + SQLite. Self-hosted or remote model proxy. AGPL-3.0-only.', tag: 'Open Source', repo: 'https://github.com/qinqiao2014-creator/virtual-companion-agent' },
      { icon: 'phone', title: 'Mobile H5/PWA (Production)', desc: 'IndexedDB local storage + server-relay Agent orchestration + license-backend auth gateway. systemd deployment, cloud backup, proactive messaging.', tag: 'Private', repo: '' },
      { icon: 'smartphone', title: 'Android Flutter Client', desc: 'Fully standalone Flutter native app. User configures own API Key, direct model connection. Local CRAG memory + encrypted backup + biometric lock. No server dependency.', tag: 'Private', repo: '' },
      { icon: 'server', title: 'License Gateway Backend', desc: 'Node.js · Account registration/login · License code management · Quota metering · Model relay (chat/image/TTS/voice) · Admin dashboard · Audit logs. API Key isolated on server side.', tag: 'Private', repo: '' },
    ],
    agentTitle: 'Agent Orchestration',
    agentDesc: 'Backend unified orchestration entry orchestrateCompanionTurn(). Every chat turn is completed by 8 independent agents:',
    agents: [
      { icon: 'layout', title: 'contextAgent', desc: 'Organizes role, persona, memories, and blocking facts into complete context input.' },
      { icon: 'git-branch', title: 'routerAgent', desc: 'Decides output form: text-only / with image / with voice, determines which tools to invoke.' },
      { icon: 'message', title: 'textAgent', desc: 'Invokes main reply generation logic, generates responseProfile and narrativeRhythm by scene.' },
      { icon: 'image', title: 'imageAgent', desc: 'Generates image tool plan from text agent result, decides image_only / text_before_image / image_then_text delivery order.' },
      { icon: 'mic', title: 'voiceAgent', desc: 'Generates voice tool plan and emotional direction instructions, selects clonedVoiceId > voice preset > modelConfig.audioVoice.' },
      { icon: 'check', title: 'reviewAgent', desc: 'Reviews output channel content, ensures multimodal output matches role persona and safety boundaries.' },
      { icon: 'database', title: 'memoryAgent', desc: 'Plans memory candidates, summaries, and safety notes for long-term memory lifecycle management.' },
      { icon: 'shield', title: 'safetyAgent', desc: 'Safety risk identification boundary. Crisis expressions enter safe response first, suppress voice entertainment output.' },
    ],
    pipelineTitle: 'Three Core Chains',
    pipelineDesc: 'Complete data flow from user input to multimodal output.',
    pipelines: [
      { icon: 'message', title: 'Chat Chain', desc: 'POST /api/chat → parse agent/character/modelConfig → validate access mode and quota → write user message → retrieveMemories() → orchestrateCompanionTurn() → contextAgent → textAgent → routerAgent → imageAgent/voiceAgent → reviewAgent → finalizeChatTurn() → return reply / orchestration / memory / quota' },
      { icon: 'image', title: 'Image Chain', desc: 'orchestration.outputs[type=image] → imageAgent decides delivery order → frontend calls POST /api/image → server.js selects model channel → remote model provider /api/image or src/tools/imageGeneration.js → /images/generations or /images/edits. With reference image, uses step-image-edit-2. Image saved as assistant message in SQLite with metadata: imageUrl / b64Json / prompt / seed / finishReason.' },
      { icon: 'mic', title: 'Voice Chain', desc: 'orchestration.outputs[type=voice] → frontend calls POST /api/tts → voiceAgent generates emotional direction → audioConfigFromModel() → remote model provider /api/tts or src/tools/speechSynthesis.js → /audio/speech. Voice saved as assistant message in SQLite with metadata: audio / transcript / voiceAgent.' },
    ],
    memoryTitle: 'Memory & RAG + Memory Capsule',
    memoryDesc: 'Local-first storage with a multi-layer memory system ensuring characters do not forget. From long-term CRAG retrieval to the small resident capsule, each layer has different trigger conditions and scope.',
    memoryItems: [
      { title: 'Memory Capsule', desc: 'A small resident memory carried every turn, no extra model call. When users say "remember me" or "call me", it auto-writes a memory_capsule entry. Max 8 items, ~1800 chars, providing relationship continuity, nicknames, preferences and stable background. Specific facts still rely on CRAG evidence for the current turn.' },
      { title: 'CRAG Retrieval', desc: 'FTS5 keyword score + hash embedding cosine similarity + importance + confidence + recency, multi-dimensional ranking for long-term memory recall. Only injected when CRAG hits; casual chat only carries the capsule.' },
      { title: 'Memory Chunking & Compression', desc: 'memory_chunks stores slices and hash embeddings; memory_chunks_fts provides full-text search. COMPANION_COMPRESSION_WINDOW=100 controls compression window to prevent infinite context expansion.' },
      { title: 'Conversation Director', desc: 'Combines last 60 messages + Memory Capsule + dynamic workingMemory + CRAG evidence + relationship stage to constrain tone, topic budget, unfinished items and topic switching.' },
    ],
    modelTitle: 'Model Gateway',
    modelDesc: 'Three runtime modes selected by user capability and privacy needs.',
    modelModes: [
      { title: 'Self-hosted Model', desc: 'COMPANION_SELF_HOSTED=1. User manages Base URL, Model, API Key, Image API, Audio API. Local backend directly calls user-configured OpenAI-compatible or StepFun API.' },
      { title: 'Remote Model Interface', desc: 'COMPANION_OFFICIAL_BASE_URL. Client connects to deployer-provided remote model interface. Open source repo only keeps client-side config and interface contract, not remote service implementation.' },
      { title: 'Local Experience Mode', desc: 'COMPANION_PUBLIC_FREE_ACCESS=0. Runs local UI, roles, memory, and partial non-model capabilities without configured model channel. Public free access controlled by local config.' },
    ],
    safetyTitle: 'Safety Boundaries',
    safetyDesc: 'Multi-layer protection from model invocation to content output.',
    safetyItems: [
      { title: 'Key Isolation', desc: 'Browser frontend does not store model API Key. Real .env, local database, access tokens, and user data are runtime environment assets.' },
      { title: 'Crisis Response', desc: 'Self-harm and suicide crisis expressions enter safe response first, suppress voice entertainment output.' },
      { title: 'High-risk Topics', desc: 'Medical, legal, and financial high-risk topics are limited to information organization and boundary reminders.' },
      { title: 'Voice Suppression', desc: 'Voice Agent emotion recognition + crisis workflow detection, automatically suppresses voice output in sensitive scenarios.' },
    ],
    archBadge: 'Architecture',
    archTitle: 'Architecture',
    archDesc: 'Local-first + Cloud layering + Multi-device. Browser handles primary storage and interaction; server handles model relay, licensing, and proactive messaging.',
    archLayers: [
      { title: 'Frontend', desc: 'HTML5 · PWA · IndexedDB · Vanilla JS · Browser local storage priority' },
      { title: 'Model Relay', desc: 'Node.js · Coze Bot API · OpenAI-Compatible · Backend relay · No token exposure' },
      { title: 'Server', desc: 'MySQL · Account & Licensing · Cloud Backup · Proactive Messaging (outbox) · Doubao Migration API' },
    ],
    stackTitle: 'Tech Stack',
    stack: [
      { icon: 'code', title: 'Frontend', desc: 'HTML5 · CSS3 · Vanilla JS · PWA · IndexedDB · Browser Storage' },
      { icon: 'server', title: 'Backend', desc: 'Node.js · Coze Bot API · OpenAI-Compatible Relay · MySQL' },
      { icon: 'smartphone', title: 'Mobile', desc: 'Flutter · Cross-platform · Local Notifications (planned)' },
    ],
    contactTitle: 'Contact',
    contactDesc: 'Interested in the product or technical implementation? Feel free to reach out:',
    email: 'qinqiao2014@gmail.com',
    repoLinks: [
      { title: 'Open Source Client', url: 'https://github.com/qinqiao2014-creator/virtual-companion-agent' },
    ],
  },
};

function StackIcon({ type }: { type: string }) {
  if (type === 'code') return <Code2 className="w-5 h-5" />;
  if (type === 'server') return <Server className="w-5 h-5" />;
  if (type === 'smartphone') return <Smartphone className="w-5 h-5" />;
  return <Database className="w-5 h-5" />;
}

function FeatureIcon({ title }: { title: string }) {
  if (title.includes('聊天') || title.includes('Chat')) return <MessageSquare className="w-5 h-5" />;
  if (title.includes('声音') || title.includes('Voice') || title.includes('通话') || title.includes('Call')) return <Mic className="w-5 h-5" />;
  if (title.includes('图片') || title.includes('Image')) return <Image className="w-5 h-5" />;
  if (title.includes('本地') || title.includes('Storage')) return <Shield className="w-5 h-5" />;
  return <Zap className="w-5 h-5" />;
}

function AgentIcon({ type }: { type: string }) {
  if (type === 'layout') return <Layout className="w-5 h-5" />;
  if (type === 'git-branch') return <GitBranch className="w-5 h-5" />;
  if (type === 'message') return <MessageSquare className="w-5 h-5" />;
  if (type === 'image') return <Image className="w-5 h-5" />;
  if (type === 'mic') return <Mic className="w-5 h-5" />;
  if (type === 'check') return <CheckCircle className="w-5 h-5" />;
  if (type === 'database') return <Database className="w-5 h-5" />;
  if (type === 'shield') return <Shield className="w-5 h-5" />;
  return <Box className="w-5 h-5" />;
}

function PipeIcon({ type }: { type: string }) {
  if (type === 'message') return <MessageSquare className="w-5 h-5" />;
  if (type === 'image') return <Image className="w-5 h-5" />;
  if (type === 'mic') return <Mic className="w-5 h-5" />;
  return <Activity className="w-5 h-5" />;
}

export function TwoLinkProject() {
  const { lang } = useLang();
  const c = t[lang];

  return (
    <div className="min-h-screen bg-bg-primary pt-14">
      {/* Back Link */}
      <div className="max-w-content mx-auto px-5 pt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-noto">{c.back}</span>
        </Link>
      </div>

      {/* Hero */}
      <section className="relative py-12 md:py-20 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,139,141,0.10),transparent_38%),linear-gradient(180deg,rgba(244,241,232,0.04),transparent_56%)]" />
        <div className="relative max-w-content mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-rise-in">
              <h1 className="font-serif-lit font-bold text-3xl md:text-5xl text-text-primary tracking-tight mb-3">
                {c.heroTitle}
              </h1>
              <p className="font-inter text-lg text-text-secondary mb-4">{c.heroSubtitle}</p>
              <p className="font-noto text-sm md:text-base text-text-muted mb-6 max-w-lg">
                {c.heroDesc}
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block px-4 py-1.5 border border-[#0f8b8d]/40 bg-[#0f8b8d]/10 rounded text-xs text-[#0f8b8d]">
                  {c.status}
                </span>
                <a
                  href={c.heroLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded bg-[#0f8b8d] text-white text-xs font-noto font-medium hover:bg-[#096466] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {c.heroLink}
                </a>
              </div>
            </div>
            <div className="animate-rise-in">
              <img
                src="/projects/2link/2link-product-preview.png"
                alt="2link product preview"
                className="w-full rounded-xl border border-border-custom shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commerce */}
      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2 text-[#f4a261] mb-4">
            <Zap className="w-5 h-5" />
            <span className="font-noto text-sm">{c.commerceBadge}</span>
          </div>
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-4">{c.commerceTitle}</h2>
          <p className="font-noto text-base text-text-secondary mb-8 max-w-3xl">{c.commerceDesc}</p>
          <div className="grid grid-cols-2 gap-6">
            {c.commerceStats.map((stat, i) => (
              <div key={i} className="p-6 border border-[#0f8b8d]/30 rounded bg-bg-secondary text-center">
                <span className="block font-inter font-bold text-3xl md:text-4xl text-[#0f8b8d] mb-2">{stat.num}</span>
                <span className="block font-noto font-bold text-base text-text-primary mb-1">{stat.label}</span>
                <span className="block font-noto text-sm text-text-secondary">{stat.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Concurrency */}
      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2 text-[#f4a261] mb-4">
            <Shield className="w-5 h-5" />
            <span className="font-noto text-sm">{c.highConcurrencyBadge}</span>
          </div>
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-4">{c.highConcurrencyTitle}</h2>
          <p className="font-noto text-base text-text-secondary mb-10 max-w-3xl">{c.highConcurrencyDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.highConcurrencyItems.map((item, i) => (
              <div key={i} className="p-6 border border-border-custom rounded bg-bg-primary">
                <h3 className="font-noto font-bold text-base text-text-primary mb-2">{item.title}</h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2 text-[#0f8b8d] mb-4">
            <Zap className="w-5 h-5" />
            <span className="font-noto text-sm">{c.featuresBadge}</span>
          </div>
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-4">{c.featuresTitle}</h2>
          <p className="font-noto text-base text-text-secondary mb-10 max-w-3xl">{c.featuresDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.featureCards.map((card, i) => (
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-primary hover:border-[#0f8b8d]/40 transition-colors">
                <div className="flex items-center gap-2 text-[#0f8b8d] mb-3">
                  <FeatureIcon title={card.title} />
                  <h3 className="font-noto font-bold text-base">{card.title}</h3>
                </div>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2 text-[#6cbcb2] mb-4">
            <Layout className="w-5 h-5" />
            <span className="font-noto text-sm">{c.workflowBadge}</span>
          </div>
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-4">{c.workflowTitle}</h2>
          <p className="font-noto text-base text-text-secondary mb-10 max-w-3xl">{c.workflowDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.workflowSteps.map((step, i) => (
              <div key={i} className="p-5 border-l-4 border-[#0f8b8d] bg-bg-secondary rounded-r border-y border-r border-border-custom">
                <h3 className="font-noto font-bold text-base text-text-primary mb-2">{step.step}</h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2 text-[#f4a261] mb-4">
            <Globe className="w-5 h-5" />
            <span className="font-noto text-sm">{c.compareBadge}</span>
          </div>
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-4">{c.compareTitle}</h2>
          <p className="font-noto text-base text-text-secondary mb-10 max-w-3xl">{c.compareDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-border-custom rounded bg-bg-primary">
              <div className="flex items-center gap-2 text-[#f4a261] mb-4">
                <XCircle className="w-5 h-5" />
                <h3 className="font-noto font-bold text-lg">{c.compareLeft}</h3>
              </div>
              <ul className="space-y-3">
                {c.compareLeftItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <XCircle className="w-4 h-4 text-[#f4a261] shrink-0 mt-0.5" />
                    <span className="font-noto">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 border border-[#0f8b8d]/30 rounded bg-bg-primary">
              <div className="flex items-center gap-2 text-[#0f8b8d] mb-4">
                <CheckCircle className="w-5 h-5" />
                <h3 className="font-noto font-bold text-lg">{c.compareRight}</h3>
              </div>
              <ul className="space-y-3">
                {c.compareRightItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <CheckCircle className="w-4 h-4 text-[#0f8b8d] shrink-0 mt-0.5" />
                    <span className="font-noto">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Doubao Migrator */}
      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2 text-[#9bd8cf] mb-4">
            <Zap className="w-5 h-5" />
            <span className="font-noto text-sm">{c.migratorBadge}</span>
          </div>
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-4">{c.migratorTitle}</h2>
          <p className="font-noto text-base text-text-secondary mb-6 max-w-3xl">{c.migratorDesc}</p>
          <a
            href="https://2link.walkingxiuxian.cn/doubao-migrator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-[#0f8b8d]/40 bg-[#0f8b8d]/10 text-[#0f8b8d] text-sm font-noto font-medium hover:bg-[#0f8b8d]/20 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            {c.migratorLink}
          </a>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2 text-[#6cbcb2] mb-4">
            <Cpu className="w-5 h-5" />
            <span className="font-noto text-sm">{c.techBadge}</span>
          </div>
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-4">{c.techTitle}</h2>
          <p className="font-noto text-base text-text-secondary mb-10 max-w-3xl">{c.techDesc}</p>

          {/* Multi-platform Clients */}
          <div className="mb-12">
            <h3 className="font-noto font-bold text-xl text-text-primary mb-3">{c.clientsTitle}</h3>
            <p className="font-noto text-sm text-text-secondary leading-relaxed mb-6">{c.clientsDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {c.clients.map((client, i) => (
                <div key={i} className="p-5 border border-border-custom rounded bg-bg-primary hover:border-[#0f8b8d]/40 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-noto ${client.tag === '开源' || client.tag === 'Open Source' ? 'bg-[#0f8b8d]/10 text-[#0f8b8d] border border-[#0f8b8d]/30' : 'bg-text-muted/10 text-text-muted border border-text-muted/30'}`}>{client.tag}</span>
                    <h4 className="font-noto font-bold text-base text-text-primary">{client.title}</h4>
                  </div>
                  <p className="font-noto text-sm text-text-secondary leading-relaxed">{client.desc}</p>
                  {client.repo && (
                    <a href={client.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-xs text-[#0f8b8d] hover:text-[#096466] transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="font-noto">GitHub</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Agent Orchestration */}
          <div className="mb-12">
            <h3 className="font-noto font-bold text-xl text-text-primary mb-3">{c.agentTitle}</h3>
            <p className="font-noto text-sm text-text-secondary leading-relaxed mb-6">{c.agentDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {c.agents.map((agent, i) => (
                <div key={i} className="p-4 border border-border-custom rounded bg-bg-primary hover:border-[#0f8b8d]/40 transition-colors">
                  <div className="flex items-center gap-2 text-[#0f8b8d] mb-2">
                    <AgentIcon type={agent.icon} />
                    <h4 className="font-noto font-bold text-sm">{agent.title}</h4>
                  </div>
                  <p className="font-noto text-xs text-text-secondary leading-relaxed">{agent.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Three Core Chains */}
          <div className="mb-12">
            <h3 className="font-noto font-bold text-xl text-text-primary mb-3">{c.pipelineTitle}</h3>
            <p className="font-noto text-sm text-text-secondary leading-relaxed mb-6">{c.pipelineDesc}</p>
            <div className="grid grid-cols-1 gap-4">
              {c.pipelines.map((p, i) => (
                <div key={i} className="p-5 border border-border-custom rounded bg-bg-primary hover:border-[#0f8b8d]/40 transition-colors">
                  <div className="flex items-center gap-2 text-[#0f8b8d] mb-3">
                    <PipeIcon type={p.icon} />
                    <h4 className="font-noto font-bold text-base">{p.title}</h4>
                  </div>
                  <p className="font-noto text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Memory & RAG */}
          <div className="mb-12">
            <div className="flex items-center gap-2 text-[#9bd8cf] mb-3">
              <HardDrive className="w-5 h-5" />
              <h3 className="font-noto font-bold text-xl text-text-primary">{c.memoryTitle}</h3>
            </div>
            <p className="font-noto text-sm text-text-secondary leading-relaxed mb-6">{c.memoryDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {c.memoryItems.map((item, i) => (
                <div key={i} className="p-4 border border-border-custom rounded bg-bg-primary">
                  <h4 className="font-noto font-bold text-sm text-text-primary mb-1">{item.title}</h4>
                  <p className="font-noto text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Model Gateway */}
          <div className="mb-12">
            <div className="flex items-center gap-2 text-[#f4a261] mb-3">
              <Layers className="w-5 h-5" />
              <h3 className="font-noto font-bold text-xl text-text-primary">{c.modelTitle}</h3>
            </div>
            <p className="font-noto text-sm text-text-secondary leading-relaxed mb-6">{c.modelDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {c.modelModes.map((mode, i) => (
                <div key={i} className="p-4 border border-border-custom rounded bg-bg-primary">
                  <h4 className="font-noto font-bold text-sm text-text-primary mb-1">{mode.title}</h4>
                  <p className="font-noto text-xs text-text-secondary leading-relaxed">{mode.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Safety */}
          <div>
            <div className="flex items-center gap-2 text-[#f4a261] mb-3">
              <Lock className="w-5 h-5" />
              <h3 className="font-noto font-bold text-xl text-text-primary">{c.safetyTitle}</h3>
            </div>
            <p className="font-noto text-sm text-text-secondary leading-relaxed mb-6">{c.safetyDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {c.safetyItems.map((item, i) => (
                <div key={i} className="p-4 border border-border-custom rounded bg-bg-primary">
                  <h4 className="font-noto font-bold text-sm text-text-primary mb-1">{item.title}</h4>
                  <p className="font-noto text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2 text-[#6cbcb2] mb-4">
            <Layout className="w-5 h-5" />
            <span className="font-noto text-sm">{c.archBadge}</span>
          </div>
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-6">{c.archTitle}</h2>
          <p className="font-noto text-base text-text-primary leading-relaxed mb-8">{c.archDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.archLayers.map((l, i) => (
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-secondary hover:border-[#0f8b8d]/40 transition-colors">
                <h3 className="font-noto font-bold text-base text-text-primary mb-2">{l.title}</h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-8">{c.stackTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.stack.map((s, i) => (
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-primary hover:border-[#0f8b8d]/40 transition-colors">
                <div className="flex items-center gap-2 text-text-primary mb-3">
                  <StackIcon type={s.icon} />
                  <h3 className="font-noto font-bold text-base">{s.title}</h3>
                </div>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto text-center">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-4">{c.contactTitle}</h2>
          <p className="font-noto text-base text-text-secondary mb-6">{c.contactDesc}</p>
          <a href={`mailto:${c.email}`} className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors duration-200 group">
            <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">{c.email}</span>
          </a>
        </div>
      </section>

      {/* Open Source Repos */}
      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-4">GitHub</h2>
          <p className="font-noto text-sm text-text-secondary mb-6">公开仓库可直接访问，技术架构可被社区复用。</p>
          <div className="flex flex-wrap gap-3">
            {c.repoLinks.map((repo, i) => (
              <a
                key={i}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded border border-border-custom bg-bg-primary text-sm text-text-primary hover:border-[#0f8b8d]/40 hover:text-[#0f8b8d] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="font-noto">{repo.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
