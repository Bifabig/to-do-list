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
});
