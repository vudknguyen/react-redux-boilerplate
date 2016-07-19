import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import QuotePage from './components/quote/QuotePage';
import ManageQuotePage from './components/quote/ManageQuotePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="quotes" component={QuotePage} />
    <Route path="quote" component={ManageQuotePage} />
    <Route path="quote/:id" component={ManageQuotePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
