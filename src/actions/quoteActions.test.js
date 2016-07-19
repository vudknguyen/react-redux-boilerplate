import expect from 'expect';
import * as types from './actionTypes';
import * as quoteActions from './quoteActions';

import thunk from 'redux-thunk';
import nock from 'nock';
import configuredMockStore from 'redux-mock-store';

// Testing actions
describe('Quote Actions', () => {
  describe('createQuoteSuccess', () => {
    it('should create a CREATE_QUOTE_SUCCESS action', () => {
      // Arrage
      const quote = { id: 'test-quote', name: 'Quote name' };
      const expectedAction = {
        type: types.CREATE_QUOTE_SUCCESS,
        quote,
      };

      // Act
      const action = quoteActions.createQuoteSuccess(quote);

      // Assert
      expect(action).toEqual(expectedAction);
    });
  });
});

// Testing thunk for async call
const middleware = [thunk];
const mockStore = configuredMockStore(middleware);

describe('Async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_QUOTE_SUCCESS when loading quote', (done) => {
    // Here's example call to nock
    // nock('http://example.com')
    //    .get('/quote')
    //    .reply(200, {body: { quote: [{ id: 'quote-id', name: 'sample quote'}] }});

    const expectedAction = [
      { type: types.BEGIN_AJAX_CALL },
      { type: types.LOAD_QUOTES_SUCCESS },
    ];

    const store = mockStore({ quotes: [] }, expectedAction);
    store.dispatch(quoteActions.loadQuotes()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_QUOTES_SUCCESS);
      done();
    });
  });
});
