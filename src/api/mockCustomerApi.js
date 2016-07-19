import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const customers = [
  {
    id: 'cory-house',
    firstName: 'Cory',
    lastName: 'House',
  },
  {
    id: 'scott-allen',
    firstName: 'Scott',
    lastName: 'Allen',
  },
  {
    id: 'dan-wahlin',
    firstName: 'Dan',
    lastName: 'Wahlin',
  },
];

// This would be performed on the server in a real app. Just stubbing in.
const generateId = (customer) =>  
  `${customer.firstName.toLowerCase()}-${customer.lastName.toLowerCase()}`;

class CustomerApi {
  static getAllCustomers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], customers));
      }, delay);
    });
  }

  static saveCustomer(customer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCustomerNameLength = 3;
        if (customer.firstName.length < minCustomerNameLength) {
          reject(`First Name must be at least ${minCustomerNameLength} characters.`);
        }

        if (customer.lastName.length < minCustomerNameLength) {
          reject(`Last Name must be at least ${minCustomerNameLength} characters.`);
        }

        if (customer.id) {
          const existingCustomerIndex = customers.findIndex(a => a.id === customer.id);
          customers.splice(existingCustomerIndex, 1, customer);
        } else {
          // Just simulating creation here.
          // Cloning so copy returned is passed by value rather than by reference.
          customer.id = generateId(customer); // eslint-disable-line no-param-reassign
          customers.push(customer);
        }

        resolve(Object.assign({}, customer));
      }, delay);
    });
  }

  static deleteCustomer(customerId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const indexOfCustomerToDelete = customers.findIndex(c => c.id === customerId);
        customers.splice(indexOfCustomerToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CustomerApi;
