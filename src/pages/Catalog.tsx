import { ContentCarousel } from '@/components/ContentCarousel';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { CatalogSkeleton } from '@/components/Loading';
import { useContentList } from '@/hooks/useContent';
import type { ContentKind } from '@/types';
import { readProgress } from '@/utils/storage';

export function Catalog({ kind }: { kind: ContentKind }) {
  const { items, loading, error } = useContentList(kind);
  const isBook = kind === 'book';
  return <div className="site-shell"><Header /><main className="catalog-page"><div className="catalog-intro"><span>{isBook ? 'Abra um livro. Abra um mundo.' : 'Balões, cores e grandes missões.'}</span><h1>{isBook ? 'Livros Mágicos' : 'Histórias em Quadrinhos'}</h1><p>{isBook ? 'Escolha sua próxima história e deixe a imaginação conduzir o caminho.' : 'Aventuras ilustradas para ler, rir e desvendar quadro a quadro.'}</p></div>
    {loading ? <CatalogSkeleton /> : error ? <div className="error-banner">{error}</div> : <ContentCarousel title={isBook ? 'Todos os livros' : 'Todos os quadrinhos'} items={items} progress={readProgress()} emptyMessage={isBook ? 'Nenhum livro encantado chegou por aqui ainda. ✨' : 'Novas aventuras em quadrinhos estão chegando! ✨'} />}
  </main><Footer /></div>;
}
