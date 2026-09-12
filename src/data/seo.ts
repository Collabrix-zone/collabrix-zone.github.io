import { products } from './products';

export const siteUrl = 'https://thecollabrix.com';
export const companyDescription = 'Collabrix Zone Private Limited develops proprietary software products and provides product, UX and talent expertise.';
export const staticRoutes = ['/', '/about', '/design', '/talent', '/products', products.clinicPlatform.route, '/contact', '/work', '/privacy', '/terms'];

export function getPageMetadata(path: string) {
  const route = path.replace(/\/$/, '') || '/';
  const product = products.clinicPlatform;
  const pages: Record<string, { title: string; description: string }> = {
    '/': { title: 'Collabrix Zone | Digital Products, Product Design & Talent', description: companyDescription },
    '/home': { title: 'Collabrix Zone | Digital Products, Product Design & Talent', description: companyDescription },
    '/about': { title: 'About Collabrix Zone | Products, Design & Talent', description: companyDescription },
    '/products': { title: 'Software Products | Collabrix Zone', description: `Explore ${products.memoryOS.name} and ${product.name}, proprietary software products developed by Collabrix Zone alongside product, design and talent services.` },
    [product.route]: { title: `${product.name} | Clinic Operations Platform by Collabrix Zone`, description: `${product.name} is a clinic operations platform being developed by ${product.company} for independent clinics and medical practices.` },
    '/design': { title: 'Product & UX Design Services | Collabrix Zone', description: 'Explore product, UX/UI and design services from Collabrix Zone.' },
    '/talent': { title: 'Talent & Recruitment Services | Collabrix Zone', description: 'Explore talent acquisition, recruitment and team-building services from Collabrix Zone.' },
    '/contact': { title: 'Contact Collabrix Zone | Products & Services', description: 'Contact Collabrix Zone about our software products, private beta, product design or talent services.' },
    '/work': { title: 'Our Work | Collabrix Zone', description: 'Explore product design and talent projects from Collabrix Zone.' },
    '/privacy': { title: 'Privacy Policy | Collabrix Zone', description: 'Read the Collabrix Zone privacy policy.' },
    '/terms': { title: 'Terms of Service | Collabrix Zone', description: 'Read the Collabrix Zone terms of service.' },
  };
  const organization = {
    '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Collabrix Zone Private Limited',
    url: siteUrl, description: companyDescription, email: 'hello@thecollabrix.com',
    sameAs: ['https://www.linkedin.com/company/collabrix-zone-pvt-ltd/'],
    hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Services', itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product / UX / Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Talent / Recruitment' } },
    ] },
  };
  const graph: object[] = [organization];
  if (route === product.route) {
    graph.push({
      '@type': 'SoftwareApplication', '@id': `${siteUrl}${product.route}#software`, name: product.name,
      url: `${siteUrl}${product.route}`, description: pages[product.route].description,
      applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
      creator: { '@id': organization['@id'] }, provider: { '@id': organization['@id'] },
    });
    graph.push({ '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${siteUrl}/products` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `${siteUrl}${product.route}` },
    ] });
  }
  const known = Boolean(pages[route]) || route.startsWith('/work/');
  return {
    ...(pages[route] ?? { title: route.startsWith('/work/') ? 'Case Study | Collabrix Zone' : 'Page Not Found | Collabrix Zone', description: companyDescription }),
    canonical: `${siteUrl}${route === '/home' ? '/' : route}`,
    robots: known ? 'index, follow' : 'noindex, follow',
    structuredData: { '@context': 'https://schema.org', '@graph': graph },
  };
}
