import { useReveal } from '../../hooks/useReveal';
import './Section.css';

/**
 * Shared section shell: anchor id, eyebrow/title/lede header and scroll reveal.
 * Every page section uses this so spacing and heading levels stay consistent.
 */
export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  headingId,
  className = '',
  container = 'default',
}) {
  const [ref, isVisible] = useReveal();
  const resolvedHeadingId = headingId ?? `${id}-heading`;

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={resolvedHeadingId}
      className={`section reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
    >
      <div className={`container container--${container}`}>
        <header className="section__header">
          {eyebrow && (
            <p className="section__eyebrow">
              <span className="section__eyebrow-mark" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h2 className="section__title" id={resolvedHeadingId}>
            {title}
          </h2>
          {lede && <p className="section__lede">{lede}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
