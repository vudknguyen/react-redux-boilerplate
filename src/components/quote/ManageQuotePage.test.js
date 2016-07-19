import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { ManageQuotePage } from './ManageQuotePage';

describe('Manage Quote Page', () => {
  it('sets error message when trying to save empty name', () => {
    const props = {
      customers: [],
      quote: { id: '', name: '', customerId: '' },
      actions: { saveQuote: () => Promise.resolve() },
    };

    const wrapper = mount(<ManageQuotePage {...props} />);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.name).toBe('Name must be at least 5 characters');
  });
});
