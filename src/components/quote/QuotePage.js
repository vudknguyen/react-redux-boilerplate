import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import QuoteList from './QuoteList';

class QuotePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddQuotePage = this.redirectToAddQuotePage.bind(this);
  }

  redirectToAddQuotePage() {
    browserHistory.push('/quote');
  }

  render() {
    const { quotes } = this.props;

    return (
      <div>
        <h1>Quotes</h1>
        <input
          type="submit"
          value="Add Quote"
          className="btn btn-primary"
          onClick={this.redirectToAddQuotePage}
        />
        <QuoteList quotes={quotes} />
      </div>
    );
  }
}

QuotePage.propTypes = {
  quotes: PropTypes.array.isRequired,
};

/**
 * Map state to props
 * @param state: Represent state in redux store
 * @param ownProps optional: Props being attach to this component
 */
function mapStateToProps(state) {
  return {
    quotes: state.quotes, // Refer to quotes in root reducers
  };
}

// Omit mapDispatchToProps param function
// this component automatically get dispatch attached
export default connect(mapStateToProps)(QuotePage);
