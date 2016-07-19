import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const QuoteForm = ({ quote, allCustomers, onSave, onChange, saving, errors }) => (
  <form>
    <h1>Manage Quote</h1>
    <TextInput 
      name="name" 
      label="Name" 
      value={quote.name} 
      onChange={onChange} 
      error={errors.name} 
    />
    <SelectInput 
      name="customerId"
      label="Customer"
      value={quote.customerId}
      defaultOption="Select Customer"
      options={allCustomers}
      onChange={onChange}
      error={errors.customerId}
    />
    <input 
      type="submit"
      disabled={saving}
      value={saving ? 'Saving...' : 'Save'}
      className="btn btn-primary"
      onClick={onSave}
    />
  </form>
);

QuoteForm.propTypes = {
  quote: PropTypes.object.isRequired,
  allCustomers: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object,
};

export default QuoteForm;
