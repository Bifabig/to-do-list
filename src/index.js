import _ from 'lodash';
import './style.css';

class List {
  constructor(desc) {
    this.isCompleted = false;
    this.desc = desc;
    this.toDoList = this.previousList();
    this.id = this.toDoList.length;
  }

  storeList() {
    let list = {};
    if (this.desc !== '') {
      list = {
        id: this.id,
        isCompleted: this.isCompleted,
        desc: this.desc,
      };
    }

    return this.toDoList.push(list);
  }

  previousList() {
    const previousList = JSON.parse(localStorage.getItem('toDoList'));
    if (previousList) {
      this.toDoList = [...previousList];
    } else {
      this.toDoList = [];
    }

    return this.toDoList;
  }

  addList() {
    const listItem = document.createElement('li');

    if (this.desc !== '') {
      this.storeList();
      listItem.setAttribute('id', this.id);
      listItem.textContent = `${this.desc}`;
      localStorage.setItem('toDoList', JSON.stringify(this.toDoList));
    }

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('class', 'delete');
    deleteButton.textContent = 'Clear';

    const list = document.querySelector('.list');
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    deleteButton.addEventListener('click', () => {
      this.removeList();
      // deleteButton.remove();
    });
  }

  removeList() {
    const toDoList = this.previousList();
    const val = toDoList.filter((task) => this.id !== task.id);
    // toDoList = [...val];
    // val.forEach((task, i) => {
    // task.id = i;
    // this.id = task.indexOf(`${task.desc}`);
    // });
    this.toDoList = toDoList;
    localStorage.setItem('toDoList', JSON.stringify(val));
    const taskId = document.getElementById(this.id);
    return taskId.remove();
  }
}

function displayList() {
  let previousList = JSON.parse(localStorage.getItem('toDoList'));
  if (previousList) {
    previousList.forEach((task) => {
      const listItem = document.createElement('li');
      listItem.setAttribute('id', task.id);
      listItem.textContent = `${task.desc}`;

      const deleteButton = document.createElement('button');
      deleteButton.setAttribute('type', 'button');
      deleteButton.setAttribute('class', 'delete');
      deleteButton.textContent = 'Clear';

      const list = document.querySelector('.list');
      listItem.appendChild(deleteButton);
      list.appendChild(listItem);
      deleteButton.addEventListener('click', () => {
        const newToDoList = previousList.filter(
          (prevList) => prevList.id !== task.id,
        );
        localStorage.setItem('toDoList', JSON.stringify(newToDoList));

        // newToDoList.forEach((task, i) => {
        //   task.id = i;
        // });
        // localStorage.setItem('toDoList', JSON.stringify(newToDoList));

        previousList = [...newToDoList];

        // const val = previousList.filter((prev) => task.id !== prev.id);
        // localStorage.setItem('toDoList', JSON.stringify(val));
        const taskId = document.getElementById(task.id);
        taskId.remove();
        // deleteButton.remove();
      });
    });
  }

  // return list.appendChild(listItem);
}

const form = document.querySelector('.add-task');
const task = document.getElementById('task');
form.addEventListener('submit', (e) => {
  const myList = new List(task.value);
  e.preventDefault();
  myList.addList();
  task.value = '';
});
displayList();

// function component() {
//   const element = document.createElement('div');

//   //   Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');

//   //   const list  = document.querySelector('.to-do-list');
//   //   list.

//   return element;
//   //   return list;
// }

// document.body.appendChild(component());
