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

export const emptyReservation = () => ({
  type: 'EMPTY_RESERVATION',
});

export const addReservationToCart = (reservation) => ({
  type: 'ADD_RESERVATION',
  reservation,
});

export const removeReservationFromCart = (reservationId) => ({
  type: 'REMOVE_RESERVATION',
  reservationId,
});

export const emptyCart = () => ({
  type: 'EMPTY_CART',
});

export const completeOrder = ({
  name, lastName, address, email, reservations,
}) => ({
  type: 'COMPLETE_ORDER',
  name,
  lastName,
  address,
  email,
  reservations,
});
