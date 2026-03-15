import { ReactNode, useRef, useEffect } from 'react';

interface InfiniteMarqueeProps {
  children: ReactNode;
  /** Seconds to scroll one full copy of content */
  speed?: number;
  reverse?: boolean;
  className?: string;
  fadeEdges?: boolean;
}

export function InfiniteMarquee({
  children,
  speed = 28,
  reverse = false,
  className = '',
  fadeEdges = true,
}: InfiniteMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const copy1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const copy1 = copy1Ref.current;
    if (!track || !copy1) return;

    let x = 0;
    let copyWidth = 0;
    let lastTs: number | null = null;
    let animId: number;
    const dir = reverse ? 1 : -1;

    const measure = () => {
      const w = copy1.getBoundingClientRect().width;
      if (w > 0 && Math.abs(w - copyWidth) > 0.5) {
        copyWidth = w;
        x = 0; // reset position on size change so seam stays clean
      }
    };

    const tick = (ts: number) => {
      if (lastTs === null) lastTs = ts;
      const delta = ts - lastTs;
      lastTs = ts;

      if (copyWidth > 0) {
        // pixels to move this frame: copyWidth / (speed * 1000ms) * delta ms
        x += dir * (copyWidth / (speed * 1000)) * delta;
        if (x <= -copyWidth) x += copyWidth;
        if (x >= copyWidth)  x -= copyWidth;
        track.style.transform = `translate3d(${x}px, 0, 0)`;
      }

      animId = requestAnimationFrame(tick);
    };

    // Measure immediately, then again after fonts settle
    measure();
    document.fonts.ready.then(measure);

    const ro = new ResizeObserver(measure);
    ro.observe(copy1);

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [speed, reverse]);

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={
        fadeEdges
          ? {
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }
          : undefined
      }
    >
      <div
        ref={trackRef}
        style={{ display: 'flex', width: 'max-content', maxWidth: 'none', willChange: 'transform' }}
      >
        <div
          ref={copy1Ref}
          style={{ display: 'flex', alignItems: 'center', flexShrink: 0, whiteSpace: 'nowrap', maxWidth: 'none' }}
        >
          {children}
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', flexShrink: 0, whiteSpace: 'nowrap', maxWidth: 'none' }}
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
