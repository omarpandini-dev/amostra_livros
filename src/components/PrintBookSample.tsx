import { PlayCircle, Sparkles } from 'lucide-react';

export function PrintBookSample() {
  return (
    <section className="print-book-sample" aria-labelledby="print-book-title">
      <div className="print-book-copy">
        <p className="section-eyebrow"><Sparkles /> Um toque de magia no papel</p>
        <h2 id="print-book-title">Amostra de Livro Impresso</h2>
        <p>Veja de perto o carinho em cada página: uma história pronta para ganhar vida fora da tela.</p>
      </div>
      <div className="print-book-video-wrap">
        <video className="print-book-video" controls preload="metadata" aria-label="Vídeo demonstrativo de um livro impresso">
          <source src="/assets/videos/video_livro.mp4" type="video/mp4" />
          Seu navegador não oferece suporte à reprodução de vídeo.
        </video>
        <span className="video-hint"><PlayCircle /> Aperte play para assistir</span>
      </div>
    </section>
  );
}
