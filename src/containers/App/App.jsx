import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { populateCities } from '../../redux/actions';
import { NavBar } from '../../components';

const App = ({ dispatch }) => {
  useEffect(async () => {
    const getCities = async () => {
      try {
        const citiesResponse = await axios.get('https://restcountries.eu/rest/v2/region/americas?fields=name;capital');
        return citiesResponse.data;
      } catch (error) {
        return 0;
      }
    };

    const cities = await getCities();
    dispatch(populateCities(cities));
  }, []);

  return (
    <div className="app">
      <Router>
        <NavBar />

        <Switch>
          <Route path="/home">
            home
          </Route>
          <Route path="/search-results">
            results
          </Route>
          <Route path="/buy">
            buy
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
