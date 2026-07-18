import { motion, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';
import Aurora from './components/Aurora.jsx';
import BlurText from './components/BlurText.jsx';
import SpotlightCard from './components/SpotlightCard.jsx';
import ShinyText from './components/ShinyText.jsx';

const principles = [
  { number: '01', title: 'Visual systems', text: '让排版、颜色和空间形成清晰秩序，而不是只追求一张好看的截图。', accent: '#6fffd3' },
  { number: '02', title: 'Interaction logic', text: '动效解释状态、回应操作，并在恰当的时候安静下来。', accent: '#a78bfa' },
  { number: '03', title: 'Fast by default', text: '控制依赖与资源体积，让体验从第一次加载就保持轻快。', accent: '#ff78b7' }
];

function MagneticLink({ href, children, external = false, className = '' }) {
  const ref = useRef(null);
  const move = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.16}px, ${y * 0.16}px)`;
  };
  const reset = () => { ref.current.style.transform = 'translate(0, 0)'; };
  return (
    <a ref={ref} className={`magnetic-link ${className}`} href={href} onPointerMove={move} onPointerLeave={reset}
      target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
      {children}
    </a>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.25 });

  return (
    <div className="app-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <a className="skip-link" href="#content">跳到主要内容</a>

      <header className="react-nav">
        <a className="react-brand" href="#top" aria-label="返回 React 版本首页">
          <span className="brand-glyph">T</span><span>trizoic</span><small>/react</small>
        </a>
        <nav aria-label="React 版本导航">
          <a href="#approach">方法</a><a href="#project">项目</a><a href="#contact">联系</a>
        </nav>
        <MagneticLink href="/" className="classic-link">经典版 <span>↗</span></MagneticLink>
      </header>

      <main id="content">
        <section className="react-hero" id="top">
          <div className="hero-aurora"><Aurora /></div>
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-topline">
            <ShinyText text="React edition · 2026" />
            <span className="availability"><i /> Open to ideas</span>
          </div>
          <div className="hero-center">
            <p className="hero-kicker">Designing in the space between</p>
            <BlurText text="CODE MOTION CLARITY" as="h1" className="react-title" />
            <motion.p className="react-intro" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7, duration: .7 }}>
              把工程的可靠与视觉的情绪放在同一个界面里。<br />这是一个更大胆、更有动态感的个人主页实验。
            </motion.p>
            <motion.div className="hero-cta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
              <MagneticLink href="#project" className="primary-orb"><span>探索页面</span><b>↓</b></MagneticLink>
              <a className="quiet-link" href="https://github.com/trizoic" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            </motion.div>
          </div>
          <div className="hero-axis axis-one" aria-hidden="true">X / 774362</div>
          <div className="hero-axis axis-two" aria-hidden="true">Y / INTERFACE</div>
          <div className="scroll-cue" aria-hidden="true"><span>Scroll</span><i /></div>
        </section>

        <section className="manifesto" id="approach">
          <div className="section-label"><span>01</span> Approach</div>
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .8 }}>
            好的界面不是更多效果，<br />而是每个元素都知道<br /><em>为什么存在。</em>
          </motion.p>
        </section>

        <section className="principle-section">
          <div className="section-label"><span>02</span> Principles</div>
          <div className="principle-grid">
            {principles.map((item, index) => (
              <motion.div key={item.number} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: index * .1, duration: .65 }}>
                <SpotlightCard spotlightColor={`${item.accent}2b`}>
                  <div className="card-index" style={{ color: item.accent }}>{item.number}</div>
                  <div className="card-orbit" style={{ '--card-accent': item.accent }} aria-hidden="true"><i /><i /><i /></div>
                  <h2>{item.title}</h2><p>{item.text}</p><span className="card-arrow">↗</span>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="ticker" aria-label="技术关键词">
          <div className="ticker-track">
            <span>REACT</span><i>✦</i><span>INTERACTION</span><i>✦</i><span>WEBGL</span><i>✦</i><span>ACCESSIBILITY</span><i>✦</i><span>PERFORMANCE</span><i>✦</i>
            <span aria-hidden="true">REACT</span><i aria-hidden="true">✦</i><span aria-hidden="true">INTERACTION</span><i aria-hidden="true">✦</i><span aria-hidden="true">WEBGL</span><i aria-hidden="true">✦</i><span aria-hidden="true">ACCESSIBILITY</span><i aria-hidden="true">✦</i><span aria-hidden="true">PERFORMANCE</span><i aria-hidden="true">✦</i>
          </div>
        </section>

        <section className="project-section" id="project">
          <div className="section-label light"><span>03</span> Selected build</div>
          <div className="project-layout">
            <div className="project-copy">
              <ShinyText text="Live · GitHub Pages" />
              <h2>Two modes.<br /><em>One identity.</em></h2>
              <p>同一个域名下的两种表达：经典版克制、清晰；React 版更具动势与实验感。它们共享真实内容，但拥有不同的视觉节奏。</p>
              <div className="project-actions">
                <MagneticLink href="https://github.com/trizoic/trizoic.github.io" external className="project-button">查看源码 <span>↗</span></MagneticLink>
                <a href="/">访问经典版</a>
              </div>
            </div>
            <motion.div className="interface-window" initial={{ opacity: 0, rotate: 2, y: 30 }} whileInView={{ opacity: 1, rotate: 0, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .9 }}>
              <div className="window-chrome"><i /><i /><i /><span>www.774362.xyz/react/</span></div>
              <div className="window-body">
                <div className="mini-nav"><b>T</b><span>EXPERIMENT / 02</span></div>
                <div className="mini-copy"><small>BUILDING DIGITAL</small><strong>QUIET<br />FUTURES.</strong></div>
                <div className="mini-glow" /><div className="mini-grid" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-halo" aria-hidden="true" />
          <ShinyText text="Have something in mind?" />
          <h2>Let’s make<br /><em>something felt.</em></h2>
          <MagneticLink href="mailto:2733909678@qq.com" className="mail-link">2733909678@qq.com <span>↗</span></MagneticLink>
        </section>
      </main>

      <footer className="react-footer">
        <div><span className="brand-glyph small">T</span><span>© {new Date().getFullYear()} trizoic</span></div>
        <p>Motion components adapted from <a href="https://reactbits.dev" target="_blank" rel="noreferrer">React Bits ↗</a></p>
        <div><a href="/">Classic</a><a href="https://github.com/trizoic" target="_blank" rel="noreferrer">GitHub</a><a href="#top">Top ↑</a></div>
      </footer>
    </div>
  );
}

export default App;

