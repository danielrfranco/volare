import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { FlightCard } from '../../components';
import { addReservationToCart, emptyReservation } from '../../redux/actions';
import * as URLS from '../../urls';

const Search = ({ history, dispatch, reservation }) => {
  const [flightSchedule, setFlightSchedule] = useState();
  const [flights, setFlights] = useState([]);

  const dateOptions = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };

  const handleSubmit = () => {
    const newFlightSchedule = {
      date: reservation.date,
      seats: reservation.seats,
      ...flightSchedule,
    };
    dispatch(addReservationToCart(newFlightSchedule));
    dispatch(emptyReservation());
    history.push(URLS.HOME);
  };

  useEffect(() => {
    const getRandomTime = () => {
      const hour = Math.round(Math.random() * (18 - 6) + 6);
      const min = Math.round(Math.random() * 60);
      return {
        hour,
        min,
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
      const takeoff = getRandomTime();
      const landing = {
        hour: (takeoff.hour + 3) < 24 ? takeoff.hour + 3 : 23,
        min: (takeoff.min + 20) < 60 ? takeoff.min + 20 : 58,
      };
      const flightObject = {
        id: crypto.randomUUID(),
        takeoff: `${String(takeoff.hour).padStart(2, '0')}:${String(takeoff.min).padStart(2, '0')}`,
        landing: `${String(landing.hour).padStart(2, '0')}:${String(landing.min).padStart(2, '0')}`,
        airline: getRandomAirline(),
        price: getRandomPrice(),
        origin: reservation.origin,
        destination: reservation.destination,
      };
      flightArray.push(flightObject);
    }
    setFlights(flightArray);
  }, []);

  return (
    <div className="search">
      <div className="container">
        <div className="schedules-grid">

          {reservation.origin && reservation.destination && reservation.seats ? (
            <>
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
                  {reservation.date && (
                    <span>{reservation.date.toLocaleDateString('es', dateOptions)}</span>
                  )}
                </h2>
                <div className="flights">
                  {flights.map((flight, index) => (
                    <FlightCard
                      flight={flight}
                      className={(flightSchedule?.id === flight.id) ? 'selected' : ''}
                      role="button"
                      onKeyDown={() => {}}
                      onFocus={() => {}}
                      tabIndex={index}
                      onClick={() => {
                        setFlightSchedule({
                          ...flight,
                        });
                      }}
                    />
                  ))}
                </div>
              </div>
            </>
          )
            : (
              <div className="emptyState">

                <h2>No haz hecho una búsqueda aún</h2>
                <Link to={URLS.HOME}>
                  <button type="button" className="backBtn">Ir al Inicio</button>
                </Link>
              </div>
            )}

        </div>
      </div>

      {flightSchedule && (
        <div className="confirm">
          <div className="container">
            <p>¿Listo para agregar al carrito?</p>
            <button type="button" className="continueBtn" onClick={handleSubmit}>Agregar al carrito</button>
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
  dispatch: PropTypes.func,
  history: PropTypes.any,
};

const mapStateToProps = (({ reservation }) => ({
  reservation,
}));

export default withRouter(connect(mapStateToProps)(Search));
