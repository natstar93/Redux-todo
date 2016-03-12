import chai from 'chai';
import reducer from '../reducers/todoReducers';
const expect = chai.expect;

describe('todos reducer', () => {
  it('returns the initial state', () => {
    const initialState = [{
      text: 'Learn redux',
      completed: false,
      id: 0
    }];
    console.log('initialState: ', initialState);
    console.log('reducer(undefined, {}): ', reducer(undefined, {}));
    expect(reducer(undefined, {})).to.eql(initialState);
  });
});
