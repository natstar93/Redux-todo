import chai from 'chai';
import reducer from '../reducers/todoReducers';
import { ADD_TODO } from '../actions/todoActions';
const expect = chai.expect;

describe('todos reducer', () => {
  it('returns the initial state', () => {
    const initialState = [{
      text: 'Learn redux',
      completed: false
    }];
    expect(reducer(undefined, {})).to.eql(initialState);
  });

  it('handles ADD_TODO action ', () => {
    expect(reducer([], {
      type: ADD_TODO,
      text: 'Git commit'
    })).to.eql(
      [{
        text: 'Git commit',
        completed: false
      }]
    )
  });
});
