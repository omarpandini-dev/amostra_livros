import { ArrowLeft, BookOpen, Library, RotateCcw, Sparkles, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  onRestart: () => void;
  onPrevious: () => void;
  onClose: () => void;
}

export function EndAdventure({ onRestart, onPrevious, onClose }: Props) {
  return (
    <div className="end-adventure" role="dialog" aria-modal="true" aria-labelledby="end-adventure-title">
      <div className="end-stars" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <button className="close-end-adventure" onClick={onClose} aria-label="Voltar para a última página"><X /></button>
      <div className="end-portal" aria-hidden="true"><span>✦</span><i /><b /></div>
      <p className="end-kicker"><Sparkles /> Missão concluída</p>
      <h2 id="end-adventure-title">Fim da aventura</h2>
      <p className="end-message">Você atravessou cada página e deixou uma nova estrela brilhando neste mundo.</p>
      <div className="end-actions">
        <button onClick={onRestart}><RotateCcw />Ler novamente</button>
        <button className="secondary-end-action" onClick={onPrevious}><ArrowLeft />Voltar uma página</button>
        <Link to="/"><BookOpen />Mundo Encantado</Link>
        <Link to="/books"><Library />Escolher outra história</Link>
      </div>
    </div>
  );
}
