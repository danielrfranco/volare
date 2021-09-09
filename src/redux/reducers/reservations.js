const reservations = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_RESERVATION':
      return {
        ...state,
        reservation: {
          origin: action.origin,
          destiny: action.destiny,
          time: action.time,
          seats: action.seats,
        },
      };
    default:
      return state;
  }
};

export default reservations;
