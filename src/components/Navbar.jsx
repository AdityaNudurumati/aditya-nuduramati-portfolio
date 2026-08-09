import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { navLinks, noSpyIds, spyIds } from '../data/navigation';
import { profile } from '../data/profile';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { Icon } from './ui/Icon';
import './Navbar.css';

/**
 * Primary navigation, shared by every page.
 *
 * `homeHref` prefixes the section anchors so the same links work from a
 * sub-page ('/' → `/#about`) as from the home page ('' → `#about`), and
 * `currentPageId` marks a page link active in place of the scroll-spy, which
 * only runs where the sections actually exist.
 */
export function Navbar({
  theme,
  onToggleTheme,
  homeHref = '',
  currentPageId = null,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSectionId = useScrollSpy(currentPageId ? noSpyIds : spyIds);
  const menuId = useId();
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll and move focus into the panel while the mobile menu is open.
  useEffect(() => {
    if (!isOpen) return undefined;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector('a')?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  // Close the menu if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 900px)');
    const onChange = (event) => {
      if (event.matches) setIsOpen(false);
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const hrefFor = (link) =>
    link.type === 'page' ? link.href : `${homeHref}#${link.id}`;
  const isActive = (link) =>
    link.type === 'page'
      ? link.id === currentPageId
      : link.id === activeSectionId;

  return (
    <header className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar__inner container" aria-label="Primary">
        <a
          className="navbar__brand"
          href={`${homeHref}#home`}
          onClick={closeMenu}
        >
          <span className="navbar__mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="navbar__name">{profile.name}</span>
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                className={`navbar__link ${isActive(link) ? 'is-active' : ''}`}
                href={hrefFor(link)}
                aria-current={
                  isActive(link)
                    ? link.type === 'page'
                      ? 'page'
                      : 'true'
                    : undefined
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            className="btn btn--primary btn--sm navbar__cta"
            href={`${homeHref}#contact`}
          >
            Let&rsquo;s Connect
          </a>
          <button
            type="button"
            ref={toggleRef}
            className="navbar__burger"
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            <Icon name={isOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </nav>

      <div
        id={menuId}
        ref={panelRef}
        className={`navbar__panel ${isOpen ? 'is-open' : ''}`}
        hidden={!isOpen}
      >
        <ul className="navbar__panel-links">
          {navLinks.map((link, index) => (
            <li key={link.id}>
              <a
                className={`navbar__panel-link ${isActive(link) ? 'is-active' : ''}`}
                href={hrefFor(link)}
                onClick={closeMenu}
                aria-current={
                  isActive(link)
                    ? link.type === 'page'
                      ? 'page'
                      : 'true'
                    : undefined
                }
              >
                <span className="navbar__panel-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="btn btn--primary btn--block"
          href={`${homeHref}#contact`}
          onClick={closeMenu}
        >
          Let&rsquo;s Connect
          <Icon name="arrowRight" size={16} />
        </a>
      </div>

      {isOpen && (
        <button
          type="button"
          className="navbar__scrim"
          tabIndex={-1}
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <Icon name={isDark ? 'sun' : 'moon'} size={18} />
    </button>
  );
}
