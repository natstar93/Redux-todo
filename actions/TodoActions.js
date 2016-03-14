export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text
  }
};

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index: index
  }
};

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  }
};
