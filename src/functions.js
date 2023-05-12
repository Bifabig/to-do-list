const { getToDoList, toDoList } = require('./storage.js');
const { checkBoxHandler } = require('./checkBoxHandler.js');

let myList = getToDoList();

const editTask = (id, desc) => {
  const task = myList.find((task) => task.id === id);
  task.desc = desc.trim();

  toDoList(myList);
};

const editInput = () => {
  const input = document.querySelectorAll('.input-field');
  input.forEach((inputItem) => {
    inputItem.addEventListener('focusin', () => {
      inputItem.classList.add('active');
      inputItem.parentElement.parentElement.classList.add('active');
    });

    inputItem.addEventListener('focusout', () => {
      inputItem.classList.remove('active');
      inputItem.parentElement.parentElement.classList.remove('active');
    });

    inputItem.addEventListener('change', (e) => {
      editTask(+inputItem.id, e.target.value);
    });
  });
};

const addTodo = (desc) => {
  if (desc !== '') {
    myList.push({ id: myList.length + 1, desc: desc.trim(), completed: false });
  }
  toDoList(myList);
};

const removeTodo = (id) => {
  const i = myList.findIndex((todo) => todo.id === id);
  if (i > -1) myList.splice(i, 1);

  myList.forEach((listItem, i) => {
    listItem.id = i + 1;
  });

  toDoList(myList);
};

const renderTodos = () => {
  document.querySelector('.list').innerHTML = '';
  if (myList) {
    myList.forEach((todo) => {
      let inputEl;
      if (todo.completed) {
        inputEl = `<input class="text-input input-field input-${todo.id} crossout" id='${todo.id}' value='${todo.desc}'></input> `;
      } else {
        inputEl = `<input class="text-input input-field input-${todo.id}" id='${todo.id}' value='${todo.desc}'></input> `;
      }

      const todoEl = `<li class="todo">
        <div> 
        <input class="check-btn" id='${todo.id}' ${todo.completed ? 'checked' : ''}  type="checkbox"> 
        ${inputEl}
        </div>
        <i id="${todo.id}"class="uil uil-trash"></i>
        </li>`;

      document.querySelector('.list').innerHTML += todoEl;
    });
  }

  editInput();
  const removeBtns = document.querySelectorAll('.uil');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      removeTodo(+btn.id);
      renderTodos();
    });
  });

  checkBoxHandler(myList);
};

const deleteAll = () => {
  myList = myList.filter((todo) => !todo.completed);
  toDoList(myList);
  renderTodos();
};

module.exports = {
  editTask,
  addTodo,
  removeTodo,
  renderTodos,
  deleteAll,
};
