import { test, expect } from '@playwright/test';
import { products } from '../src/data/products';
import { getPageMetadata, staticRoutes } from '../src/data/seo';
import { readFileSync } from 'node:fs';

const product = products.clinicPlatform;
// Analytics is outside the site behavior under test and must not receive test traffic.
test.beforeEach(async ({ page }) => {
  await page.route('**/www.googletagmanager.com/**', route => route.abort());
  await page.route('**/www.google-analytics.com/**', route => route.abort());
});
test('production entries expose correct metadata without JavaScript', async ({ request }) => {
  for (const route of staticRoutes) {
    const response = await request.get(route);
    expect(response.status(), route).toBe(200);
    const html = await response.text();
    const metadata = getPageMetadata(route);
    expect(html).toContain(`href="${metadata.canonical}"`);
    expect(html).toContain(metadata.title.replace(/&/g, '&amp;'));
  }
  const html = await (await request.get(product.route)).text();
  expect(html).toContain('SoftwareApplication');
  expect(html).toContain(product.name);
  expect(readFileSync('build/sitemap.xml', 'utf8')).toContain(product.route);
  expect(readFileSync('build/robots.txt', 'utf8')).toContain('Allow: /');
});

test('product navigation, breadcrumbs, browser history, refresh and contact', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/products', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('heading', { name: products.memoryOS.name, exact: true })).toBeVisible();
  const memory = page.getByRole('link', { name: `Visit ${products.memoryOS.name}`, exact: false });
  await expect(memory).toHaveAttribute('href', 'https://memoryos.in');
  await expect(memory).toHaveAttribute('target', '_blank');
  await expect(page.getByRole('link', { name: 'Join the beta', exact: false })).toHaveAttribute('href', 'https://memoryos.in/signin');
  await page.getByRole('link', { name: `Explore ${product.name}` }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(product.proposition);
  await expect(page).toHaveTitle(getPageMetadata(product.route).title);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://thecollabrix.com${product.route}`);
  await expect(page.getByRole('navigation', { name: 'Breadcrumb' }).locator('[aria-current="page"]')).toHaveText(product.name);
  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(product.proposition);
  await page.getByRole('navigation', { name: 'Breadcrumb' }).getByRole('link', { name: 'Products', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Software built by Collabrix.');
  await expect(page.locator('#site-schema')).not.toContainText('SoftwareApplication');
  await page.goBack();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(product.proposition);
  await page.goForward();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Software built by Collabrix.');
  await page.goBack();
  await page.getByRole('navigation', { name: 'Breadcrumb' }).getByRole('link', { name: 'Home', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Building digital products');
  await page.getByRole('link', { name: `Explore ${product.name}` }).click();
  await page.getByRole('link', { name: 'Interested in the beta' }).click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.locator('form')).toBeVisible();
  expect(errors).toEqual([]);
});

for (const width of [320, 430, 768, 1280, 1920]) {
  test(`responsive products and clinic page at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ['/', '/products', product.route]) {
      await page.goto(route, { waitUntil: 'domcontentloaded' });
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), route).toBe(true);
      await page.getByRole('button', { name: 'Switch to dark mode' }).click();
      await expect(page.locator('html')).toHaveClass(/dark/);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      await page.getByRole('button', { name: 'Switch to light mode' }).click();
    }
    if (width < 1024) {
      await page.getByRole('button', { name: 'Open menu' }).click();
      await expect(page.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
      await page.locator('#mobile-menu').getByRole('button', { name: 'Products', exact: true }).click();
      await expect(page.getByRole('heading', { level: 1 })).toHaveText('Software built by Collabrix.');
      await expect(page.locator('#mobile-menu')).toHaveCount(0);
    }
  });
}

test('existing routes, legal navigation and theme persistence', async ({ page }) => {
  for (const route of ['/about', '/design', '/talent', '/contact', '/work', '/work/fintech-mobile-app', '/privacy', '/terms']) {
    await page.goto(route, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('main').getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page).toHaveTitle(getPageMetadata(route).title);
  }
  await page.goto(product.route, { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Switch to dark mode' }).click();
  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.getByRole('button', { name: 'Privacy Policy', exact: true }).click();
  await expect(page).toHaveURL(/\/privacy$/);
  await page.goBack();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(product.proposition);
  await page.getByRole('button', { name: 'Terms of Service', exact: true }).click();
  await expect(page).toHaveURL(/\/terms$/);
});

test('breadcrumb keyboard activation follows its URL', async ({ page }) => {
  await page.goto(product.route, { waitUntil: 'domcontentloaded' });
  const home = page.getByRole('navigation', { name: 'Breadcrumb' }).getByRole('link', { name: 'Home', exact: true });
  await home.focus();
  await expect(home).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL('http://127.0.0.1:4173/');
});
