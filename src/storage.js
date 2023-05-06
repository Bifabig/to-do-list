export const toDoList = (list) => localStorage.setItem('toDoList', JSON.stringify(list));

export const getToDoList = () => {
  let previousList = JSON.parse(localStorage.getItem('toDoList'));
  if (!previousList) {
    previousList = [];
  }
  return previousList;
};
