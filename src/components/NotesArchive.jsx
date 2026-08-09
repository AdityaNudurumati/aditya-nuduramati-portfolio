import { useState } from 'react';
import { noteTracks } from '../data/notes';
import { Icon } from './ui/Icon';
import './NotesArchive.css';

/**
 * The notes archive: subject tracks, each a set of modules of PDF documents.
 *
 * One track is shown at a time via a tab list; within a track each module is a
 * native <details>, so the whole archive collapses to a scannable outline and
 * stays usable with JavaScript doing nothing but the tab switch.
 */
export function NotesArchive() {
  const publishedTracks = noteTracks.filter((track) => track.status === 'published');
  const [activeId, setActiveId] = useState(publishedTracks[0]?.id ?? noteTracks[0].id);
  const activeTrack = noteTracks.find((track) => track.id === activeId) ?? noteTracks[0];

  return (
    <div className="notes-archive">
      <div className="notes__tabs" role="tablist" aria-label="Study tracks">
        {noteTracks.map((track) => {
          const isPublished = track.status === 'published';
          const isActive = track.id === activeTrack.id;

          return (
            <button
              type="button"
              key={track.id}
              role="tab"
              id={`notes-tab-${track.id}`}
              aria-selected={isActive}
              aria-controls={`notes-panel-${track.id}`}
              disabled={!isPublished}
              className={`notes__tab ${isActive ? 'is-active' : ''}`}
              onClick={() => setActiveId(track.id)}
            >
              {track.title}
              {!isPublished && <span className="notes__tab-note">Soon</span>}
            </button>
          );
        })}
      </div>

      <div
        className="notes__panel"
        role="tabpanel"
        id={`notes-panel-${activeTrack.id}`}
        aria-labelledby={`notes-tab-${activeTrack.id}`}
      >
        <p className="notes__summary">{activeTrack.summary}</p>

        <div className="notes__modules">
          {activeTrack.modules.map((module, index) => (
            <details className="card notes-module" key={module.id} open={index === 0}>
              <summary className="notes-module__summary">
                <span className="notes-module__heading">
                  <h2 className="notes-module__title">{module.title}</h2>
                  <span className="notes-module__count">
                    {module.docs.length} {module.docs.length === 1 ? 'doc' : 'docs'}
                  </span>
                </span>
                {module.summary && (
                  <span className="notes-module__description">{module.summary}</span>
                )}
                <Icon name="chevronDown" size={18} className="notes-module__chevron" />
              </summary>

              <ul className="notes-module__list">
                {module.docs.map((doc) => {
                  const href = `${activeTrack.basePath}/${doc.file}`;

                  return (
                    <li className="note-doc" key={doc.file}>
                      <span className="note-doc__index" aria-hidden="true">
                        {doc.n}
                      </span>
                      <a
                        className="note-doc__title"
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Icon name="document" size={15} />
                        {doc.title}
                        <span className="visually-hidden"> — open PDF in a new tab</span>
                      </a>
                      <a
                        className="note-doc__download"
                        href={href}
                        download
                        aria-label={`Download ${doc.title} as PDF`}
                      >
                        <Icon name="download" size={15} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
