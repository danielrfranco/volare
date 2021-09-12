import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import toMoney from 'number-to-money';

const Search = ({ reservation }) => {
  const [flightSchedule, setFlightSchedule] = useState();
  const [flights, setFlights] = useState([]);

  const dateOptions = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  const date = reservation.date.toLocaleDateString('es', dateOptions);

  useEffect(() => {
    const getRandomTime = () => {
      const hrs = Math.round(Math.random() * (18 - 6) + 6);
      const mins = Math.round(Math.random() * 60);
      return {
        hour: String(hrs).padStart(2, '0'),
        min: String(mins).padStart(2, '0'),
      };
    };
    const getRandomAirline = () => {
      const airlines = [
        'Delta',
        'American Airlines',
        'Aeroméxico',
        'Viva Aerobus',
      ];
      const randomIndex = Math.round(Math.random() * (airlines.length - 1));
      return airlines[randomIndex];
    };
    const getRandomPrice = () => 1000 + Math.round(Math.random() * 1500);

    const flightArray = [];
    for (let index = 0; index < 8; index += 1) {
      const flightObject = {
        takeoff: `${getRandomTime().hour}:${getRandomTime().min}`,
        landing: `${String(Number(getRandomTime().hour) + 3).padStart(2, '0')}:${getRandomTime().min}`,
        airline: getRandomAirline(),
        price: getRandomPrice(),
      };
      flightArray.push(flightObject);
    }
    setFlights(flightArray);
  }, []);

  return (
    <div className="search">
      <div className="container">
        <div className="schedules-grid">

          <div className="details">
            <div className="meta">
              <span>Origen:</span>
              {reservation.origin}
            </div>
            <div className="meta">
              <span>Destino:</span>
              {reservation.destination}
            </div>
            <div className="meta">
              <span>Asientos:</span>
              {reservation.seats}
            </div>
          </div>

          <div className="available">
            <h2>
              {'Vuelos para fecha: '}
              <span>{date}</span>
            </h2>
            <div className="flights">
              {flights.map((flight, index) => (
                <div
                  className="flightCard"
                  role="button"
                  onKeyDown={() => {}}
                  onFocus={() => {}}
                  tabIndex={index}
                  onClick={() => {
                    setFlightSchedule({
                      ...flight,
                    });
                  }}
                >
                  <div className="flightSchedule">

                    <div className="airline">
                      {flight.airline}
                    </div>
                    <div className="takeoff">
                      <span>{reservation.origin}</span>
                      {flight.takeoff}
                    </div>
                    <ArrowRightAltIcon />
                    <div className="landing">
                      <span>{reservation.destination}</span>
                      {flight.landing}
                    </div>
                  </div>

                  <div className="price">
                    MXN$
                    {' '}
                    <span>{toMoney(flight.price)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {flightSchedule && (
        <div className="confirm">
          <div className="container">
            <p>¿Listo para agregar al carrito?</p>
            <button type="button" className="continueBtn">Agregar al carrito</button>
          </div>
        </div>
      )}
    </div>
  );
};

Search.propTypes = {
  reservation: PropTypes.shape({
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    seats: PropTypes.number.isRequired,
  }),
};

const mapStateToProps = (({ reservation }) => ({
  reservation,
}));

export default connect(mapStateToProps)(Search);
