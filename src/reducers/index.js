import { combineReducers } from 'redux';
import quotes from './quoteReducer';
import customers from './customerReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

/**
 * Root reducer declaration
 * Any new reducer need to register here with naming convention:
 * childReducer will be childs (pluralize)
 * Ex: customerReducer => customers
 * Reason: Conveience and self declarative access in mapStateToProps methods
 */
const rootReducer = combineReducers({
  quotes,
  customers,
  ajaxCallsInProgress,
});

export default rootReducer;
