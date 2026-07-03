import { SITE_CONFIG, FOOTER_LINKS } from '../../constants';
import './Footer.css';

/** Footer with brand, navigation groups, and copyright. */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a className="footer__logo" href="#top" aria-label={SITE_CONFIG.name}>
            <span className="footer__logo-mark" aria-hidden="true" />
            <span>{SITE_CONFIG.name}</span>
          </a>
          <p>{SITE_CONFIG.description}</p>
        </div>

        {FOOTER_LINKS.map((group) => (
          <div className="footer__group" key={group.title}>
            <strong>{group.title}</strong>
            {group.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="container footer__bottom">
        <p>
          © {currentYear} {SITE_CONFIG.name}. Dự án demo cho bài test vòng 2 —
          TTS IT phát triển website tại HeLiCorp.
        </p>
      </div>
    </footer>
  );
}
