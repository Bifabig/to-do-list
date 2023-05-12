const { toDoList } = require('./storage.js');

let myList = [];

const addTodo = (desc) => {
  myList.push({ id: myList.length + 1, desc: desc.trim(), completed: false });
  toDoList(myList);
  return myList;
};

const removeTodo = (id) => {
  const i = myList.findIndex((todo) => todo.id === id);
  if (i > -1) myList.splice(i, 1);

  myList.forEach((listItem, i) => {
    listItem.id = i + 1;
  });

  toDoList(myList);
  return myList;
};

const renderTodos = () => {
  myList = addTodo('hi');
  document.body.innerHTML = `<div class="container">
  <ul>
      <li>
          <h2>Today's To Do</h1>
      </li>
      <li>
          <input type="text" class="text-input" placeholder="Add to your list...">
      </li>
      <ul class="list"></ul>
      <li class="clear"><a href="#" class="clear-btn">Clear all completed</a></li>
  </ul>
</div>`;
  document.querySelector('.list').innerHTML = '';
  if (myList) {
    myList.forEach((todo) => {
      const inputEl = `<input class="text-input input-field input-${todo.id}" 
      id='${todo.id}' value='${todo.desc}'></input>`;

      const todoEl = `<li class="todo">
        <div> 
        <input class="check-btn" 
        id='${todo.id}' type="checkbox"> 
        ${inputEl}
        </div>
        <i id="${todo.id}"class="uil uil-trash"></i>
        </li>`;

      document.querySelector('.list').innerHTML += todoEl;
    });
  }

  return document.body.innerHTML;
};

module.exports = {
  addTodo,
  removeTodo,
  renderTodos,
};
