import { toDoList } from './storage.js';

const checkBoxHandler = (list) => {
  const checked = document.querySelectorAll('.check-btn');
  checked.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const listItem = list.find((listItem) => listItem.id === +e.target.id);

      if (!listItem.completed) {
        document
          .querySelector(`.input-${listItem.id}`)
          .classList.add('crossout');
      } else {
        document
          .querySelector(`.input-${listItem.id}`)
          .classList.remove('crossout');
      }

      listItem.completed = !listItem.completed;
      toDoList(list);
    });
  });
};

export default checkBoxHandler;
