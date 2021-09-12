export const populateDestinations = (destinations) => ({
  type: 'CREATE_DESTINATIONS',
  destinations,
});

export const createReservation = (reservation) => ({
  type: 'CREATE_RESERVATION',
  origin: reservation.origin,
  destination: reservation.destination,
  date: reservation.date,
  seats: reservation.seats,
});

export const addReservationToCart = (reservation) => ({
  type: 'ADD_RESERVATION',
  reservation,
});

export const removeReservationFromCart = (reservationId) => ({
  type: 'REMOVE_RESERVATION',
  reservationId,
});
