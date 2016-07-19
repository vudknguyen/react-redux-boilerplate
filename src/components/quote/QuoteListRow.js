import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const QuoteListRow = ({ quote }) => (
  <tr>
    <td>{quote.name}</td>
    <td>{quote.customerId}</td>
    <td><Link to={`/quote/${quote.id}`} >Edit</Link></td>
  </tr>
);

QuoteListRow.propTypes = {
  quote: PropTypes.object.isRequired,
};

export default QuoteListRow;
