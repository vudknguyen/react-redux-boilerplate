import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
 * Reducer for handling customer actions
 * Warning: state is immutable, any state modification required to create new state
 */
export default function customerReducer(state = initialState.customers, action) {
  switch (action.type) {
    case types.LOAD_CUSTOMERS_SUCCESS:
      return action.customers;

    default:
      return state;
  }
}
