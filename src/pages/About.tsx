import { BookHeart, MonitorPlay, PackageOpen, PenLine, Sparkles, WandSparkles } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const steps = [
  { icon: PenLine, title: 'Uma história única', text: 'Cada aventura é pensada para transformar ideias, pessoas e momentos especiais em uma narrativa feita para guardar.' },
  { icon: WandSparkles, title: 'Ilustração e encanto', text: 'A história ganha capa, páginas ilustradas e detalhes que convidam crianças e famílias a mergulhar na imaginação.' },
  { icon: PackageOpen, title: 'Do seu jeito', text: 'Escolha entre a experiência digital, a narração integrada ou uma edição impressa para presentear e reler.' },
];

export function About() {
  return <div className="site-shell"><Header /><main className="about-page">
    <section className="about-hero" aria-labelledby="about-title"><div className="about-orbit" aria-hidden="true"><i /><i /><i /></div><p className="about-eyebrow"><Sparkles /> Sobre o Mundo Encantado</p><h1 id="about-title">Histórias que<br /><em>ficam para sempre.</em></h1><p>O Mundo Encantado transforma imaginação em livros personalizados, ilustrados para emocionar, divertir e criar memórias em família.</p></section>
    <section className="about-intro" aria-label="Nossa proposta"><div className="about-icon"><BookHeart /></div><div><span>Feito para imaginar junto</span><h2>Mais do que um livro: uma lembrança para revisitar.</h2><p>As histórias podem ser vividas no leitor digital, com páginas que viram como um livro de verdade, e também ganhar narração ou uma edição impressa. A ideia é simples: fazer cada leitura parecer uma nova descoberta.</p></div></section>
    <section className="about-steps" aria-labelledby="how-title"><div className="about-section-heading"><span>Como nasce uma aventura</span><h2 id="how-title">Da ideia até a estante</h2></div><div className="about-step-grid">{steps.map(({ icon: Icon, title, text }, index) => <article className="about-step" key={title}><span className="step-number">0{index + 1}</span><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="about-formats" aria-labelledby="formats-title"><div><p className="about-eyebrow"><MonitorPlay /> Para cada jeito de ler</p><h2 id="formats-title">Uma história, diferentes experiências.</h2></div><p>Você pode escolher o livro digital interativo, a versão com narração para acompanhar cada página ou o livro físico para ter essa aventura sempre por perto.</p></section>
  </main><Footer /></div>;
}
