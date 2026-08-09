import { NotesArchive } from '../components/NotesArchive';
import { SiteShell } from '../components/layout/SiteShell';
import { Icon } from '../components/ui/Icon';
import { publishedDocCount, trackCount } from '../data/notes';
import './NotesPage.css';

/**
 * /notes/ — a page of its own rather than a section on the home page, because
 * a 60-document archive would bury the contact section behind it.
 */
export default function NotesPage() {
  return (
    <SiteShell homeHref="/" currentPageId="notes">
      <div className="notes-page">
        <div className="container">
          <header className="notes-page__header">
            <a className="notes-page__back" href="/#home">
              <Icon name="arrowLeft" size={15} />
              Back to portfolio
            </a>

            <p className="eyebrow">
              <span className="eyebrow__mark" aria-hidden="true" />
              Notes
            </p>
            <h1 className="notes-page__title">What I&rsquo;m studying</h1>
            <p className="notes-page__lede">
              Long-form notes I write while learning a subject end to end — the
              reference I wanted to exist while building production apps. Every
              document is a PDF you can read in the browser or download.
            </p>

            <dl className="notes-page__stats">
              <div className="notes-page__stat">
                <dt>Documents</dt>
                <dd>{publishedDocCount}</dd>
              </div>
              <div className="notes-page__stat">
                <dt>Tracks</dt>
                <dd>{trackCount}</dd>
              </div>
              <div className="notes-page__stat">
                <dt>Format</dt>
                <dd>PDF</dd>
              </div>
            </dl>
          </header>

          <NotesArchive />
        </div>
      </div>
    </SiteShell>
  );
}
