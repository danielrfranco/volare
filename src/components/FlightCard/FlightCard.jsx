import React from 'react';
import toMoney from 'number-to-money';
import PropTypes from 'prop-types';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import DeleteIcon from '@material-ui/icons/Delete';

const FlightCard = ({
  flight, className = '', onDelete, ...otherProps
}) => {
  const dateOptions = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  return (
    <div
      {...otherProps}
      className={`flightCard ${className}`}
    >

      <div className="flightSchedule">
        {flight.date && (
          <div className="date">
            {flight.date.toLocaleDateString('es', dateOptions)}
          </div>
        )}

        {onDelete && (
          <button
            type="button"
            className="deleteBtn"
            onClick={onDelete}
          >
            <DeleteIcon />
          </button>
        )}

        {flight.airline && (
          <div className="airline">
            {flight.airline}
          </div>
        )}

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
        {flight.seats && (
          <div className="small">{`${flight.seats} asiento(s)`}</div>
        )}

        <div className="amout">
          MXN$
          {' '}
          <span>{toMoney(flight.price)}</span>
          {' '}
          c/u
        </div>

      </div>
    </div>
  );
};

FlightCard.propTypes = {
  flight: PropTypes.object,
  onDelete: PropTypes.func,
  className: PropTypes.string,
};

export default FlightCard;
