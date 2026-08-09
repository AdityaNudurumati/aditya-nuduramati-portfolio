import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import { useTheme } from '../../hooks/useTheme';
import './SiteShell.css';

/**
 * The chrome every page shares: skip link, navbar, main landmark and footer.
 *
 * Each page owns only its content. Keeping the landmarks here means the
 * accessibility scaffolding — one skip link, one <main>, one theme toggle —
 * cannot drift between the home page and a sub-page.
 *
 * `homeHref` is '' on the home page (anchors stay in-page) and '/' elsewhere.
 */
export function SiteShell({ children, homeHref = '', currentPageId = null }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        homeHref={homeHref}
        currentPageId={currentPageId}
      />

      <main id="main">{children}</main>

      <Footer
        homeHref={homeHref}
        topHref={currentPageId ? '#main' : '#home'}
      />
    </>
  );
}
