import expect from 'expect';
import * as actions from '../actions/quoteActions';
import quoteReducer from './quoteReducer';

describe('Quote Reducer', () => {
  it('should add quote when passed CREATE_QUOTE_SUCCESS', () => {
    // Arrange
    const initalState = [
      { name: 'A' },
      { name: 'B' },
    ];

    const newQuote = { name: 'C' };
    const action = actions.createQuoteSuccess(newQuote);

    // Act
    const newState = quoteReducer(initalState, action);

    // Assert
    expect(newState.length).toEqual(3);
    expect(newState[0].name).toEqual('A');
    expect(newState[1].name).toEqual('B');
    expect(newState[2].name).toEqual('C');
  });

  it('should update quote when passed UPDATE_QUOTE_SUCCESS', () => {
    // Arrange
    const initalState = [
      { id: 'a', name: 'A' },
      { id: 'b', name: 'B' },
      { id: 'c', name: 'C' },
    ];
    const firstQuote = initalState.find(a => a.id === 'a');
    const quote = { id: 'b', name: 'D' };
    const action = actions.updateQuoteSuccess(quote);

    // Act
    const newState = quoteReducer(initalState, action);
    const updateQuote = newState.find(a => a.id === quote.id);
    const untoucedQuote = newState.find(a => a.id === 'a');

    // Assert
    expect(newState.length).toEqual(3);
    expect(untoucedQuote).toEqual(firstQuote);
    expect(updateQuote.name).toEqual(quote.name);
    expect(updateQuote).toEqual(quote);
  });
});
