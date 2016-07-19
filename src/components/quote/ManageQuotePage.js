import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as quoteActions from '../../actions/quoteActions';
import QuoteForm from './QuoteForm';
import toastr from 'toastr';
import { customersFormattedForDropdown } from '../../selectors/selectors';

export class ManageQuotePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      quote: Object.assign({}, this.props.quote),
      errors: {},
      saving: false,
    };

    this.updateQuoteState = this.updateQuoteState.bind(this);
    this.saveQuote = this.saveQuote.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.quote.id !== nextProps.quote.id) {
      // Necessaray to populate from when existing quote loaded correctly
      this.setState({ quote: Object.assign({}, nextProps.quote) });
    }
  }

  updateQuoteState(event) {
    const field = event.target.name;
    const quote = this.state.quote;
    quote[field] = event.target.value;
    return this.setState({ quote });
  }

  quoteFormIsValid() {
    let isValid = true;
    const errors = {};

    if (this.state.quote.name.length < 5) {
      errors.name = 'Name must be at least 5 characters';
      isValid = false;
    }

    this.setState({
      errors,
    });

    return isValid;
  }

  saveQuote(event) {
    event.preventDefault();

    if (!this.quoteFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.actions.saveQuote(this.state.quote)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({ saving: false });
        toastr.error(error);
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Quote saved');
    this.context.router.push('/quotes');
  }

  render() {
    return (
      <QuoteForm
        quote={this.state.quote}
        errors={this.state.errors}
        allCustomers={this.props.customers}
        onChange={this.updateQuoteState}
        onSave={this.saveQuote}
        saving={this.state.saving}
      />
    );
  }
}

ManageQuotePage.propTypes = {
  quote: PropTypes.object.isRequired,
  customers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

// Pull in the React router context
// so router is available in this.context.router
ManageQuotePage.contextTypes = {
  router: PropTypes.object,
};

function getQuoteById(quotes, id) {
  const quote = quotes.filter(q => q.id === id);
  if (quote.length) {
    // Filter returns an array, and in this array,
    // because of filter by id so it only have one element
    return quote[0];
  }
  return null;
}

/**
 * Map state to props
 * @param state: Represent state in redux store
 * @param ownProps optional: Props being attach to this component
 */
function mapStateToProps(state, ownProps) {
  const quoteId = ownProps.params.id; // From /quote/:id
  let quote = { id: '', name: '', customerId: '' };

  if (quoteId && state.quotes.length > 0) { // Make sure quotes available
    quote = getQuoteById(state.quotes, quoteId);
  }
  
  return {
    quote,
    customers: customersFormattedForDropdown(state.customers),
  };
}

/**
 * Map dispatch to props, determine what action available
 * @param dispatch injected in connect function
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(quoteActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageQuotePage);
