import React, { PropTypes } from 'react';
import QuoteListRow from './QuoteListRow';

const QuoteList = ({ quotes }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Author</th>
      </tr>
    </thead>
    <tbody>
      {quotes.map(quote =>
        <QuoteListRow key={quote.id} quote={quote} />
      )}
    </tbody>
  </table>
);

QuoteList.propTypes = {
  quotes: PropTypes.array.isRequired,
};

export default QuoteList;
