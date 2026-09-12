import { useEffect } from 'react';
import { getPageMetadata } from '../data/seo';

export function PageMetadata({ path }: { path: string }) {
  useEffect(() => {
    const metadata = getPageMetadata(path);
    document.title = metadata.title;
    const setMeta = (attribute: 'name' | 'property', key: string, value: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = value;
    };
    setMeta('name', 'description', metadata.description);
    setMeta('name', 'robots', metadata.robots);
    setMeta('property', 'og:title', metadata.title);
    setMeta('property', 'og:description', metadata.description);
    setMeta('property', 'og:url', metadata.canonical);
    setMeta('name', 'twitter:title', metadata.title);
    setMeta('name', 'twitter:description', metadata.description);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = metadata.canonical;
    let schema = document.getElementById('site-schema');
    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'site-schema';
      schema.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(metadata.structuredData);
  }, [path]);
  return null;
}
