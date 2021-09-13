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
