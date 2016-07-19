import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
 * Reducer for handling quote actions
 * Warning: state is immutable, any state modification required to create new state
 */
export default function quoteReducer(state = initialState.quotes, action) {
  switch (action.type) {
    case types.LOAD_QUOTES_SUCCESS:
      return action.quotes;
    
    case types.CREATE_QUOTE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.quote),
      ];
    
    case types.UPDATE_QUOTE_SUCCESS:
      // State are immutable so have to filter updated quote from state
      // then using object assign to clone new instance of quote and append to state array
      return [
        ...state.filter(quote => quote.id !== action.quote.id),
        Object.assign({}, action.quote),
      ];

    default:
      return state;
  }
}
