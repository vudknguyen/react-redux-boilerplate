import expect from 'expect';
import { customersFormattedForDropdown } from './selectors';

describe('Customer Selectors', () => {
  describe('customersFormattedForDropdown', () => {
    it('should return customer data formatted for us in dropdown', () => {
      const customers = [
        { id: 'test-customer-1', firstName: 'Joe', lastName: 'Dave' },
        { id: 'test-customer-2', firstName: 'David', lastName: 'Beckham' },
      ];

      const expected = [
        { value: 'test-customer-1', text: 'Joe Dave' },
        { value: 'test-customer-2', text: 'David Beckham' },
      ];

      expect(customersFormattedForDropdown(customers)).toEqual(expected);
    });
  });
});
