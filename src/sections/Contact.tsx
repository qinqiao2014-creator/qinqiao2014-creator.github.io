import { Mail, Github, MessageCircle, Star } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const t = {
  zh: {
    title: '合作 & 贡献',
    ifTitle: '如果你：',
    if: [
      '对OpenGuitarChordProject感兴趣，想贡献代码/数据',
      '在做音频AI/音乐AI相关研究，想交流',
      '想提供建议或反馈',
    ],
    reach: '欢迎通过以下方式联系：',
    followTitle: '想围观项目进展：',
    star: 'Star项目仓库',
    docs: '阅读文档',
    watch: 'Watch项目更新',
  },
  en: {
    title: 'Collaborate & Contribute',
    ifTitle: 'If you:',
    if: [
      'Are interested in OpenGuitarChordProject and want to contribute code or data',
      'Are doing audio AI / music AI research and want to connect',
      'Have suggestions or feedback',
    ],
    reach: 'Feel free to reach out:',
    followTitle: 'Follow the project:',
    star: 'Star the repo',
    docs: 'Read the docs',
    watch: 'Watch for updates',
  },
};

export function Contact() {
  const { lang } = useLang();
  const c = t[lang];

  return (
    <section id="contact" className="bg-bg-primary py-16 md:py-24 px-5">
      <div className="max-w-content mx-auto">
        <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-8 text-center">{c.title}</h2>
        <div className="font-noto text-base text-text-primary leading-relaxed space-y-6 rounded border border-border-custom bg-bg-secondary/70 p-5 md:p-8">
          <div>
            <h3 className="font-bold text-text-primary mb-3">{c.ifTitle}</h3>
            <ul className="space-y-2">
              {c.if.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-text-secondary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-text-secondary">{c.reach}</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6 py-4">
            <a href="mailto:qinqiao2014@gmail.com" className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors duration-200 group">
              <Mail className="w-4 h-4" />
              <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">qinqiao2014@gmail.com</span>
            </a>
            <a href="https://github.com/qinqiao2014-creator" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors duration-200 group">
              <Github className="w-4 h-4" />
              <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">github.com/qinqiao2014-creator</span>
            </a>
            <a href="https://github.com/qinqiao2014-creator/ogcp-pilot/discussions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors duration-200 group">
              <MessageCircle className="w-4 h-4" />
              <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">GitHub Discussions</span>
            </a>
          </div>
          <div>
            <h3 className="font-bold text-text-primary mb-4">{c.followTitle}</h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6">
              <a href="https://github.com/qinqiao2014-creator/ogcp-pilot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-text-secondary hover:text-[#9bd8cf] transition-colors duration-200">
                <Star className="w-4 h-4" />
                <span className="font-noto text-sm">{c.star}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
