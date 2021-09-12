import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { createReservation } from '../../redux/actions';
import { DatePickerField } from '../../components';
import homeBlur from '../../images/home-blur.png';

import * as URLS from '../../urls';

const Home = ({ dispatch, history, destinations = [] }) => (
  <div className="home">

    <div className="form-wrapper">
      <div className="container">

        <h2>Viaja hoy con Volaré</h2>

        <Formik
          initialValues={{
            origin: '', destination: '', seats: 1, date: '',
          }}
          validationSchema={Yup.object({
            seats: Yup.number()
              .min(1, 'Debe ser al menos 1')
              .required('Requerido'),
            origin: Yup.string().required('Requerido'),
            destination: Yup.string().required('Requerido'),
            date: Yup.date().required('Requerido'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(createReservation(values));
            setSubmitting(false);
            history.push(URLS.SEARCH);
          }}
        >
          {({ isSubmitting }) => (

            <Form className="home-form">
              <div className="inputs-wrapper">
                <label>
                  Origen
                  <Field name="origin" as="select">
                    <option value="">Selecciona ciudad</option>
                    {destinations.map((destination) => (
                      <option value={`${destination.city}, ${destination.country}`}>{`${destination.city}, ${destination.country}`}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="origin" />
                </label>

                <label>
                  Destino
                  <Field name="destination" as="select">
                    <option value="">Selecciona ciudad</option>
                    {destinations.map((destination) => (
                      <option value={`${destination.city}, ${destination.country}`}>{`${destination.city}, ${destination.country}`}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="destination" />
                </label>

                <label>
                  Pasajeros
                  <Field name="seats" type="number" min={1} />
                  <ErrorMessage name="seats" />
                </label>

                <label>
                  Fecha de vuelo
                  <DatePickerField name="date" minDate={new Date()} />
                  <ErrorMessage name="date" />
                </label>

                <button type="submit" className="submit" disabled={isSubmitting}>Buscar</button>
              </div>

            </Form>
          )}
        </Formik>

      </div>

    </div>

    <img alt="Home section" src={homeBlur} className="homeBlur" />
  </div>
);

Home.propTypes = {
  destinations: PropTypes.arrayOf(PropTypes.shape({
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  })),
  dispatch: PropTypes.func,
  history: PropTypes.any,
};

const mapStateToProps = ({ destinations }) => ({
  destinations,
});

export default withRouter(connect(mapStateToProps)(Home));
