import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as quoteActions from '../actions/quoteActions';

describe('Store', () => {
  it('should handle creating quote', () => {
    // Arrange
    const store = createStore(rootReducer, initialState);
    const quote = {
      name: 'Test quote',
    };

    // Act
    const action = quoteActions.createQuoteSuccess(quote);
    store.dispatch(action);

    // Assert
    const actual = store.getState().quotes[0];
    const expected = {
      name: 'Test quote',
    };
    
    expect(actual).toEqual(expected);
  });
});
