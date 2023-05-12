const { addTodo, removeTodo, renderTodos } = require('./util.js');

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
});
