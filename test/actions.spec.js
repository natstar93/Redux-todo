import chai from 'chai';
import { addTodo, completeTodo } from '../actions/TodoActions'
const expect = chai.expect;

describe('actions', () => {
  it('creates action to add a todo', () => {
    const text = 'Test with Mocha';
    const expectedAction = {
      type: 'ADD_TODO',
      text: text
    }
    expect(addTodo(text)).to.eql(expectedAction);
  });

  it('creates action to remove a todo', () => {
    const index = 0;
    const expectedAction = {
      type: 'COMPLETE_TODO',
      index: 0
    }
    expect(completeTodo(index)).to.eql(expectedAction);
  });
});
