import * as types from './actionTypes';
import customerApi from './../api/mockCustomerApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadCustomerSuccess(customers) {
  return { type: types.LOAD_CUSTOMERS_SUCCESS, customers };
}

export function loadCustomers() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return customerApi.getAllCustomers().then((customers) => {
      dispatch(loadCustomerSuccess(customers));
    }).catch((error) => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
