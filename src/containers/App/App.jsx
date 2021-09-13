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
import Reservations from '../Reservations/Reservations';
import Confirmation from '../Confirmation/Confirmation';
import { populateDestinations } from '../../redux/actions';
import { NavBar, Cart } from '../../components';
import * as URLS from '../../urls';

import Logo from '../../images/logo_white.png';

const App = ({
  dispatch, cart = [],
}) => {
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
        <header className="container">
          <div className="head">
            <Link to={URLS.HOME}>
              <img src={Logo} alt="Volare" className="logo" />
            </Link>
            <Link to={URLS.RESERVATIONS}>
              <Cart items={cart.length} />
            </Link>
          </div>
        </header>
        <NavBar />

        <Switch>
          <Route path={URLS.SEARCH}>
            <Search />
          </Route>
          <Route path={URLS.RESERVATIONS}>
            <Reservations />
          </Route>
          <Route path={URLS.CONFIRMATION}>
            <Confirmation />
          </Route>
          <Route path={URLS.HOME}>
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (({ cart }) => ({
  cart,
}));

export default connect(mapStateToProps)(App);
