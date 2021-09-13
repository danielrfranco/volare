import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import toMoney from 'number-to-money';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

import { FlightCard } from '../../components';
import { removeReservationFromCart, payOrder } from '../../redux/actions';
import * as URLS from '../../urls';

const Reservations = ({
  dispatch,
  order,
  history,
}) => {
  const { reservationsCart = [] } = order;

  const total = reservationsCart.length > 0 && order.status === 'pending'
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
              {order.status === 'pending' ? reservationsCart.map((flight) => (
                <FlightCard
                  flight={flight}
                  onDelete={() => {
                    dispatch(removeReservationFromCart(flight.id));
                  }}
                />
              )) : (
                <>
                  <p>No hay nada aquí todavía</p>
                  <Link to={URLS.HOME}>
                    <button type="button" className="backBtn">Ir al Inicio</button>
                  </Link>
                </>
              )}
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
                dispatch(payOrder({ ...values }));
                history.push(URLS.CONFIRMATION);
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
  order: PropTypes.object,
  dispatch: PropTypes.func,
  history: PropTypes.any,
};

const mapStateToProps = (({ order }) => ({
  order,
}));

export default withRouter(connect(mapStateToProps)(Reservations));
