import { ProductCollection } from './ProductCollection';

export function ProductsPage({ isDark, onNavigate }: { isDark: boolean; onNavigate: (page: string) => void }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-20 sm:pb-28" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase opacity-75 mb-4">Our Products</p>
        <h1 id="products-heading" className="tracking-tight leading-tight mb-6" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>Software built by Collabrix.</h1>
        <p className="text-base sm:text-lg opacity-80 max-w-2xl leading-relaxed mb-12">Alongside our product, design and talent services, Collabrix Zone develops proprietary software products addressing real operational problems.</p>
        <ProductCollection isDark={isDark} onNavigate={onNavigate} />
      </div>
    </section>
  );
}
