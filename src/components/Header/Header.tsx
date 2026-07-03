import { NAV_LINKS } from '../../constants';
import { pushTrackingEvent } from '../../hooks';
import type { Theme } from '../../types';
import './Header.css';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

/** Sticky header with logo, navigation links, and theme toggle. */
export function Header({ isDark, onToggleTheme }: HeaderProps) {
  const handleNavClick = (label: string) => {
    pushTrackingEvent('nav_click', label);
  };

  return (
    <header className="header" id="header">
      <a
        className="header__brand"
        href="#top"
        aria-label="VitaRing AI"
        onClick={() => handleNavClick('logo')}
      >
        <span className="header__brand-mark" aria-hidden="true" />
        <span>VitaRing AI</span>
      </a>

      <nav className="header__nav" aria-label="Điều hướng chính">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            id={link.id}
            href={link.href}
            onClick={() => handleNavClick(link.id)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className="header__theme-toggle"
        type="button"
        onClick={() => {
          onToggleTheme();
          pushTrackingEvent('theme_toggle', isDark ? 'light' : 'dark');
        }}
        aria-label="Đổi giao diện sáng tối"
      >
        <span>{isDark ? '🌙' : '☀️'}</span>
        <span className="header__theme-label">{isDark ? 'Dark' : 'Light'}</span>
      </button>
    </header>
  );
}
