import type { AnchorHTMLAttributes, MouseEvent } from 'react';

interface SiteLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  onNavigate: (page: string) => void;
}

// Keep genuine URLs, keyboard activation and modifier-click/open-in-new-tab behavior.
export function SiteLink({ href, onNavigate, onClick, ...props }: SiteLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || props.target === '_blank') return;
    event.preventDefault();
    onNavigate(href === '/' ? 'home' : href.replace(/^\//, ''));
  };
  return <a {...props} href={href} onClick={handleClick} />;
}

export const productLinkClass = 'inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 rounded-xl font-medium border border-current/20 hover:bg-sky-600/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 dark:focus-visible:ring-sky-400 transition-colors';
export const primaryProductLinkClass = `${productLinkClass} bg-sky-800 text-white dark:bg-sky-500 dark:text-gray-950 hover:bg-sky-700 dark:hover:bg-sky-400`;
