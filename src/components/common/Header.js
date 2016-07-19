import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
const Header = ({ loading }) => (
  <nav>
    <IndexLink to="/" activeClassName="active">Home</IndexLink>
    {" | "}
    <Link to="/about" activeClassName="active">About</Link>
    {" | "}
    <Link to="/quotes" activeClassName="active">Quotes</Link>
    {loading && <LoadingDots interval={300} dots={20} />}
  </nav>
);

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Header;
