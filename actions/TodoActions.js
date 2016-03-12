const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text
  }
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index: index
  }
}
