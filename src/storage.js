export const toDoList = (list) => localStorage.setItem('toDoList', JSON.stringify(list));

export const getToDoList = () => {
  const previousList = JSON.parse(localStorage.getItem('toDoList')) || [];
  return previousList;
};
