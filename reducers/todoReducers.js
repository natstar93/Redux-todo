import { ADD_TODO } from '../actions/todoActions';

const initialState = [{
  text: 'Learn redux',
  completed: false,
  id: 0
}];

export default function todos(state = initialState, action) {
  return state;
};
