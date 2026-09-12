import { ArrowRight, ArrowUpRight, Layers, Stethoscope } from 'lucide-react';
import { productCollection } from '../../data/products';
import { SiteLink, primaryProductLinkClass, productLinkClass } from './SiteLink';

export function ProductCollection({ isDark, onNavigate, compact = false }: {
  isDark: boolean; onNavigate: (page: string) => void; compact?: boolean;
}) {
  const Heading = compact ? 'h3' : 'h2';
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {productCollection.map((product) => (
        <article key={product.id} aria-labelledby={`${product.id}-heading`} className={`min-w-0 flex flex-col rounded-3xl border p-6 sm:p-8 lg:p-10 ${isDark ? 'border-white/15 bg-white/[0.03]' : 'border-gray-200 bg-white'}`}>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <span className="p-3 rounded-xl bg-sky-600/10 text-sky-800 dark:text-sky-400" aria-hidden="true">
              {product.routeType === 'external' ? <Layers size={24} /> : <Stethoscope size={24} />}
            </span>
            <span className="rounded-full border border-sky-600/30 px-3 py-1 text-sm text-sky-800 dark:text-sky-300">{product.status}</span>
          </div>
          <p className="text-sm text-sky-800 dark:text-sky-300 mb-3">{product.category}</p>
          <Heading id={`${product.id}-heading`} className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">{product.name}</Heading>
          {product.workingName && <p className="text-sm opacity-75 mb-3">Working name</p>}
          <p className="opacity-80 leading-relaxed mb-6">{product.description}</p>
          {!compact && <ul className="space-y-3 mb-8 list-disc pl-5 opacity-80">{product.features.map(feature => <li key={feature}>{feature}</li>)}</ul>}
          <div className="mt-auto flex flex-wrap gap-3">
            {product.routeType === 'external' ? <>
              <a href={product.url} target="_blank" rel="noopener noreferrer" className={primaryProductLinkClass}>
                Visit {product.name}<ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
              </a>
              {!compact && <a href={product.betaUrl} target="_blank" rel="noopener noreferrer" className={productLinkClass}>Join the beta<span className="sr-only"> (opens in a new tab)</span></a>}
            </> : <SiteLink href={product.url} onNavigate={onNavigate} className={primaryProductLinkClass}>Explore {product.name}<ArrowRight size={18} aria-hidden="true" /></SiteLink>}
          </div>
        </article>
      ))}
    </div>
  );
}
