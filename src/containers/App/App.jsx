import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
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
      <NavBar />
    </div>
  );
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
