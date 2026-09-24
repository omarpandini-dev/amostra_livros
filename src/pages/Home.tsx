import { ContentCarousel } from '@/components/ContentCarousel';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CatalogSkeleton } from '@/components/Loading';
import { PricingSection } from '@/components/PricingSection';
import { PrintBookSample } from '@/components/PrintBookSample';
import { useContentList } from '@/hooks/useContent';

export function Home() {
  const books = useContentList('book');
  const comics = useContentList('comic');

  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <div id="acervo" className="catalog-wrap">
          {books.loading ? <CatalogLoading title="Amostras de Livros Mágicos" /> : <ContentCarousel title="Amostras de Livros Mágicos" eyebrow="Conheça nosso trabalho" items={books.items} emptyMessage="Nenhuma amostra de livro chegou por aqui ainda. ✨" />}
          {comics.loading ? <CatalogLoading title="Amostras de Histórias em Quadrinhos" /> : <ContentCarousel title="Amostras de Histórias em Quadrinhos" eyebrow="Conheça nosso trabalho" items={comics.items} emptyMessage="Novas amostras em quadrinhos estão chegando! ✨" />}
          <PrintBookSample />
          {(books.error || comics.error) && <p className="error-banner">Uma parte do acervo não pôde ser carregada. Atualize a página para tentar novamente.</p>}
          <PricingSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function CatalogLoading({ title }: { title: string }) {
  return <section className="catalog-section"><div className="section-heading"><span>Organizando a estante</span><h2>{title}</h2></div><CatalogSkeleton /></section>;
}
