export const populateCities = (cities) => ({
  type: 'CREATE_CITIES',
  cities,
});

export const createReservation = (reservation) => ({
  type: 'CREATE_RESERVATION',
  origin: reservation.origin,
  destiny: reservation.destiny,
  time: reservation.time,
  seats: reservation.seats,
});
