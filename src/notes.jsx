import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Tokens and base styles first, so component styles can override them.
import './index.css';
import NotesPage from './pages/NotesPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotesPage />
  </StrictMode>,
);
