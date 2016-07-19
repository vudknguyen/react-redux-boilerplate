export function customersFormattedForDropdown(customers) {
  return customers.map(customer => ({
    value: customer.id,
    text: `${customer.firstName} ${customer.lastName}`,
  }));
}
