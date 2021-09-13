import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlightCard } from '../../components';

const Confirmation = ({
  name,
  lastName,
  address,
  email,
  reservations,
}) => (
  <div className="confirmation">
    <div className="container">
      <div className="confirmationTitle">
        <h1>Tu compra ha sido confirmada ¡Gracias!</h1>
        <h3>Consulta los detalles de tu compra</h3>
      </div>

      <div className="confirmationData">
        <div className="buyerDetails">
          <label>
            Nombre completo:
            <span>{`${name} ${lastName}`}</span>
          </label>
          <label>
            Dirección:
            <span>{address}</span>
          </label>
          <label>
            Email:
            <span>{email}</span>
          </label>
        </div>

        <div className="flights">
          <h3>Reservaciones</h3>
          {reservations.map((flight) => (
            <FlightCard
              flight={flight}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

Confirmation.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
  reservations: PropTypes.array,
};

const mapStateToProps = (({
  order: {
    name, lastName, address, email, reservations,
  },
}) => ({
  name,
  lastName,
  address,
  email,
  reservations,
}));

export default connect(mapStateToProps)(Confirmation);
