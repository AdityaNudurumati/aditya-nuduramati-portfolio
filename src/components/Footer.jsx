import { footerLinks, profile } from '../data/profile';
import { Icon } from './ui/Icon';
import './Footer.css';

const startYear = 2026;

/**
 * `homeHref` prefixes the brand link so it points back to the home page from a
 * sub-page; `topHref` is the back-to-top target, which on a sub-page is that
 * page's own main landmark rather than the home hero.
 */
export function Footer({ homeHref = '', topHref = '#home' }) {
  const currentYear = new Date().getFullYear();
  const yearLabel =
    currentYear > startYear ? `${startYear}–${currentYear}` : String(startYear);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__identity">
          <a className="footer__brand" href={`${homeHref}#home`}>
            <span className="footer__mark" aria-hidden="true">
              {profile.initials}
            </span>
            {profile.name}
          </a>
          <p className="footer__built">Built with React &amp; Vite.</p>
        </div>

        <ul className="footer__socials">
          {footerLinks.map((link) => {
            const isExternal = !link.href.startsWith('mailto:');
            return (
              <li key={link.id}>
                <a
                  className="footer__social"
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                  {...(isExternal
                    ? { target: '_blank', rel: 'noreferrer noopener' }
                    : {})}
                >
                  <Icon name={link.icon} size={18} />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="footer__end">
          <p className="footer__copyright">
            &copy; {yearLabel} {profile.name}
          </p>
          <a className="footer__top" href={topHref}>
            Back to top
            <Icon name="arrowUp" size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
