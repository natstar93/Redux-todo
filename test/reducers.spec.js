import chai from 'chai';
import reducer from '../reducers/todoReducers';
import { ADD_TODO, COMPLETE_TODO } from '../actions/todoActions';
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

  it('handles COMPLETE_TODO action', () => {
    expect(reducer([{
      text: 'Git commit',
      completed: false
    }], {
      type: COMPLETE_TODO,
      index: 0
    })).to.eql(
      [{
        text: 'Git commit',
        completed: true
      }]
    );
    expect(reducer([{
      text: 'Git add',
      completed: false
    },
    {
      text: 'Git commit',
      completed: false
    }], {
      type: COMPLETE_TODO,
      index: 1
    })).to.eql(
      [{
        text: 'Git add',
        completed: false
      },
      {
        text: 'Git commit',
        completed: true
      }]
    );
  });
});
