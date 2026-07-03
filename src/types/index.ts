/* =========================================================================
 * VitaRing AI — Shared TypeScript Interfaces & Types
 * ========================================================================= */

/** Theme mode */
export type Theme = 'dark' | 'light';

/** Navigation link item */
export interface NavLink {
  label: string;
  href: string;
  id: string;
}

/** Product feature card */
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

/** Technical specification row */
export interface Spec {
  label: string;
  value: string;
}

/** User journey story step */
export interface StoryStep {
  order: number;
  timeOfDay: string;
  title: string;
  description: string;
}

/** Contact form data */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
}

/** Contact form field validation error */
export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

/** Form submission status */
export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

/** Chatbot message */
export interface ChatMessage {
  role: 'bot' | 'user';
  text: string;
}

/** Quick question for chatbot */
export interface QuickQuestion {
  key: string;
  label: string;
}

/** Tracking event */
export interface TrackingEvent {
  name: string;
  value?: string | number;
  timestamp: string;
}

/** Hero stat card */
export interface HeroStat {
  value: string;
  label: string;
}

/** Footer link group */
export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}
