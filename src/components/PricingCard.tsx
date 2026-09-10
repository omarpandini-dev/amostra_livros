import { ArrowRight } from 'lucide-react';
import type { PricingProduct } from '@/types';
import { PricingFeatures } from './PricingFeatures';

interface PricingCardProps {
  product: PricingProduct;
  currency: string;
  locale: string;
}

export function PricingCard({ product, currency, locale }: PricingCardProps) {
  const formattedPrice = product.price === null
    ? null
    : new Intl.NumberFormat(locale, { style: 'currency', currency }).format(product.price);

  function selectProduct() {
    window.dispatchEvent(new CustomEvent('pricing:select-product', { detail: { productId: product.id } }));
  }

  return (
    <article className={`pricing-card${product.featured ? ' is-featured' : ''}`}>
      {product.badge && <span className="pricing-badge">{product.badge}</span>}
      <div className="pricing-card-heading">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <div className="pricing-price" aria-label={`${product.pricePrefix} ${formattedPrice ?? ''}`.trim()}>
        {product.pricePrefix && <span>{product.pricePrefix}</span>}
        <strong>{formattedPrice ?? 'Sob consulta'}</strong>
        {product.priceSuffix && <small>{product.priceSuffix}</small>}
      </div>
      <PricingFeatures features={product.features} />
      {product.shipping && <p className="pricing-shipping">{product.shipping.shortMessage}</p>}
      {product.priceNotice && <p className="pricing-notice">{product.priceNotice}</p>}
      <button className="pricing-cta" type="button" data-product-id={product.id} onClick={selectProduct}>
        {product.cta.label}<ArrowRight aria-hidden="true" />
      </button>
    </article>
  );
}

