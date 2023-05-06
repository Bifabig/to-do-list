import './style.css';
import { renderTodos } from './functions.js';

document.querySelector('.text-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    renderTodos();
    e.target.value = '';
  }
});

renderTodos();
