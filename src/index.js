import './style.css';
import { addTodo, renderTodos } from './functions.js';

document.querySelector('.text-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo(e.target.value);
    renderTodos();
    e.target.value = '';
  }
});

// document.querySelector('.clear-btn').addEventListener('click', () => {
//   deleteAll();
// });

renderTodos();
