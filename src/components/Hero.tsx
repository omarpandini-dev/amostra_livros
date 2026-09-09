import { ArrowDown, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="sky" aria-hidden="true"><span /><span /><span /><span /><span /></div>
      <div className="hero-copy">
        <p className="eyebrow"><Sparkles /> Biblioteca de grandes aventuras</p>
        <h1 id="hero-title">Mundo<br /><em>Encantado</em></h1>
        <p>Toda história abre uma nova aventura.</p>
        <a className="primary-action" href="#acervo">Começar a explorar <ArrowDown /></a>
      </div>
      <div className="hero-book" aria-hidden="true">
        <div className="book-glow" />
        <BookScene />
      </div>
    </section>
  );
}

function BookScene() {
  return <div className="magic-book"><div className="book-page left"><span>✦</span></div><div className="book-spine" /><div className="book-page right"><span>☾</span></div></div>;
}
