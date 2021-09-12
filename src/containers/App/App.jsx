import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Home from '../Home/Home';
import Search from '../Search/Search';
import { populateDestinations } from '../../redux/actions';
import { NavBar } from '../../components';
import * as URLS from '../../urls';

import Logo from '../../images/logo_white.png';

const App = ({ dispatch }) => {
  useEffect(async () => {
    const getDestinations = async () => {
      try {
        const destinationsResponse = await axios.get('https://restcountries.eu/rest/v2/region/americas?fields=name;capital;alpha2Code');
        return destinationsResponse.data;
      } catch (error) {
        return 0;
      }
    };

    const destinations = await getDestinations();
    dispatch(populateDestinations(destinations.map((country) => ({
      country: country.name,
      city: country.capital,
    }))));
  }, []);

  return (
    <div className="app">
      <Router>
        <div className="container">
          <Link to={URLS.BASE}>
            <img src={Logo} alt="Volare" className="logo" />
          </Link>
        </div>
        <NavBar />

        <Switch>
          <Route path={URLS.SEARCH}>
            <Search />
          </Route>
          <Route path="/buy">
            <Search />
          </Route>
          <Route path={URLS.BASE}>
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
