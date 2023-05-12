const toDoList = (list) => {
  const myList = [...list] || [];
  return myList;
};

const getToDoList = () => {
  const previousList = toDoList() || [];
  return previousList;
};

module.exports = { toDoList, getToDoList };
