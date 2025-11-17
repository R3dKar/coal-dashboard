import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Применяем сохраненную тему при загрузке приложения
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// Устанавливаем фон для всего документа
document.documentElement.style.backgroundColor = 'var(--bg-primary)';
document.body.style.backgroundColor = 'var(--bg-primary)';
document.body.style.color = 'var(--text-primary)';
document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
