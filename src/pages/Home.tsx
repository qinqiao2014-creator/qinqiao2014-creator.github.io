import { Link } from 'react-router-dom';
import { Github, Mail, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';
import { useEffect, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { resolveStars } from '../lib/resolveStars';

type Translation = {
  heroTitle: string;
  heroSubtitle: string;
  heroDesc: string;
  heroCta: string;
  heroEpigraph: string;
  currentTitle: string;
  keywordIntro: string;
  keywordQuote: string;
  keywords: { core: { text: string; color: string }[]; mid: { text: string; color: string }[]; small: { text: string; color: string }[] };
  aboutTitle: string;
  aboutIntro: string;
  aboutGoal: string;
  timelineTitle: string;
  timeline: { year: string; title: string; desc: string }[];
  threadTitle: string;
  threadDesc: string;
  threadSteps: { label: string; project: string; path: string; color: string }[];
  productTitle: string;
  productDesc: string;
  commerceStats: { num: string; label: string; desc: string }[];
  projectsTitle: string;
  ogcpCardTitle: string;
  ogcpCardTag: string;
  ogcpCardDesc: string;
  walkingCardTitle: string;
  walkingCardTag: string;
  walkingCardDesc: string;
  academyCardTitle: string;
  academyCardTag: string;
  academyCardDesc: string;
  duckEscapeCardTitle: string;
  duckEscapeCardTag: string;
  duckEscapeCardDesc: string;
  npcAgentCardTitle: string;
  npcAgentCardTag: string;
  npcAgentCardDesc: string;
  distanceCardTitle: string;
  distanceCardTag: string;
  distanceCardDesc: string;
  twoLinkCardTitle: string;
  twoLinkCardTag: string;
  twoLinkCardDesc: string;
  awards: { title: string; desc: string }[];
  endorsement: { title: string; desc: string; link?: string };
  contactTitle: string;
  contactDesc: string;
  email: string;
  github: string;
  socials: { name: string; url: string }[];
  skillsTitle: string;
  skillsDesc: string;
  skills: { name: string; tag: string; desc: string; stars: number; url: string }[];
  gardenTitle: string;
  gardenDesc: string;
  gardenKinds: { name: string; desc: string }[];
  gardenItems: string[];
};

const t: Record<'zh' | 'en', Translation> = {
  zh: {
    heroTitle: '阿早',
    heroSubtitle: '独立AI研究者 · 开源实践者',
    heroDesc: '15年商业历练后转型技术，相信"不依赖人"的系统才是未来。',
    heroCta: '查看项目',
    heroEpigraph: '「我总想象，天堂应是图书馆的模样。」 —— 博尔赫斯',
    currentTitle: '我是谁',
    keywordIntro: '极客 · 独立AI研究者 · 开源实践者。15年商业历练后转型技术，相信"不依赖人的系统"才是未来。',
    keywordQuote: '"我才知道原来我一直在找身份认同，现在找到了。" — 2026',
    keywords: {
      core: [
        { text: '极客', color: 'orange' },
        { text: '独立AI研究者', color: 'orange' },
        { text: '不依赖人的系统', color: 'orange' },
        { text: 'OPC圣体', color: 'gold' },
      ],
      mid: [
        { text: '开源实践者', color: 'teal' },
        { text: '技术转型者', color: 'teal' },
        { text: '长期主义', color: 'teal' },
        { text: '先上线再完美', color: 'teal' },
        { text: '风口卡位', color: 'teal' },
        { text: '跨界整合', color: 'teal' },
        { text: '14年找身份', color: 'teal' },
        { text: '月亮与六便士', color: 'teal' },
        { text: '愤怒驱动', color: 'teal' },
        { text: '真诚', color: 'teal' },
      ],
      small: [
        { text: '导演', color: 'gray' },
        { text: 'MCN操盘手', color: 'gray' },
        { text: '电商老板', color: 'gray' },
        { text: '音频AI', color: 'gray' },
        { text: '数据集', color: 'gray' },
        { text: '一人公司', color: 'gray' },
        { text: '厚脸皮', color: 'gray' },
        { text: '考研CS', color: 'gray' },
        { text: '南京', color: 'gray' },
        { text: '南艺', color: 'gray' },
        { text: '吴宇清', color: 'gray' },
        { text: '摇滚', color: 'gray' },
        { text: '700天', color: 'gray' },
        { text: '10倍', color: 'gray' },
        { text: '黑暗森林', color: 'gray' },
        { text: '流量洼地', color: 'gray' },
      ],
    },
    aboutTitle: '纳尔齐斯与歌尔德蒙',
    aboutIntro: '我是阿早，覃翘（早叔）。<br/><br/>高中时我出版了第一本书<a href="https://www.gxwenlian.com/show/35/8157" target="_blank" rel="noopener noreferrer" class="text-[#9bd8cf] underline decoration-[#6cbcb2] hover:text-[#6cbcb2] hover:decoration-[#9bd8cf] transition-colors">《生活是这样子》</a>，中国文联出版社，桂林市作协还举办了作品研讨会。<br/><br/>大学时我在南艺学戏文，写小说、组乐队、追诗歌和摇滚。两次从南京<a href="https://www.douban.com/doulist/25983139/" target="_blank" rel="noopener noreferrer" class="text-[#9bd8cf] underline decoration-[#6cbcb2] hover:text-[#6cbcb2] hover:decoration-[#9bd8cf] transition-colors">徒步去镇江迷笛音乐节</a>，六十多公里。在livehouse办过演出，还邀请过<a href="https://www.douban.com/group/topic/8472196/" target="_blank" rel="noopener noreferrer" class="text-[#9bd8cf] underline decoration-[#6cbcb2] hover:text-[#6cbcb2] hover:decoration-[#9bd8cf] transition-colors">木马乐队</a>来南京。<br/><br/>毕业作品<a href="https://movie.douban.com/subject/20266518/" target="_blank" rel="noopener noreferrer" class="text-[#9bd8cf] underline decoration-[#6cbcb2] hover:text-[#6cbcb2] hover:decoration-[#9bd8cf] transition-colors">《南京长江大桥有多少灯柱》</a>（21分钟）入围金鸡百花短片单元和CIFF。毕业后我没有离开影视行业，从婚庆干起，带十三人的团队全南京跑单，拍宣传片、MV。2015年参演电影<a href="https://movie.douban.com/subject/26671359/" target="_blank" rel="noopener noreferrer" class="text-[#9bd8cf] underline decoration-[#6cbcb2] hover:text-[#6cbcb2] hover:decoration-[#9bd8cf] transition-colors">《消灭大学生》</a>，饰演郭小亮。同年编剧作品《激情游戏》备案。2016年导演了长片<a href="https://movie.douban.com/subject/26806828/" target="_blank" rel="noopener noreferrer" class="text-[#9bd8cf] underline decoration-[#6cbcb2] hover:text-[#6cbcb2] hover:decoration-[#9bd8cf] transition-colors">《不良女主播》</a>（65分钟）。同年11月26日，主办<a href="https://www.douyu.com/cms/detail/new_list/4447.shtml" target="_blank" rel="noopener noreferrer" class="text-[#9bd8cf] underline decoration-[#6cbcb2] hover:text-[#6cbcb2] hover:decoration-[#9bd8cf] transition-colors">GCS动漫展</a>，南京新庄国际展览中心C厅。同年，申报"打哈哟自媒体"创业项目，获批政府创业奖等级2，但因为公司尽调问题，最终没拿到钱。<br/><br/>那几年，追的是月亮。<br/><br/>2017年，月亮死了。我放下它，转身去追六便士。<br/><br/>做<a href="https://music.163.com/#/artist/desc?id=12126321" target="_blank" rel="noopener noreferrer" class="text-[#9bd8cf] underline decoration-[#6cbcb2] hover:text-[#6cbcb2] hover:decoration-[#9bd8cf] transition-colors">女团</a>运营、网红经济和MCN操盘，成为抖音内容培训讲师，多家MCN的内容负责人。2017年开始签约coser，之后陆续跟网易、腾讯、美图等平台建立KOC、KOL供应合作，服务美图至今十年。2019年写十万字<a href="https://www.zhihu.com/column/c_83841941" target="_blank" rel="noopener noreferrer" class="text-[#9bd8cf] underline decoration-[#6cbcb2] hover:text-[#6cbcb2] hover:decoration-[#9bd8cf] transition-colors">二次元cosplay行业研报</a>，成为该领域KOL。2020年开三坑服饰原创定制店。2021年考取证券从业和基金从业资格证。2022年投资的公司上线数字藏品平台。<br/><br/>但我始终在那些身份之外。赚钱的事干了不少，却没有一件让我觉得"这就是我"。2022年，三坑供应链崩盘。那套依赖人的商业系统在我面前碎掉了。我意识到，凡是依赖人的，都是脆弱的。<br/><br/>我决定做不依赖人的事——AI与金融。从零学编程，查文档、看源码、在社区里问。做开源项目，错了重来，上线迭代。<br/><br/>2026年，我确认了自己的身份：**一个用AI和技术解决问题的极客**。OPC（One Person Company）圣体——一人加AI，就是完整团队。<br/><br/>月亮和六便士。两个都要——纳尔齐斯与歌尔德蒙和解了。',
    aboutGoal: '2026-2030年目标：考研CS，深耕AI独立研究。AI工具开发与金融投资并行。目标：成为能做深度研究的独立AI研究者。',
    timelineTitle: '人生是旷野，不是轨道',
    timeline: [
      { year: '2012—2016', title: '月亮阶段', desc: '南艺戏文毕业。毕业作品入围金鸡百花短片单元与CIFF。组建13人拍摄团队，2016年导演长片《不良女主播》。' },
      { year: '2017—2022', title: '六便士阶段', desc: '放下艺术理想，做女团、MCN操盘。网易/腾讯/美图 KOL供应商，写十万字二次元cosplay行业研报。创立三坑服饰品牌，考取证券/基金从业资格证。' },
      { year: '2022—2026', title: '刀锋阶段', desc: '三坑供应链崩盘后，意识到依赖人的系统是脆弱的，决定做不依赖人的事——越过刀锋，走上觉醒之路。从零自学编程，独立开发开源项目。' },
      { year: '2026—2030', title: '月亮与六便士', desc: '考研CS。AI工具开发与金融研究并行。目标：独立AI研究者——月亮与六便士，全都要。' },
    ],
    threadTitle: '一条线',
    threadDesc: '从原型探索到产品验证，再到系统化框架。',
    threadSteps: [
      { label: '原型探索', project: '无限学园', path: '/projects/infinite-academy', color: 'green' },
      { label: '产品验证', project: '逃鸭！南京！', path: '/projects/duck-escape', color: 'orange' },
      { label: '系统化框架', project: '互动叙事多智能体框架', path: '/projects/npc-agent', color: 'teal' },
    ],
    productTitle: '产品',
    productDesc: '从研究到产品的落地。',
    commerceStats: [
      { num: 'Day 1', label: '上线即盈利', desc: '自媒体引流 + 闲鱼成交' },
      { num: '3K+', label: '首周营收', desc: '商业闭环验证跑通' },
      { num: '∞', label: '高并发实战', desc: '洪峰冲死数次后优化稳定' },
    ],
    projectsTitle: '沙之书',
    ogcpCardTitle: 'OpenGuitarChordProject',
    ogcpCardTag: '音频AI',
    ogcpCardDesc: '开源吉他和弦识别项目。996样本物理感知数据集，目标是从音频自动识别和弦并生成六线谱。',
    walkingCardTitle: '走路修仙',
    walkingCardTag: '跨端App',
    walkingCardDesc: '将真实步数转化为修仙修为的跨端App。Flutter + FastAPI，21阶境界系统，Android 真机计步验证通过。',
    academyCardTitle: '无限学园',
    academyCardTag: '原型探索',
    academyCardDesc: 'Godot 4 视觉小说/养成原型。探索编辑器 + AIGC 管线驱动的开发模式，React 剧情编辑器让叙事内容可配置、可迭代，验证了一条不靠硬编码的内容生产路径。',
    duckEscapeCardTitle: '逃鸭！南京！',
    duckEscapeCardTag: '产品验证',
    duckEscapeCardDesc: '基于无限学院的编辑器工作流，团队分工完成了一款完整的文字冒险游戏。55 个剧情节点、6 种结局、四维度数值驱动，验证了编辑器 + 团队协作这种模式做完整产品的可行性。',
    npcAgentCardTitle: '互动叙事多智能体框架',
    npcAgentCardTag: '系统化框架',
    npcAgentCardDesc: '从逃鸭的实践中发现，每次接入新世界都需要大量人工配置与调优。于是把这套人工的复杂工作自动化，做成互动叙事多智能体框架（原名：通用NPC Agent底座）——Agent 自己读取世界设定、校验规则、管理状态，实现热插拔。',
    distanceCardTitle: 'distance',
    distanceCardTag: 'AdventureX 2026 · PICO 赛道第二名',
    distanceCardDesc: 'AI 原生的动态关系宇宙。资料、记忆与双向行为被编译成个人图谱，持续驱动星球质量、关系距离与 3D 布局——关系淡了，那颗星球就真的变暗、漂远。',
    twoLinkCardTitle: '2link 虚拟角色智能体',
    twoLinkCardTag: '产品落地',
    twoLinkCardDesc: '面向普通用户的AI虚拟角色伴侣工具。自定义角色、人设记忆、声音克隆、实时语音通话、角色图片生成，支持豆包聊天记录一键迁移。',
    awards: [
      { title: 'ADVX PICO赛道 Web应用第二名', desc: '优胜奖' },
      { title: 'WAIC 江浙赛区第七名', desc: '优秀奖' },
      { title: '阶跃星辰 Agent Build 南京', desc: '一等奖' },
      { title: '抖音AI创变者计划 金陵站', desc: '一等奖' },
      { title: '南京OPC创新创业大赛', desc: '一等奖' },
      { title: '苏州金鸡湖OPC半决赛', desc: '创业者' },
      { title: 'GOAI 世界人工智能开源大赛 · 新智基座赛道', desc: '前300强' },
      { title: '第十一届"创客中国"江苏省中小企业创新创业大赛', desc: '百强项目 · 创业组（创客团队组）20 强 · 优胜奖' },
    ],
    endorsement: {
      title: '江岸计划 · Youth AI Hackathon（南京市鼓楼区政府主办）',
      desc: '赛事顾问 · 政府级AI赛事背书',
      link: 'https://mp.weixin.qq.com/s/ZRx-b1RV5Cy15TnEZozw4w',
    },
    contactTitle: '联系我',
    contactDesc: '如果你对我的研究或项目感兴趣，欢迎交流：',
    email: 'qinqiao2014@gmail.com',
    github: 'github.com/qinqiao2014-creator',
    socials: [
      { name: '抖音', url: 'https://www.douyin.com/user/MS4wLjABAAAAV92gjs6tGrme_ENgc65WaPEIUWLfqA2KSTJdJxefKSM' },
      { name: '小红书', url: 'https://www.xiaohongshu.com/user/profile/5e95c83c00000000010077a5' },
      { name: 'B站', url: 'https://space.bilibili.com/31603890' },
    ],
    skillsTitle: '巴别图书馆',
    skillsDesc: '我造的工具与技能收藏——Skill、工作流，以及能把 AI 当学徒使的各类装置。',
    skills: [
      { name: 'zhicheng-shenbao-skill', tag: '申报助手', desc: '职称初定与评审申报全流程自动化，从材料梳理到提交清单。', stars: 1, url: 'https://github.com/qinqiao2014-creator/zhicheng-shenbao-skill' },
      { name: 'schedule-onepager-skill', tag: '效率工具', desc: '一页纸排期表，数据驱动生成 HTML 并直接渲染进邮箱。', stars: 0, url: 'https://github.com/qinqiao2014-creator/schedule-onepager-skill' },
      { name: 'live-class-skill', tag: '会议转录', desc: '直播课 / 会议的「代听」转写，自动生成纪要文本。', stars: 1, url: 'https://github.com/qinqiao2014-creator/live-class-skill' },
      { name: 'imgbox-skill', tag: '图像生成', desc: '聚合多家生图模型（含 StepFun）的一站式入口，含 AI 抠图。', stars: 0, url: 'https://github.com/qinqiao2014-creator/imgbox-skill' },
      { name: 'resume-onepager-skill', tag: '简历', desc: '一页纸简历生成，输出带真实文字层的 A4 PDF / PNG。', stars: 0, url: 'https://github.com/qinqiao2014-creator/resume-onepager-skill' },
      { name: 'multi-agent-async-workflow', tag: '工作流', desc: '多 Agent 异步协同，以 GitHub Issues 作为任务总线。', stars: 7, url: 'https://github.com/qinqiao2014-creator/multi-agent-async-workflow' },
      { name: 'agent-usage-skill', tag: '用量监控', desc: '本地多 AI Agent Token 用量统一监控看板，插件化接入、实时刷新。', stars: 0, url: 'https://github.com/qinqiao2014-creator/agent-usage-skill' },
      { name: 'form-autofill-skill', tag: '填表助手', desc: '一次录档表单自动填，提交永远由你本人点。', stars: 0, url: 'https://github.com/qinqiao2014-creator/form-autofill-skill' },
    ],
    gardenTitle: '合作项目',
    gardenDesc: '在别人的迷宫里落子——有些世界由他人构筑，我在其中添过砖。',
    gardenKinds: [
      { name: '商业委托', desc: '为甲方构筑的系统' },
      { name: '开源贡献', desc: '留在公开仓库的提交' },
    ],
    gardenItems: [
      'AI 眼镜（ROKID）· 广交会导览助手',
      '儿童青少年脊柱侧弯筛查系统',
      'AgentBehaviorBench 智能体接入',
    ],
  },
  en: {
    heroTitle: 'Zaosusu',
    heroSubtitle: 'Independent AI Researcher · Open Source Practitioner',
    heroDesc: '15 years in business before pivoting to tech. Believing systems that don\'t depend on people are the future.',
    heroCta: 'View Projects',
    heroEpigraph: '"I have always imagined that Paradise will be a kind of library." — Borges',
    currentTitle: 'Who I Am',
    keywordIntro: 'Geek · Independent AI Researcher · Open Source Practitioner. 15 years in business before pivoting to tech. Believing systems that don\'t depend on people are the future.',
    keywordQuote: '"I finally realized I\'ve been searching for my identity all along. Now I\'ve found it." — 2026',
    keywords: {
      core: [
        { text: 'Geek', color: 'orange' },
        { text: 'Independent AI Researcher', color: 'orange' },
        { text: 'Systems Without People', color: 'orange' },
      ],
      mid: [
        { text: 'Open Source', color: 'teal' },
        { text: 'Tech Transition', color: 'teal' },
        { text: 'Long-termism', color: 'teal' },
        { text: 'Ship First', color: 'teal' },
        { text: 'Early Mover', color: 'teal' },
        { text: 'Cross-domain', color: 'teal' },
        { text: '14-Year Search', color: 'teal' },
        { text: 'Moon & Sixpence', color: 'teal' },
        { text: 'Anger Driven', color: 'teal' },
        { text: 'Authentic', color: 'teal' },
      ],
      small: [
        { text: 'Director', color: 'gray' },
        { text: 'MCN Operator', color: 'gray' },
        { text: 'E-commerce', color: 'gray' },
        { text: 'Audio AI', color: 'gray' },
        { text: 'Dataset', color: 'gray' },
        { text: 'One-Person Co', color: 'gray' },
        { text: 'Thick-skinned', color: 'gray' },
        { text: 'CS Grad School', color: 'gray' },
        { text: 'Nanjing', color: 'gray' },
        { text: 'NUA', color: 'gray' },
        { text: 'Wu Yuqing', color: 'gray' },
        { text: 'Rock', color: 'gray' },
        { text: '700 Days', color: 'gray' },
        { text: '10x', color: 'gray' },
        { text: 'Dark Forest', color: 'gray' },
        { text: 'Traffic Niche', color: 'gray' },
      ],
    },
    aboutTitle: 'Narcissus and Goldmund',
    aboutIntro: "I'm Zaosusu (Zao Shu), Qin Qiao.\n\nIn high school I published my first book, <a href=\"https://www.gxwenlian.com/show/35/8157\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#9bd8cf] underline decoration-[#6cbcb2] hover:text-[#6cbcb2] hover:decoration-[#9bd8cf] transition-colors\">*Life Is Like This*</a>, through China Federation of Literary and Art Circles Press. The Guilin Writers Association held a seminar for it.\n\nI studied playwriting and screenwriting at NUA. Wrote novels, formed bands, drifted between poetry and rock'n'roll. <a href=\"https://www.douban.com/doulist/25983139/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#9bd8cf] underline decoration-[#6cbcb2] hover:text-[#6cbcb2] hover:decoration-[#9bd8cf] transition-colors\">Hiked 60+ km from Nanjing to Zhenjiang for the Midi Music Festival</a> twice, played at livehouses, and invited the band <a href=\"https://www.douban.com/group/topic/8472196/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#9bd8cf] underline decoration-[#6cbcb2] hover:text-[#6cbcb2] hover:decoration-[#9bd8cf] transition-colors\">Muma</a> to Nanjing.\n\nMy graduation film <a href=\"https://movie.douban.com/subject/20266518/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#9bd8cf] underline decoration-[#6cbcb2] hover:text-[#6cbcb2] hover:decoration-[#9bd8cf] transition-colors\">\"How Many Lamp Posts on the Nanjing Yangtze River Bridge\"</a> (21 min) was selected for the Golden Rooster & Hundred Flowers Short Film Unit and CIFF. After graduation I didn't leave the film industry. I started with wedding videography, led a 13-person crew across Nanjing, shot promotional videos and music videos. In 2015 I acted in the film <a href=\"https://movie.douban.com/subject/26671359/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#9bd8cf] underline decoration-[#6cbcb2] hover:text-[#6cbcb2] hover:decoration-[#9bd8cf] transition-colors\">*Eliminate College Students*</a>, playing Guo Xiaoliang. That same year my screenplay *Passion Game* was filed for record. In 2016 I directed the feature film <a href=\"https://movie.douban.com/subject/26806828/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#9bd8cf] underline decoration-[#6cbcb2] hover:text-[#6cbcb2] hover:decoration-[#9bd8cf] transition-colors\">\"Bad Female Streamer\"</a> (65 min). On November 26 of the same year, I organized the <a href=\"https://www.douyu.com/cms/detail/new_list/4447.shtml\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#9bd8cf] underline decoration-[#6cbcb2] hover:text-[#6cbcb2] hover:decoration-[#9bd8cf] transition-colors\">GCS Anime Expo</a> at Hall C of Nanjing Xinzhuang International Exhibition Center. In the same year, my startup project &quot;Dahayo Self-Media&quot; was approved as a government entrepreneurship award (Level 2), but due to company due diligence issues, the funding was never received.<br/><br/>Those years, I was chasing the Moon.\n\nIn 2017, the Moon died. I set it aside and turned to chase the Sixpence. I did <a href=\"https://music.163.com/#/artist/desc?id=12126321\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#9bd8cf] underline decoration-[#6cbcb2] hover:text-[#6cbcb2] hover:decoration-[#9bd8cf] transition-colors\">girl-group</a> operations, influencer economy and MCN management, became a Douyin content training instructor, and served as content lead for multiple MCNs. In 2017 I started signing cosplayers, and gradually built KOC/KOL supply partnerships with NetEase, Tencent, Meitu, and other platforms — I've been serving Meitu for ten years now. In 2019 I wrote <a href=\"https://www.zhihu.com/column/c_83841941\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#9bd8cf] underline decoration-[#6cbcb2] hover:text-[#6cbcb2] hover:decoration-[#9bd8cf] transition-colors\">100,000-word cosplay industry research reports</a> and became a KOL in the field. In 2020 I founded a three-pit fashion original-design brand. In 2021 I earned my securities and fund qualifications. In 2022 a company I invested in launched a digital collectibles platform.\n\nBut I was never truly at home in those identities. I made money, but none of it felt like 'this is me.' In 2022, the three-pit supply chain collapsed. The people-dependent business system fell apart before my eyes. I realized: any system that depends on people is fragile.\n\nI decided to build things that don't depend on people — AI and finance. I taught myself programming from scratch. Read docs, read source code, asked questions in communities. Worked on open-source projects. Failed, restarted, shipped, iterated.\n\nIn 2026, I confirmed my identity: **a geek who solves problems with AI and technology**. OPC (One Person Company) — one person plus AI is a complete team.\n\nThe Moon and the Sixpence — Narcissus and Goldmund reconciled.",
    aboutGoal: '2026-2030 Goal: Apply for CS graduate school, pursue independent AI research. Parallel tracks: AI tool development and financial investment. Goal: become an independent AI researcher capable of deep research.',
    timelineTitle: 'Life is a Wilderness, Not a Track',
    timeline: [
      { year: '2012–2016', title: 'The Moon', desc: 'Graduated from NUA, playwriting & screenwriting. Graduation film selected for Golden Rooster & Hundred Flowers Short Film Unit and CIFF. Led a 13-person crew. Directed feature film "Bad Female Streamer" in 2016.' },
      { year: '2017–2022', title: 'The Sixpence', desc: 'Set aside artistic ideals. Girl-group operations, MCN management. KOL supplier for NetEase/Tencent/Meitu. Published a 100,000-word cosplay industry research report. Founded a "three-pit" fashion brand. Earned securities & fund qualifications in 2021.' },
      { year: '2022–2026', title: "The Razor's Edge", desc: 'After the "three-pit" supply chain collapsed, realized people-dependent systems are fragile, and decided to build systems that don\'t depend on people — crossed the razor\'s edge, walked the path of awakening. Self-taught programming from scratch. Independently developed open-source projects.' },
      { year: '2026–2030', title: 'Moon & Sixpence', desc: 'Applying for CS graduate school. Parallel tracks: AI tool development and financial research. Goal: independent AI researcher — the Moon and the Sixpence. Both.' },
    ],
    threadTitle: 'One Thread',
    threadDesc: 'From prototype exploration to product validation, to a systemized framework.',
    threadSteps: [
      { label: 'Prototype', project: 'Infinite Academy', path: '/projects/infinite-academy', color: 'green' },
      { label: 'Validation', project: 'Duck Escape', path: '/projects/duck-escape', color: 'orange' },
      { label: 'Framework', project: 'Interactive Fiction Multi-Agent Framework', path: '/projects/npc-agent', color: 'teal' },
    ],
    productTitle: 'Products',
    productDesc: 'From research to product.',
    commerceStats: [
      { num: 'Day 1', label: 'Profitable on Launch', desc: 'Social media + Xianyu sales' },
      { num: '3K+', label: 'First Week Revenue', desc: 'Commercial loop validated' },
      { num: '∞', label: 'High Concurrency', desc: 'Crashed multiple times, then stabilized' },
    ],
    projectsTitle: 'The Book of Sand',
    ogcpCardTitle: 'OpenGuitarChordProject',
    ogcpCardTag: 'Audio AI',
    ogcpCardDesc: 'Open-source guitar chord recognition. 996-sample physics-aware dataset. Goal: recognize chords from audio and generate guitar tablature.',
    walkingCardTitle: 'WalkingXiuxian',
    walkingCardTag: 'Cross-platform App',
    walkingCardDesc: 'Turn real-world steps into cultivation power. Cross-platform Flutter App + FastAPI backend. 21-realm system. Verified on Android devices.',
    academyCardTitle: 'Infinite Academy',
    academyCardTag: 'Prototype',
    academyCardDesc: 'Godot 4 visual novel / simulation prototype. Exploring an editor + AIGC pipeline-driven development mode. React story editor makes narrative content configurable and iterable, validating a non-hardcoded content production path.',
    duckEscapeCardTitle: 'Duck Escape: Nanjing',
    duckEscapeCardTag: 'Validation',
    duckEscapeCardDesc: 'Using Infinite Academy\'s editor workflow, the team divided responsibilities to ship a complete text adventure. 55 story nodes, 6 endings, four-dimension stat-driven. Validated that editor + team collaboration can deliver a full product.',
    npcAgentCardTitle: 'Interactive Fiction Multi-Agent Framework',
    npcAgentCardTag: 'Framework',
    npcAgentCardDesc: "From Duck Escape practice we found each new world required heavy manual configuration and tuning. So we automated that manual complexity into an interactive-fiction multi-agent framework (formerly: Universal NPC Agent Base) — Agents read world settings, validate rules, manage state themselves, enabling hot-plug.",
    distanceCardTitle: 'distance',
    distanceCardTag: 'AdventureX 2026 · PICO Track 2nd Place',
    distanceCardDesc: 'An AI-native dynamic relationship universe. Profile, memories and two-way behavior are compiled into a personal graph that continuously drives planet mass, relationship distance and the 3D layout — when a tie fades, that planet really does dim and drift away.',
    twoLinkCardTitle: '2link Virtual Character Agent',
    twoLinkCardTag: 'Product Launch',
    twoLinkCardDesc: 'An AI virtual character companion tool for everyday users. Custom roles, persona memory, voice cloning, real-time voice calls, character image generation, with one-click Doubao chat history migration.',
    awards: [
      { title: 'ADVX PICO Track Web App', desc: '2nd Place' },
      { title: 'WAIC Jiangzhe Region', desc: '7th Place · Excellence Award' },
      { title: 'StepFun Agent Build Nanjing', desc: '1st Prize' },
      { title: 'Douyin AI Innovator Plan Jinling', desc: '1st Prize' },
      { title: 'Nanjing OPC Innovation Competition', desc: '1st Prize' },
      { title: 'Suzhou Jinji Lake OPC Semi-final', desc: 'Entrepreneur' },
      { title: 'Maker China Jiangsu SME Innovation Competition', desc: 'Top 20 Provincial Entrepreneurship Track · Excellence Award' },
    ],
    endorsement: {
      title: "Jiang'an Plan · Youth AI Hackathon (Gulou District Gov)",
      desc: 'Competition Advisor · Gov-level AI Endorsement',
      link: 'https://mp.weixin.qq.com/s/ZRx-b1RV5Cy15TnEZozw4w',
    },
    contactTitle: 'Contact',
    contactDesc: 'If you are interested in my research or projects, feel free to reach out:',
    email: 'qinqiao2014@gmail.com',
    github: 'github.com/qinqiao2014-creator',
    socials: [
      { name: 'Douyin', url: 'https://www.douyin.com/user/MS4wLjABAAAAV92gjs6tGrme_ENgc65WaPEIUWLfqA2KSTJdJxefKSM' },
      { name: 'Xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/5e95c83c00000000010077a5' },
      { name: 'Bilibili', url: 'https://space.bilibili.com/31603890' },
    ],
    skillsTitle: 'The Library of Babel',
    skillsDesc: 'My collection of crafted tools and skills — skills, workflows, and contraptions that put AI to work as an apprentice.',
    skills: [
      { name: 'zhicheng-shenbao-skill', tag: 'Filing Helper', desc: 'End-to-end automation for professional-title declaration & review, from material sorting to submission checklist.', stars: 1, url: 'https://github.com/qinqiao2014-creator/zhicheng-shenbao-skill' },
      { name: 'schedule-onepager-skill', tag: 'Productivity', desc: 'One-page schedule generator that renders HTML straight into your inbox.', stars: 0, url: 'https://github.com/qinqiao2014-creator/schedule-onepager-skill' },
      { name: 'live-class-skill', tag: 'Meeting Notes', desc: '"Attend-for-you" transcription for live classes & meetings, auto-generating minutes.', stars: 1, url: 'https://github.com/qinqiao2014-creator/live-class-skill' },
      { name: 'imgbox-skill', tag: 'Image Gen', desc: 'One-stop hub aggregating multiple image models (including StepFun), with AI matting.', stars: 0, url: 'https://github.com/qinqiao2014-creator/imgbox-skill' },
      { name: 'resume-onepager-skill', tag: 'Resume', desc: 'One-page resume generator exporting A4 PDF / PNG with real text layers.', stars: 0, url: 'https://github.com/qinqiao2014-creator/resume-onepager-skill' },
      { name: 'multi-agent-async-workflow', tag: 'Workflow', desc: 'Multi-agent async collaboration using GitHub Issues as a task bus.', stars: 7, url: 'https://github.com/qinqiao2014-creator/multi-agent-async-workflow' },
      { name: 'agent-usage-skill', tag: 'Usage Monitor', desc: 'Unified local dashboard for multi-Agent Token usage, plugin-based and real-time.', stars: 0, url: 'https://github.com/qinqiao2014-creator/agent-usage-skill' },
      { name: 'form-autofill-skill', tag: 'Form Helper', desc: 'Record once, forms auto-fill — submit always by you.', stars: 0, url: 'https://github.com/qinqiao2014-creator/form-autofill-skill' },
    ],
    gardenTitle: 'Collaborations',
    gardenDesc: "Moves made inside others' mazes — worlds built by others, where I laid a few bricks.",
    gardenKinds: [
      { name: 'Commissioned', desc: 'Systems built for clients' },
      { name: 'Open Source', desc: 'Commits left in public repositories' },
    ],
    gardenItems: [
      'AI Glasses (ROKID) · Canton Fair Guide',
      'Scoliosis Screening System',
      'AgentBehaviorBench Agent Onboarding',
    ],
  },
};

/** 章节标题：衬线体 + 罗马数字章节号，营造「翻书」的叙事感 */
function SectionHeading({
  numeral,
  children,
  className = '',
}: {
  numeral: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`font-serif-lit font-bold text-2xl md:text-3xl text-text-primary flex items-baseline gap-3 ${className}`}>
      <span className="text-[#6cbcb2]/60 text-xl md:text-2xl font-normal tabular-nums shrink-0" aria-hidden="true">
        {numeral}
      </span>
      <span>{children}</span>
    </h2>
  );
}

export function Home() {
  const { lang } = useLang();
  const c = t[lang];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray<HTMLElement>('[data-animate]');
    sections.forEach((section) => {
      gsap.fromTo(section,
        { y: 72, opacity: 0, scale: 0.985 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((container) => {
        const items = Array.from(container.children);
        gsap.fromTo(
          items,
          { y: 48, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: { trigger: container, start: 'top 84%', once: true },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden px-5">
        <div className="absolute inset-0 bg-[radial-gradient(58%_48%_at_26%_34%,rgba(108,188,178,0.16),transparent_70%),linear-gradient(135deg,rgba(67,120,116,0.16),transparent_38%),linear-gradient(180deg,rgba(244,241,232,0.04),transparent_46%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#6cbcb2]/50 to-transparent" />
        <div className="relative max-w-content w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center animate-rise-in">
          <div>
            <p className="font-serif-lit italic text-base md:text-lg text-text-secondary/90 mb-7 leading-relaxed border-l-2 border-[#6cbcb2]/40 pl-4 max-w-xl">
              {c.heroEpigraph}
            </p>
            <div className="inline-flex items-center gap-2 rounded border border-[#6cbcb2]/30 bg-[#6cbcb2]/10 px-3 py-1.5 text-xs text-[#9bd8cf] mb-7">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-noto">{c.heroSubtitle}</span>
            </div>
            <div className="flex items-center gap-5 mb-5">
              <h1 className="font-serif-lit font-bold text-7xl md:text-9xl text-text-primary leading-[1.02] [text-shadow:0_0_60px_rgba(108,188,178,0.30)]">
                {c.heroTitle}
              </h1>
              <img
                src="/avatar.png"
                alt={c.heroTitle}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#6cbcb2]/40 object-cover"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-7">
              {c.socials.map((s) => {
                const iconSrc =
                  s.name === '抖音' || s.name === 'Douyin' ? '/tiktok.svg' :
                  s.name === '小红书' || s.name === 'Xiaohongshu' ? '/xiaohongshu.svg' :
                  '/bilibili.svg';
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-[#9bd8cf] transition-colors duration-200 group"
                    title={s.name}
                  >
                    <img src={iconSrc} alt={s.name} className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="font-noto border-b border-transparent group-hover:border-[#9bd8cf]">{s.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
            <p className="font-noto text-base md:text-lg text-text-secondary leading-relaxed mb-6 max-w-2xl">
              {c.heroDesc}
            </p>
            <div className="flex flex-wrap gap-2 mb-9">
              {c.awards.map((award, i) => {
                const isMakerChina = award.title.includes('创客中国');
                return (
                  <div
                    key={i}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#f4a261]/30 bg-[#f4a261]/8 ${isMakerChina ? 'flex-col items-start gap-0.5' : ''}`}
                  >
                    <span className={`font-noto text-xs text-[#f4a261] font-bold leading-tight ${isMakerChina ? '' : ''}`}>{award.desc}</span>
                    <span className={`font-noto text-xs text-text-secondary leading-tight ${isMakerChina ? '' : ''}`}>{award.title}</span>
                  </div>
                );
              })}
              {c.endorsement.link ? (
                <a
                  href={c.endorsement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#0f8b8d]/30 bg-[#0f8b8d]/8 hover:border-[#0f8b8d]/60 hover:bg-[#0f8b8d]/14 transition-colors duration-200 group"
                >
                  <span className="font-noto text-xs text-[#0f8b8d] font-bold">{c.endorsement.desc}</span>
                  <span className="font-noto text-xs text-text-secondary group-hover:text-text-primary transition-colors">{c.endorsement.title}</span>
                  <ExternalLink className="w-3 h-3 text-[#0f8b8d]" />
                </a>
              ) : (
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#0f8b8d]/30 bg-[#0f8b8d]/8"
                >
                  <span className="font-noto text-xs text-[#0f8b8d] font-bold">{c.endorsement.desc}</span>
                  <span className="font-noto text-xs text-text-secondary">{c.endorsement.title}</span>
                </div>
              )}
            </div>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-5 py-3 rounded border border-[#6cbcb2]/60 bg-[#6cbcb2]/12 text-text-primary hover:bg-[#6cbcb2]/18 hover:border-[#9bd8cf] transition-colors duration-200 cursor-pointer"
            >
              <span className="font-noto text-sm">{c.heroCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="relative flex flex-col">
            <div className="flex items-center justify-between gap-4 mb-5">
              <h2 className="font-serif-lit font-bold text-xl text-text-primary">{c.currentTitle}</h2>
              <span className="h-px flex-1 bg-gradient-to-r from-[#6cbcb2]/60 to-transparent" />
            </div>

            <p className="font-noto text-sm text-text-secondary leading-relaxed mb-5">
              {c.keywordIntro}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {c.keywords.core.map((k) => (
                <span
                  key={k.text}
                  className={`inline-flex items-center rounded border px-3 py-1.5 text-base font-bold transition-all duration-200 hover:-translate-y-0.5 cursor-default ${
                    k.color === 'gold'
                      ? 'border-[#f4a261]/40 bg-[#f4a261]/10 text-[#f4a261] hover:border-[#f4a261]/70'
                      : k.color === 'orange'
                        ? 'border-[#f4a261]/40 bg-[#f4a261]/10 text-[#f4a261] hover:border-[#f4a261]/70'
                        : 'border-[#6cbcb2]/40 bg-[#6cbcb2]/10 text-[#6cbcb2] hover:border-[#6cbcb2]/70'
                  }`}
                >
                  {k.text}
                </span>
              ))}
              {c.keywords.mid.map((k) => (
                <span
                  key={k.text}
                  className={`inline-flex items-center rounded border text-sm px-2.5 py-1 transition-all duration-200 hover:-translate-y-0.5 cursor-default ${
                    k.color === 'gold'
                      ? 'border-[#f4a261]/40 bg-[#f4a261]/10 text-[#f4a261] hover:border-[#f4a261]/70'
                      : 'border-[#6cbcb2]/25 bg-[#6cbcb2]/5 text-[#9bd8cf] hover:border-[#6cbcb2]/50'
                  }`}
                >
                  {k.text}
                </span>
              ))}
              {c.keywords.small.map((k) => (
                <span
                  key={k.text}
                  className="inline-flex items-center rounded border border-border-custom/50 bg-bg-primary/30 text-text-muted text-xs px-2 py-0.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-text-secondary/50 hover:text-text-secondary cursor-default"
                >
                  {k.text}
                </span>
              ))}
            </div>

            <p className="font-noto text-xs text-text-muted italic border-l-2 border-[#6cbcb2]/30 pl-3 leading-relaxed">
              {c.keywordQuote}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section data-animate className="bg-bg-primary/70 py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <SectionHeading numeral="I" className="mb-10">{c.timelineTitle}</SectionHeading>
          <div className="relative rounded border border-border-custom bg-bg-secondary/70 p-5 md:p-8">
            <div className="absolute left-5 md:left-9 top-8 bottom-8 w-px bg-gradient-to-b from-[#6cbcb2] via-border-custom to-transparent" />
            <div className="space-y-8">
              {c.timeline.map((item, i) => (
                <div key={i} className="relative pl-9 md:pl-14">
                  <div className="absolute left-0 md:left-1 top-1.5 w-3 h-3 rounded-full bg-[#6cbcb2] shadow-[0_0_18px_rgba(108,188,178,0.45)]" />
                  <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-2 md:gap-7">
                    <span className="font-inter font-bold text-sm text-[#9bd8cf] block">{item.year}</span>
                    <div>
                    <h3 className="font-noto font-bold text-base text-text-primary mb-2">{item.title}</h3>
                    <p className="font-noto text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section data-animate className="bg-[#101720]/70 py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <SectionHeading numeral="II" className="mb-8">{c.aboutTitle}</SectionHeading>
          <div className="font-noto text-base text-text-primary leading-relaxed space-y-6 border-l border-border-custom pl-6">
            <p dangerouslySetInnerHTML={{ __html: c.aboutIntro.replace(/\n/g, '<br/>') }} />
            <p className="text-text-secondary">{c.aboutGoal}</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" data-animate className="bg-bg-secondary/70 py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <SectionHeading numeral="III" className="mb-2">{c.projectsTitle}</SectionHeading>
          <p className="font-noto text-sm text-text-secondary mb-8">{c.threadDesc}</p>

          {/* Standalone projects — 2×2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-stagger>
            {/* OGCP Card */}
            <Link
              to="/projects/ogcp"
              className="group block min-h-[220px] p-6 border border-border-custom rounded bg-bg-primary hover:border-[#6cbcb2] hover:-translate-y-1 transition-all duration-200"
            >
              <span className="inline-block px-2 py-0.5 rounded text-xs font-noto mb-2 bg-[#5d477f]/10 text-[#5d477f] border border-[#5d477f]/30">
                {c.ogcpCardTag}
              </span>
              <h3 className="font-noto font-bold text-lg text-text-primary mb-2 group-hover:text-text-secondary transition-colors">
                {c.ogcpCardTitle}
              </h3>
              <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4">
                {c.ogcpCardDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-text-muted group-hover:text-text-secondary transition-colors">
                <span className="font-noto">查看详情</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            {/* 2link Card — moved up */}
            <Link
              to="/projects/2link"
              className="group block min-h-[220px] p-6 border border-[#0f8b8d]/30 rounded bg-bg-primary hover:border-[#0f8b8d] hover:-translate-y-1 transition-all duration-200"
            >
              <span className="inline-block px-2 py-0.5 rounded text-xs font-noto mb-2 bg-[#0f8b8d]/10 text-[#0f8b8d] border border-[#0f8b8d]/30">
                {c.twoLinkCardTag}
              </span>
              <h3 className="font-noto font-bold text-lg text-text-primary mb-2 group-hover:text-text-secondary transition-colors">
                {c.twoLinkCardTitle}
              </h3>
              <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4">
                {c.twoLinkCardDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-text-muted group-hover:text-text-secondary transition-colors">
                <span className="font-noto">查看详情</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            {/* WalkingXiuxian Card */}
            <Link
              to="/projects/walking-xiuxian"
              className="group block min-h-[220px] p-6 border border-border-custom rounded bg-bg-primary hover:border-[#6cbcb2] hover:-translate-y-1 transition-all duration-200"
            >
              <span className="inline-block px-2 py-0.5 rounded text-xs font-noto mb-2 bg-[#2a9d8f]/10 text-[#2a9d8f] border border-[#2a9d8f]/30">
                {c.walkingCardTag}
              </span>
              <h3 className="font-noto font-bold text-lg text-text-primary mb-2 group-hover:text-text-secondary transition-colors">
                {c.walkingCardTitle}
              </h3>
              <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4">
                {c.walkingCardDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-text-muted group-hover:text-text-secondary transition-colors">
                <span className="font-noto">查看详情</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            {/* distance Card — moved up */}
            <Link
              to="/projects/distance"
              className="group block min-h-[220px] p-6 border border-[#e9818d]/30 rounded bg-bg-primary hover:border-[#e9818d] hover:-translate-y-1 transition-all duration-200"
            >
              <span className="inline-block px-2 py-0.5 rounded text-xs font-noto mb-2 bg-[#e9818d]/10 text-[#e9818d] border border-[#e9818d]/30">
                {c.distanceCardTag}
              </span>
              <h3 className="font-noto font-bold text-lg text-text-primary mb-2 group-hover:text-text-secondary transition-colors">
                {c.distanceCardTitle}
              </h3>
              <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4">
                {c.distanceCardDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-text-muted group-hover:text-text-secondary transition-colors">
                <span className="font-noto">查看详情</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>

          {/* Evolution thread line — between row 1 and row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-6">
            {c.threadSteps.map((step, i) => (
              <div key={i} className="flex items-center">
                <Link to={step.path} className="flex items-center gap-2 group shrink-0 whitespace-nowrap">
                  <span className={`inline-block w-2.5 h-2.5 rounded-full ${step.color === 'green' ? 'bg-[#6cbcb2]' : step.color === 'orange' ? 'bg-[#f4a261]' : 'bg-[#9bd8cf]'}`} />
                  <span className="font-noto text-xs text-text-muted group-hover:text-text-primary transition-colors">{step.label}</span>
                  <span className="font-noto text-xs font-bold text-text-primary group-hover:text-[#9bd8cf] transition-colors">{step.project}</span>
                </Link>
                {i < c.threadSteps.length - 1 && (
                  <div className="hidden md:flex flex-1 items-center mx-3">
                    <span className="flex-1 h-px bg-border-custom" />
                    <ArrowRight className="w-3 h-3 text-text-muted mx-1 shrink-0" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-stagger>
            {/* Infinite Academy Card */}
            <Link
              to="/projects/infinite-academy"
              className="group block min-h-[220px] p-6 border border-border-custom rounded bg-bg-primary hover:border-[#6cbcb2] hover:-translate-y-1 transition-all duration-200"
            >
              <span className="inline-block px-2 py-0.5 rounded text-xs font-noto mb-2 bg-[#6cbcb2]/10 text-[#6cbcb2] border border-[#6cbcb2]/30">
                {c.academyCardTag}
              </span>
              <h3 className="font-noto font-bold text-lg text-text-primary mb-2 group-hover:text-text-secondary transition-colors">
                {c.academyCardTitle}
              </h3>
              <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4">
                {c.academyCardDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-text-muted group-hover:text-text-secondary transition-colors">
                <span className="font-noto">查看详情</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            {/* Duck Escape Card */}
            <Link
              to="/projects/duck-escape"
              className="group block min-h-[220px] p-6 border border-border-custom rounded bg-bg-primary hover:border-[#6cbcb2] hover:-translate-y-1 transition-all duration-200"
            >
              <span className="inline-block px-2 py-0.5 rounded text-xs font-noto mb-2 bg-[#f4a261]/10 text-[#f4a261] border border-[#f4a261]/30">
                {c.duckEscapeCardTag}
              </span>
              <h3 className="font-noto font-bold text-lg text-text-primary mb-2 group-hover:text-text-secondary transition-colors">
                {c.duckEscapeCardTitle}
              </h3>
              <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4">
                {c.duckEscapeCardDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-text-muted group-hover:text-text-secondary transition-colors">
                <span className="font-noto">查看详情</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            {/* NPC Agent Card */}
            <Link
              to="/projects/npc-agent"
              className="group block min-h-[220px] p-6 border border-border-custom rounded bg-bg-primary hover:border-[#6cbcb2] hover:-translate-y-1 transition-all duration-200"
            >
              <span className="inline-block px-2 py-0.5 rounded text-xs font-noto mb-2 bg-[#9bd8cf]/10 text-[#9bd8cf] border border-[#9bd8cf]/30">
                {c.npcAgentCardTag}
              </span>
              <h3 className="font-noto font-bold text-lg text-text-primary mb-2 group-hover:text-text-secondary transition-colors">
                {c.npcAgentCardTitle}
              </h3>
              <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4">
                {c.npcAgentCardDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-text-muted group-hover:text-text-secondary transition-colors">
                <span className="font-noto">查看详情</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* 巴别图书馆 · 开源 Skill 集合 */}
      <section data-animate className="bg-[#080B10]/70 pt-16 md:pt-24 pb-10 md:pb-14 px-5">
        <div className="max-w-content mx-auto">
          <SectionHeading numeral="IV" className="mb-2">{c.skillsTitle}</SectionHeading>
          <p className="font-noto text-sm text-text-secondary mb-8">{c.skillsDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
            {[...c.skills]
              .map((s) => ({ ...s, stars: resolveStars(s.url, s.stars) }))
              .sort((a, b) => b.stars - a.stars)
              .map((s, i) => (
              <Link
                key={i}
                to="/library-of-babel"
                className="group block min-h-[200px] p-6 border border-border-custom rounded bg-bg-secondary hover:border-[#6cbcb2] hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-noto bg-[#6cbcb2]/10 text-[#6cbcb2] border border-[#6cbcb2]/30">
                    {s.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-noto text-text-muted">
                    <span className="text-[#f4a261]">★</span>
                    <span>{s.stars}</span>
                  </span>
                </div>
                <h3 className="font-noto font-bold text-base md:text-lg text-text-primary mb-2 group-hover:text-text-secondary transition-colors break-all">
                  {s.name}
                </h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4">
                  {s.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-text-muted group-hover:text-text-secondary transition-colors">
                  <span className="font-noto">{lang === 'zh' ? '查看详情' : 'View Details'}</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 合作项目 · 商业委托与开源贡献 */}
      <section data-animate className="bg-[#101720]/70 py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <SectionHeading numeral="V" className="mb-2">{c.gardenTitle}</SectionHeading>
          <p className="font-noto text-sm text-text-secondary mb-8">{c.gardenDesc}</p>
          <Link
            to="/garden-of-forking-paths"
            className="group block border border-border-custom rounded bg-bg-secondary hover:border-[#6cbcb2] transition-colors duration-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 p-6 md:p-8">
              <div>
                <div className="flex flex-col gap-5 mb-6">
                  {c.gardenKinds.map((k) => (
                    <div key={k.name} className="flex gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#6cbcb2] shrink-0" />
                      <div>
                        <h3 className="font-noto font-bold text-base text-text-primary mb-1 group-hover:text-[#9bd8cf] transition-colors">
                          {k.name}
                        </h3>
                        <p className="font-noto text-sm text-text-secondary leading-relaxed">{k.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-text-muted group-hover:text-[#9bd8cf] transition-colors">
                  <span className="font-noto">{lang === 'zh' ? '查看全部' : 'View All'}</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
              <div className="flex flex-col justify-center gap-3 lg:border-l lg:border-border-custom lg:pl-8">
                {c.gardenItems.map((item, i) => (
                  <div key={i} className="flex items-baseline gap-3">
                    <span className="font-inter text-xs text-text-muted tabular-nums shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-noto text-sm text-text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section data-animate className="bg-[#080B10]/70 pt-10 md:pt-14 pb-16 md:pb-24 px-5">
        <div className="max-w-content mx-auto text-center">
          <SectionHeading numeral="VI" className="mb-6 justify-center">{c.contactTitle}</SectionHeading>
          <p className="font-noto text-base text-text-secondary mb-8">{c.contactDesc}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={`mailto:${c.email}`} className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors duration-200 group">
              <Mail className="w-4 h-4" />
              <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">{c.email}</span>
            </a>
            <a href={`https://${c.github}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors duration-200 group">
              <Github className="w-4 h-4" />
              <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">{c.github}</span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-6">
            {c.socials.map((s) => {
              const iconSrc =
                s.name === '抖音' || s.name === 'Douyin' ? '/tiktok.svg' :
                s.name === '小红书' || s.name === 'Xiaohongshu' ? '/xiaohongshu.svg' :
                '/bilibili.svg';
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-[#9bd8cf] transition-colors duration-200 group"
                  title={s.name}
                >
                  <img src={iconSrc} alt={s.name} className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="font-noto border-b border-transparent group-hover:border-[#9bd8cf]">{s.name}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
