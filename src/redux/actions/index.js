export const populateDestinations = (destinations) => ({
  type: 'CREATE_DESTINATIONS',
  destinations,
});

export const createReservation = (reservation) => ({
  type: 'CREATE_RESERVATION',
  origin: reservation.origin,
  destiny: reservation.destiny,
  time: reservation.time,
  seats: reservation.seats,
});
