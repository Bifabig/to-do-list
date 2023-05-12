const {
  addTodo,
  removeTodo,
  renderTodos,
  editInput,
  editTask,
  checkBoxHandler,
  deleteAll,
} = require('./util.js');

jest.mock('./storage');

describe('testing add and remove', () => {
  test('should add items', () => {
    expect(addTodo('hi')).toMatchObject([
      { completed: false, desc: 'hi', id: 1 },
    ]);
  });

  test('should remove items', () => {
    expect(removeTodo(1)).toMatchObject([]);
  });

  test('displays a task after add', () => {
    renderTodos();
    const list = document.querySelectorAll('.list li');
    expect(list).toHaveLength(1);
  });

  test('remove button removes one li item', () => {
    const removeBtns = document.querySelectorAll('.uil');
    removeBtns.forEach((btn) => {
      btn.click();
      removeTodo(1);
      document.querySelector('.list li').remove();
    });
    const list = document.querySelectorAll('.list li');

    expect(list).toHaveLength(0);
  });

  test('edit input item', () => {
    editInput();
    const input = editTask(1, 'hello');
    expect(input.desc).toBe('hello');
  });

  test('status completed', () => {
    const checked = checkBoxHandler();
    if (checked[0].completed) {
      document
        .querySelector('.input-1')
        .setAttribute('class', 'text-input input-field input-1 crossout');
    }
    const list = document.querySelector('.list li .input-field');
    expect(list.classList.contains('crossout')).toBe(true);
  });

  test('all items are deleted', () => {
    const list = deleteAll();
    expect(list).toHaveLength(0);
  });
});
