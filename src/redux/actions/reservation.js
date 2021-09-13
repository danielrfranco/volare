export const createReservation = (reservation) => ({
  type: 'CREATE_RESERVATION',
  origin: reservation.origin,
  destination: reservation.destination,
  date: reservation.date,
  seats: reservation.seats,
});

export const emptyReservation = () => ({
  type: 'EMPTY_RESERVATION',
});
