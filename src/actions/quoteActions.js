import * as types from './actionTypes';
import quoteApi from './../api/mockQuoteApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadQuotesSuccess(quotes) {
  return { type: types.LOAD_QUOTES_SUCCESS, quotes };
}

export function updateQuoteSuccess(quote) {
  return { type: types.UPDATE_QUOTE_SUCCESS, quote };
}

export function createQuoteSuccess(quote) {
  return { type: types.CREATE_QUOTE_SUCCESS, quote };
}

export function loadQuotes() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return quoteApi.getAllQuotes().then((quotes) => {
      dispatch(loadQuotesSuccess(quotes));
    }).catch((error) => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}


export function saveQuote(quote) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return quoteApi.saveQuote(quote).then(savedQuote => {
      if (quote.id) {
        dispatch(updateQuoteSuccess(savedQuote));
      } else {
        dispatch(createQuoteSuccess(savedQuote));
      }
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
