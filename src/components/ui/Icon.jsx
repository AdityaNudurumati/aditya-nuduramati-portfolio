/**
 * Inline SVG icon set. Keeping these local avoids an icon-library dependency
 * and keeps every icon in the bundle tree-shakeable and style-inheritable.
 */
const paths = {
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
  ),
  linkedin: (
    <>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3z" />
      <path d="M9 9h3.8v1.65h.05a4.17 4.17 0 0 1 3.75-2.05c4 0 4.75 2.6 4.75 6V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.46-2.2 2.96V21H9z" />
    </>
  ),
  whatsapp: (
    <path
      stroke="none"
      d="M12.04 2A9.9 9.9 0 0 0 2.15 11.9a9.83 9.83 0 0 0 1.35 4.97L2.05 22.2l5.45-1.43a9.9 9.9 0 0 0 4.54 1.16h.01a9.9 9.9 0 0 0 9.9-9.89A9.9 9.9 0 0 0 12.04 2Zm0 18.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.2 8.2 0 0 1-1.26-4.38 8.23 8.23 0 1 1 8.23 8.23Zm4.52-6.16c-.25-.12-1.46-.72-1.69-.8-.22-.09-.39-.13-.55.12-.17.25-.63.8-.78.97-.14.16-.29.19-.53.06-.25-.12-1.04-.38-1.99-1.22-.74-.65-1.23-1.46-1.38-1.71-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.17.05-.31-.02-.43-.06-.13-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42l-.47-.01c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.06s.89 2.39 1.01 2.55c.12.17 1.74 2.66 4.22 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.29Z"
    />
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" fill="none" strokeWidth="1.6" />
      <path d="m3.5 7 7.4 5.3a2 2 0 0 0 2.2 0L20.5 7" fill="none" strokeWidth="1.6" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6" fill="none" strokeWidth="1.6" />
      <path d="M20 4 11 13" fill="none" strokeWidth="1.6" />
      <path d="M18 14v4.5A1.5 1.5 0 0 1 16.5 20h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10" fill="none" strokeWidth="1.6" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12" fill="none" strokeWidth="1.6" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" fill="none" strokeWidth="1.6" />
      <path d="M4 19h16" fill="none" strokeWidth="1.6" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4 12h15" fill="none" strokeWidth="1.6" />
      <path d="m13 6 6 6-6 6" fill="none" strokeWidth="1.6" />
    </>
  ),
  arrowLeft: (
    <>
      <path d="M20 12H5" fill="none" strokeWidth="1.6" />
      <path d="m11 6-6 6 6 6" fill="none" strokeWidth="1.6" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 20V5" fill="none" strokeWidth="1.6" />
      <path d="m6 11 6-6 6 6" fill="none" strokeWidth="1.6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" fill="none" strokeWidth="1.7" />
      <path d="M4 12h16" fill="none" strokeWidth="1.7" />
      <path d="M4 17h16" fill="none" strokeWidth="1.7" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" fill="none" strokeWidth="1.7" />
      <path d="m18 6-12 12" fill="none" strokeWidth="1.7" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" fill="none" strokeWidth="1.6" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" fill="none" strokeWidth="1.6" />
    </>
  ),
  moon: (
    <path
      d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z"
      fill="none"
      strokeWidth="1.6"
    />
  ),
  code: (
    <>
      <path d="m8.5 8-4.5 4 4.5 4" fill="none" strokeWidth="1.6" />
      <path d="m15.5 8 4.5 4-4.5 4" fill="none" strokeWidth="1.6" />
      <path d="m13.5 5-3 14" fill="none" strokeWidth="1.6" />
    </>
  ),
  document: (
    <>
      <path
        d="M6 3h7l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
        fill="none"
        strokeWidth="1.6"
      />
      <path d="M13 3v5h5" fill="none" strokeWidth="1.6" />
    </>
  ),
  chevronDown: <path d="m6 9.5 6 6 6-6" fill="none" strokeWidth="1.7" />,
  location: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" fill="none" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.6" fill="none" strokeWidth="1.6" />
    </>
  ),
};

export function Icon({ name, size = 20, className = '', ...rest }) {
  const content = paths[name];
  if (!content) return null;

  return (
    <svg
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {content}
    </svg>
  );
}
