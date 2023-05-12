const { addTodo, deleteAll, renderTodos } = require('./functions.js');
require('./style.css');

document.querySelector('.text-input').addEventListener('keypress', (input) => {
  if (input.key === 'Enter') {
    addTodo(input.target.value);
    renderTodos();
    input.target.value = '';
  }
});

document.querySelector('.clear-btn').addEventListener('click', () => {
  deleteAll();
});

renderTodos();
