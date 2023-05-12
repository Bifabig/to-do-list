const toDoList = (list) => localStorage.setItem('toDoList', JSON.stringify(list));

const getToDoList = () => {
  const previousList = JSON.parse(localStorage.getItem('toDoList')) || [];
  return previousList;
};

module.exports = { toDoList, getToDoList };
