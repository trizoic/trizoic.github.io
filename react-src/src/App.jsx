import { motion, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';
import Particles from './components/Particles.jsx';
import BlurText from './components/BlurText.jsx';
import SpotlightCard from './components/SpotlightCard.jsx';
import ShinyText from './components/ShinyText.jsx';

const principles = [
  { number: '01', title: 'Visual systems', text: 'Typography, color, and space working as one clear system—not a collection of isolated moments.', accent: '#6fffd3' },
  { number: '02', title: 'Interaction logic', text: 'Motion that explains state, responds to intent, and knows when to become quiet.', accent: '#a78bfa' },
  { number: '03', title: 'Fast by default', text: 'Deliberate dependencies and lean assets, so the experience feels immediate from the first visit.', accent: '#ff78b7' }
];

const PARTICLE_COLORS = ['#ffffff', '#6fffd3', '#a78bfa'];

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
      <a className="skip-link" href="#content">Skip to content</a>

      <header className="react-nav">
        <a className="react-brand" href="#top" aria-label="React edition home">
          <span className="brand-glyph">T</span><span>trizoic</span><small>/react</small>
        </a>
        <nav aria-label="React edition navigation">
          <a href="#approach">Approach</a><a href="#project">Work</a><a href="#contact">Contact</a>
        </nav>
        <MagneticLink href="/" className="classic-link">Classic <span>↗</span></MagneticLink>
      </header>

      <main id="content">
        <section className="react-hero" id="top">
          <div className="hero-particles">
            <Particles particleCount={220} particleSpread={12} speed={0.085} particleColors={PARTICLE_COLORS}
              moveParticlesOnHover particleHoverFactor={1.35} alphaParticles particleBaseSize={115}
              sizeRandomness={1.25} cameraDistance={20} pixelRatio={1} />
          </div>
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-topline">
            <ShinyText text="React edition · 2026" />
            <span className="availability"><i /> Open to ideas</span>
          </div>
          <div className="hero-center">
            <p className="hero-kicker"><span>New</span> React edition v2</p>
            <BlurText text="INTERFACES THAT MOVE WITH INTENTION" as="h1" className="react-title" />
            <motion.p className="react-intro" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7, duration: .7 }}>
              Engineering discipline meets visual instinct.<br />A personal web experiment designed to feel alive, clear, and considered.
            </motion.p>
            <motion.div className="hero-cta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
              <MagneticLink href="#project" className="primary-orb"><span>Explore work</span><b>↓</b></MagneticLink>
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
            Great interfaces need<br />fewer effects—and<br /><em>stronger reasons.</em>
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

        <section className="ticker" aria-label="Technology keywords">
          <div className="ticker-track">
            <span>REACT</span><i>✦</i><span>INTERACTION</span><i>✦</i><span>WEBGL</span><i>✦</i><span>ACCESSIBILITY</span><i>✦</i><span>PERFORMANCE</span><i>✦</i>
            <span aria-hidden="true">REACT</span><i aria-hidden="true">✦</i><span aria-hidden="true">INTERACTION</span><i aria-hidden="true">✦</i><span aria-hidden="true">WEBGL</span><i aria-hidden="true">✦</i><span aria-hidden="true">ACCESSIBILITY</span><i aria-hidden="true">✦</i><span aria-hidden="true">PERFORMANCE</span><i aria-hidden="true">✦</i>
          </div>
        </section>

        <section className="project-section" id="project">
          <div className="section-label"><span>03</span> Selected build</div>
          <div className="project-layout">
            <div className="project-copy">
              <ShinyText text="Live · GitHub Pages" />
              <h2>Two modes.<br /><em>One identity.</em></h2>
              <p>Two expressions under one domain. The classic edition is restrained and direct; this React edition is kinetic and exploratory. Shared intent, distinct rhythm.</p>
              <div className="project-actions">
                <MagneticLink href="https://github.com/trizoic/trizoic.github.io" external className="project-button">View source <span>↗</span></MagneticLink>
                <a href="/">Visit classic</a>
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
