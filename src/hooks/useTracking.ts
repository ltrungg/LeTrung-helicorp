import { useEffect } from 'react';
import type { TrackingEvent } from '../types';
import { TRACKING_STORAGE_KEY } from '../constants';

/**
 * Push a tracking event to localStorage and fire a CustomEvent.
 * Also logs to console for easy demo inspection during review.
 */
export function pushTrackingEvent(
  name: string,
  value?: string | number
): void {
  const event: TrackingEvent = {
    name,
    value,
    timestamp: new Date().toISOString(),
  };

  window.dispatchEvent(
    new CustomEvent('vitaring-track', { detail: event })
  );

  const stored = JSON.parse(
    localStorage.getItem(TRACKING_STORAGE_KEY) || '[]'
  ) as TrackingEvent[];
  localStorage.setItem(
    TRACKING_STORAGE_KEY,
    JSON.stringify([...stored.slice(-49), event])
  );

  console.info('[VitaRing Tracking]', event);
}

/**
 * Custom hook that tracks scroll depth milestones (25%, 50%, 75%, 100%).
 */
export function useScrollTracking(): void {
  useEffect(() => {
    const milestones = [25, 50, 75, 100];
    const reached = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent =
        maxScroll <= 0
          ? 100
          : Math.round((scrollTop / maxScroll) * 100);

      milestones.forEach((milestone) => {
        if (percent >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          pushTrackingEvent('scroll_depth', milestone);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
