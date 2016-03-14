import { ADD_TODO, COMPLETE_TODO } from '../actions/todoActions';

const initialState = [{
  text: 'Learn redux',
  completed: false
}];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign([...state, {
        text: action.text,
        completed: false
      }])
    case COMPLETE_TODO:
      return Object.assign([...state.map((newTodo, index) => {
        if (index === action.index) {
          return Object.assign({}, newTodo, {
            completed: true
          })
        }
        return newTodo;
      })])
    default:
      return state;
  }
};
