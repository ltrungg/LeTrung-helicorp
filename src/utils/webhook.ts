import type { ContactFormData } from '../types';
import { SUBMISSIONS_STORAGE_KEY } from '../constants';

/** Check if a real webhook URL is configured via environment variable. */
export function getWebhookUrl(): string | null {
  const url = import.meta.env.VITE_WEBHOOK_URL;
  return url && typeof url === 'string' && url.startsWith('https://')
    ? url
    : null;
}

/**
 * Submit contact form data to a real webhook or localStorage (demo mode).
 * Returns the mode used so the UI can inform the user.
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<{ mode: 'webhook' | 'demo' }> {
  const payload = {
    ...data,
    source: 'vitaring-ai-landing',
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = getWebhookUrl();

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Webhook responded with status ${response.status}`);
    }

    return { mode: 'webhook' };
  }

  // Demo mode: persist to localStorage
  const existing = JSON.parse(
    localStorage.getItem(SUBMISSIONS_STORAGE_KEY) || '[]'
  );
  localStorage.setItem(
    SUBMISSIONS_STORAGE_KEY,
    JSON.stringify([...existing, payload])
  );

  return { mode: 'demo' };
}
