import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import toMoney from 'number-to-money';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { removeReservationFromCart } from '../../redux/actions';

const Reservations = ({ dispatch, reservationsCart = [] }) => {
  const dateOptions = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };

  const total = reservationsCart.length > 0
    ? reservationsCart
      .map((item) => item.seats * item.price)
      .reduce((a, b) => a + b)
    : 0;

  return (
    <div className="reservations">
      <div className="container">
        <div className="reservations-grid">

          <div className="my-reservations">
            <h2>
              Mis reservaciones
            </h2>
            <div className="flights">
              {reservationsCart.map((flight) => (
                <div
                  className="flightCard"
                >
                  <button
                    type="button"
                    className="deleteBtn"
                    onClick={() => {
                      dispatch(removeReservationFromCart(flight.id));
                    }}
                  >
                    <DeleteIcon />
                  </button>

                  <div className="flightSchedule">
                    <div className="date">
                      {flight.date.toLocaleDateString('es', dateOptions)}
                    </div>

                    <div className="airline">
                      {flight.airline}
                    </div>
                    <div className="takeoff">
                      <span>{flight.origin}</span>
                      {flight.takeoff}
                    </div>
                    <ArrowRightAltIcon />
                    <div className="landing">
                      <span>{flight.destination}</span>
                      {flight.landing}
                    </div>
                  </div>

                  <div className="price">
                    <div className="small">{`${flight.seats} asiento(s)`}</div>

                    <div className="amout">
                      MXN$
                      {' '}
                      <span>{toMoney(flight.price)}</span>
                      {' '}
                      c/u
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="detail">

            <div className="total">
              <div className="text">Total:</div>
              <div className="amount">
                {'MXN$ '}
                <span>{toMoney(total)}</span>
              </div>
            </div>

            <Formik
              initialValues={{
                name: '', lastName: '', address: '', email: '',
              }}
              validationSchema={Yup.object({
                name: Yup.string().min(2, 'Nombre demasiado corto').required('Requerido'),
                lastName: Yup.string().min(2, 'Apellido demasiado corto').required('Requerido'),
                address: Yup.string().min(5, 'Dirección demasiado corta').required('Requerido'),
                email: Yup.string().email('Formato de correo incorrecto').required('Requerido'),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (

                <Form className="detail-form">
                  <h3>Ingresa tus datos para completar la compra</h3>
                  <div className="inputs-wrapper">

                    <label>
                      Nombre
                      <Field name="name" />
                      <ErrorMessage name="name" />
                    </label>
                    <label>
                      Apellido
                      <Field name="lastName" />
                      <ErrorMessage name="lastName" />
                    </label>
                  </div>

                  <div className="inputs-wrapper">
                    <label>
                      Dirección
                      <Field name="address" />
                      <ErrorMessage name="address" />
                    </label>
                  </div>
                  <div className="inputs-wrapper">
                    <label>
                      Correo electrónico
                      <Field name="email" />
                      <ErrorMessage name="email" />
                    </label>
                  </div>

                  <button type="submit" className="submit" disabled={isSubmitting}>Comprar</button>

                </Form>
              )}
            </Formik>
          </div>

        </div>
      </div>

    </div>
  );
};

Reservations.propTypes = {
  reservationsCart: PropTypes.array,
  dispatch: PropTypes.func,
};

const mapStateToProps = (({ reservationsCart }) => ({
  reservationsCart,
}));

export default withRouter(connect(mapStateToProps)(Reservations));
