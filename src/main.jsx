import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Tokens and base styles first, so component styles can override them.
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
