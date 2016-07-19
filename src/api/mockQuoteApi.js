import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const quotes = [
  {
    id: 'sample-quote-cory-house-1',
    name: 'Sample quote for motor of cory house',
    customerId: 'cory-house',
  },
  {
    id: 'sample-quote-cory-house-2',
    name: 'Sample quote for motor of cory house 2',
    customerId: 'cory-house',
  },
  {
    id: 'sample-quote-cory-house-3',
    name: 'Sample quote for motor of cory house 3',
    customerId: 'cory-house',
  },
  {
    id: 'sample-quote-cory-house-4',
    name: 'Sample quote for motor of cory house 4',
    customerId: 'cory-house',
  },
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

// This would be performed on the server in a real app. Just stubbing in.
const generateId = (quote) => replaceAll(quote.name, ' ', '-');

class QuoteApi {
  static getAllQuotes() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], quotes));
      }, delay);
    });
  }

  static saveQuote(quote) {
    // to avoid manipulating object passed in.
    quote = Object.assign({}, quote); // eslint-disable-line no-param-reassign
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minQuoteNameLength = 1;
        if (quote.name.length < minQuoteNameLength) {
          reject(`Name must be at least ${minQuoteNameLength} characters.`);
        }

        if (quote.id) {
          const existingQuoteIndex = quotes.findIndex(a => a.id === quote.id);
          quotes.splice(existingQuoteIndex, 1, quote);
        } else {
          // Just simulating creation here.
          // Cloning so copy returned is passed by value rather than by reference.
          quote.id = generateId(quote); // eslint-disable-line no-param-reassign
          quotes.push(quote);
        }

        resolve(quote);
      }, delay);
    });
  }

  static deleteQuote(courseId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const indexOfCourseToDelete = quotes.findIndex(q => q.id === courseId);
        quotes.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default QuoteApi;
