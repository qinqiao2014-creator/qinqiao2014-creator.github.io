import { Github, ExternalLink } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const t = {
  zh: {
    title: '关于这个项目',
    intro: 'OpenGuitarChordProject 是一个开源的吉他和弦识别项目。',
    goalsTitle: '目标：',
    goals: [
      '从音频文件中自动识别吉他和弦',
      '生成标准六线谱',
      '填补开源领域的空白',
    ],
    roadmapTitle: '技术路线：',
    roadmap: [
      'Phase 1: 和弦识别（进行中）— Pilot v1.1.0 已发布',
      'Phase 2: 和弦进行/和弦转换识别',
      'Phase 3: 完整六线谱生成',
    ],
    statusTitle: '当前状态：',
    status: [
      'Pilot v1.0 数据集：660样本，14类和弦（自然大/小三和弦）',
      'Pilot v1.1.0 更新：新增强力五和弦（A5、B5、C5、D5、E5、F5、G5），总样本扩充至 996',
      '和弦种类扩展：增减三和弦、七和弦家族、九/十一/十三和弦、挂留和弦、加音和弦、六和弦、变化和弦、转位与多把位、全部升降调...',
      '采样扩展：加入木吉他麦克风采样、电吉他采样——目标是用任何吉他、在任何环境下都能准确识别',
      'GitHub：代码 + JAMS标注',
      'Hugging Face：音频数据集',
    ],
    github: 'GitHub仓库',
    hf: '🤗 Hugging Face数据集',
  },
  en: {
    title: 'About This Project',
    intro: 'OpenGuitarChordProject is an open-source guitar chord recognition project.',
    goalsTitle: 'Goals:',
    goals: [
      'Automatically recognize guitar chords from audio',
      'Generate standard guitar tablature',
      'Fill the gap in the open-source music AI space',
    ],
    roadmapTitle: 'Technical Roadmap:',
    roadmap: [
      'Phase 1: Chord recognition (in progress) — Pilot v1.1.0 released',
      'Phase 2: Chord progression / transition recognition',
      'Phase 3: Full tablature generation',
    ],
    statusTitle: 'Current Status:',
    status: [
      'Pilot v1.0 dataset: 660 samples, 14 chord classes (natural major/minor triads)',
      'Pilot v1.1.0 update: Added 7 power 5th-position chords (A5, B5, C5, D5, E5, F5, G5) — total samples expanded to 996',
      'Planned expansion: dim/aug triads, 7th chord family, 9th/11th/13th chords, sus chords, add chords, 6th chords, altered chords, inversions, all sharps/flats...',
      'Recording expansion: acoustic guitar mic recordings, electric guitar recordings — goal is accurate recognition on any guitar in any environment',
      'GitHub: code + JAMS annotations',
      'Hugging Face: audio dataset',
    ],
    github: 'GitHub Repo',
    hf: '🤗 Hugging Face Dataset',
  },
};

export function ProjectOverview() {
  const { lang } = useLang();
  const c = t[lang];

  return (
    <section id="project" className="bg-bg-secondary py-16 md:py-24 px-5">
      <div className="max-w-content mx-auto">
        <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-8">
          {c.title}
        </h2>
        <div className="font-noto text-base text-text-primary leading-relaxed space-y-6 rounded border border-border-custom bg-bg-primary/70 p-5 md:p-8">
          <p>{c.intro}</p>
          <div>
            <h3 className="font-bold text-text-primary mb-3">{c.goalsTitle}</h3>
            <ul className="space-y-2">
              {c.goals.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-text-secondary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-text-primary mb-3">{c.roadmapTitle}</h3>
            <ul className="space-y-2">
              {c.roadmap.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-text-secondary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-text-primary mb-3">{c.statusTitle}</h3>
            <ul className="space-y-2">
              {c.status.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-text-secondary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
          <a
            href="https://github.com/qinqiao2014-creator/ogcp-pilot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-border-custom px-4 py-2.5 text-text-primary hover:border-[#9bd8cf] hover:text-[#9bd8cf] transition-colors duration-200 group"
          >
            <Github className="w-4 h-4" />
            <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">
              {c.github}
            </span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://huggingface.co/datasets/Zaosusu/ogcp-pilot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-border-custom px-4 py-2.5 text-text-primary hover:border-[#9bd8cf] hover:text-[#9bd8cf] transition-colors duration-200 group"
          >
            <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">
              {c.hf}
            </span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </section>
  );
}
