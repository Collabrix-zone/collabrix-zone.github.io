import { test, expect } from '@playwright/test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { products } from '../src/data/products';
import { getPageMetadata } from '../src/data/seo';
import { createServer } from 'vite';

test('a central display-name change updates cards, detail, breadcrumb, CTAs and SEO without changing the route', async () => {
  const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
  const { products: renderedProducts } = await server.ssrLoadModule('/src/data/products.ts');
  const { ProductCollection } = await server.ssrLoadModule('/src/components/website/ProductCollection.tsx');
  const { ClinicPlatformPage } = await server.ssrLoadModule('/src/components/website/ClinicPlatformPage.tsx');
  const product = products.clinicPlatform;
  const originalName = product.name;
  const originalRoute = product.route;
  const name = 'Future Clinic Brand';
  try {
    Object.defineProperty(product, 'name', { value: name, configurable: true });
    Object.defineProperty(renderedProducts.clinicPlatform, 'name', { value: name, configurable: true });
    const metadata = getPageMetadata(originalRoute);
    expect(metadata.title).toContain(name);
    expect(metadata.description).toContain(name);
    expect(JSON.stringify(metadata.structuredData)).toContain(name);
    expect(JSON.stringify(metadata)).not.toContain(originalName);
    expect(metadata.canonical).toBe(`https://thecollabrix.com${originalRoute}`);
    for (const compact of [false, true]) {
      const cards = renderToStaticMarkup(createElement(ProductCollection, { isDark: false, onNavigate: () => {}, compact }));
      expect(cards).toContain(`Explore ${name}`);
      expect(cards).not.toContain(originalName);
      expect(cards).toContain(originalRoute);
    }
    const detail = renderToStaticMarkup(createElement(ClinicPlatformPage, { isDark: false, onNavigate: () => {} }));
    expect(detail).toContain(name);
    expect(detail).toContain(`aria-current="page">${name}`);
    expect(detail).not.toContain(originalName);
  } finally {
    Object.defineProperty(product, 'name', { value: originalName, configurable: true });
    await server.close();
  }
});
