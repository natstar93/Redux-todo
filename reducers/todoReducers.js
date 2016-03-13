import { ADD_TODO } from '../actions/todoActions';

const initialState = [{
  text: 'Learn redux',
  completed: false
}];

export default function todos(state = initialState, action) {
  if (action.type === ADD_TODO) {
    return (state, [{
      text: action.text,
      completed: false
    }]);
  }
  return state;
};
