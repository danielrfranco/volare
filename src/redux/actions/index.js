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
