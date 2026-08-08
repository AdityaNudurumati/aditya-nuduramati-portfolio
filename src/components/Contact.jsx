import { useState } from 'react';
import { contactLinks, profile } from '../data/profile';
import { Section } from './ui/Section';
import { Icon } from './ui/Icon';
import './Contact.css';

const EMPTY_FORM = { name: '', email: '', message: '' };

/**
 * There is no backend, so the form does not send anything by itself: it opens
 * the visitor's mail client with the message pre-filled. This is stated in the
 * UI rather than implied.
 */
export function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Portfolio enquiry from ${form.name || 'a visitor'}`;
    const body = `${form.message}\n\n—\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s connect"
      lede="Open to roles, collaboration and interesting engineering problems. The quickest way to reach me is email."
    >
      <div className="contact__layout">
        <div className="contact__channels">
          <ul className="contact__links">
            {contactLinks.map((link) => {
              const isExternal = !link.href.startsWith('mailto:');
              return (
                <li key={link.id}>
                  <a
                    className="card contact__link"
                    href={link.href}
                    {...(isExternal
                      ? { target: '_blank', rel: 'noreferrer noopener' }
                      : {})}
                  >
                    <span className="contact__link-icon" aria-hidden="true">
                      <Icon name={link.icon} size={18} />
                    </span>
                    <span className="contact__link-text">
                      <span className="contact__link-label">{link.label}</span>
                      <span className="contact__link-handle">{link.handle}</span>
                    </span>
                    <Icon
                      name={isExternal ? 'external' : 'arrowRight'}
                      size={15}
                      className="contact__link-arrow"
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <p className="contact__availability">
            <Icon name="location" size={15} />
            {profile.location}
          </p>
        </div>

        <form className="card contact__form" onSubmit={handleSubmit}>
          <p className="contact__form-note">
            This form has no backend. Submitting it opens your email client with
            the message ready to send.
          </p>

          <div className="contact__field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to talk about?"
            />
          </div>

          <button className="btn btn--primary btn--block" type="submit">
            Open in email client
            <Icon name="mail" size={16} />
          </button>

          <p className="contact__fallback">
            Prefer to write directly?{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </form>
      </div>
    </Section>
  );
}
