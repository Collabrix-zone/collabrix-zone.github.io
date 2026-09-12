import { ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import { SiteLink, primaryProductLinkClass, productLinkClass } from './SiteLink';

export function ClinicPlatformPage({ isDark, onNavigate }: { isDark: boolean; onNavigate: (page: string) => void }) {
  const product = products.clinicPlatform;
  const panel = `rounded-3xl border p-6 sm:p-8 ${isDark ? 'border-white/15 bg-white/[0.03]' : 'border-gray-200 bg-white'}`;
  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto">
        <nav aria-label="Breadcrumb" className="py-6 sm:py-8">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            <li><SiteLink href="/" onNavigate={onNavigate} className="inline-flex items-center min-h-[44px] px-2 rounded focus-visible:ring-2 focus-visible:ring-sky-600 hover:underline">Home</SiteLink></li>
            <li aria-hidden="true"><ChevronRight size={16} /></li>
            <li><SiteLink href="/products" onNavigate={onNavigate} className="inline-flex items-center min-h-[44px] px-2 rounded focus-visible:ring-2 focus-visible:ring-sky-600 hover:underline">Products</SiteLink></li>
            <li aria-hidden="true"><ChevronRight size={16} /></li>
            <li className="px-2 py-3 break-words" aria-current="page">{product.name}</li>
          </ol>
        </nav>
        <section aria-labelledby="clinic-heading" className="pt-6 pb-16 sm:pb-20 max-w-4xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-sky-800 dark:text-sky-300 mb-6">A product by {product.company}</p>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-2xl font-semibold">{product.name}</span>
            {product.workingName && <span className="text-sm opacity-75">Working name</span>}
            <span className="text-sm rounded-full border border-sky-600/30 px-3 py-1 text-sky-800 dark:text-sky-300">{product.status}</span>
          </div>
          <h1 id="clinic-heading" className="tracking-tight leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>{product.proposition}</h1>
          <p className="text-lg opacity-80 leading-relaxed mb-4">{product.name} is a cloud-based healthcare software product being developed by {product.company} for independent clinics and medical practices in India.</p>
          <p className="opacity-80 leading-relaxed max-w-3xl mb-8">The platform brings key administrative and clinical workflows into one system, helping doctors and clinic staff manage day-to-day operations with less fragmentation.</p>
          <div className="flex flex-wrap gap-3">
            <SiteLink href="/contact" onNavigate={onNavigate} className={primaryProductLinkClass}>Interested in the beta<ArrowRight size={18} aria-hidden="true" /></SiteLink>
            <SiteLink href="/products" onNavigate={onNavigate} className={productLinkClass}><ArrowLeft size={18} aria-hidden="true" />Back to Products</SiteLink>
          </div>
        </section>
        <section aria-labelledby="why-heading" className={`${panel} mb-16 sm:mb-20`}>
          <p className="text-sm uppercase tracking-widest opacity-75 mb-3">Why we are building it</p>
          <h2 id="why-heading" className="text-2xl sm:text-3xl font-semibold mb-5">Clinic work is still fragmented.</h2>
          <p className="max-w-3xl opacity-80 leading-relaxed mb-4">For some practices, appointments, patient information, consultations, prescriptions and reports sit across different systems and processes. Staff coordination, billing and administrative follow-up can add more handoffs.</p>
          <p className="max-w-3xl opacity-80 leading-relaxed">{product.name} is being designed to bring these workflows into a more coherent operating environment.</p>
        </section>
        <section aria-labelledby="modules-heading" className="mb-16 sm:mb-20">
          <p className="text-sm uppercase tracking-widest opacity-75 mb-3">What we are building</p>
          <h2 id="modules-heading" className="text-2xl sm:text-3xl font-semibold mb-4">Everyday workflows, connected.</h2>
          <p className="max-w-2xl opacity-80 leading-relaxed mb-8">These capabilities are being developed and validated during the private beta. Availability and details may change as we learn.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.modules.map((module, index) => <article key={module.title} className={panel}>
              <span className="text-sm text-sky-800 dark:text-sky-300" aria-hidden="true">0{index + 1}</span>
              <h3 className="text-xl font-semibold mt-4 mb-3">{module.title}</h3>
              <p className="opacity-80 leading-relaxed">{module.description}</p>
            </article>)}
          </div>
        </section>
        <section aria-labelledby="audience-heading" className="mb-16 sm:mb-20">
          <h2 id="audience-heading" className="text-2xl sm:text-3xl font-semibold mb-8">Built around independent practices.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">{product.audiences.map(audience => <article key={audience.title} className={panel}>
            <h3 className="text-xl font-semibold mb-3">{audience.title}</h3><p className="opacity-80 leading-relaxed">{audience.description}</p>
          </article>)}</div>
        </section>
        <section aria-labelledby="process-heading" className="mb-16 sm:mb-20">
          <h2 id="process-heading" className="text-2xl sm:text-3xl font-semibold mb-4">Built around real workflows.</h2>
          <p className="max-w-3xl opacity-80 leading-relaxed mb-8">We are validating {product.name} with early users and refining the product around real clinic workflows before wider commercial availability.</p>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ['Observe', 'Understand actual workflows.'],
              ['Build', 'Turn recurring problems into coherent product workflows.'],
              ['Validate', 'Test with users and refine before broader release.'],
            ].map(([title, description], index) => <li key={title} className="border-t border-current/20 pt-5"><h3 className="font-semibold text-xl mb-3"><span className="text-sky-800 dark:text-sky-300 mr-3">0{index + 1}</span>{title}</h3><p className="opacity-80">{description}</p></li>)}
          </ol>
        </section>
        <section aria-labelledby="beta-heading" className={`${panel} mb-12`}>
          <h2 id="beta-heading" className="text-2xl font-semibold mb-4">{product.status}</h2>
          <p className="opacity-80 leading-relaxed mb-3">{product.name} is currently in private beta. Features, workflows and product details may change as we continue testing and validation.</p>
          <p className="opacity-80 leading-relaxed">Wider commercial availability will follow only after the product is ready for broader use.</p>
        </section>
        <section aria-labelledby="automation-heading" className="max-w-3xl mb-12">
          <h2 id="automation-heading" className="text-xl font-semibold mb-4">Thoughtful automation, where it helps.</h2>
          <p className="opacity-80 leading-relaxed">Future releases may introduce intelligent and AI-assisted capabilities where they meaningfully reduce administrative work while keeping healthcare professionals in control.</p>
        </section>
        <p className="opacity-80 mb-12">{product.name} is developed and owned by {product.company}.</p>
        <section aria-labelledby="clinic-contact-heading" className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-sky-900 text-white">
          <h2 id="clinic-contact-heading" className="text-2xl sm:text-3xl font-semibold mb-4">Interested in what we’re building?</h2>
          <p className="max-w-2xl leading-relaxed mb-8">If you operate an independent clinic or medical practice and are interested in the private beta, we’d like to hear from you.</p>
          <div className="flex flex-wrap gap-3">
            <SiteLink href="/contact" onNavigate={onNavigate} className={`${productLinkClass} bg-white text-sky-950 hover:bg-sky-100`}>Contact Collabrix</SiteLink>
            <SiteLink href="/products" onNavigate={onNavigate} className={productLinkClass}>Back to Products</SiteLink>
          </div>
        </section>
      </div>
    </div>
  );
}
