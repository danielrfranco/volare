const reservation = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_RESERVATION':
      return {
        ...state,
        origin: action.origin,
        destination: action.destination,
        date: action.date,
        seats: action.seats,
      };
    default:
      return state;
  }
};

export default reservation;
