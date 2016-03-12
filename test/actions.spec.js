import chai from 'chai';
import { addTodo } from '../actions/TodoActions'
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
});
