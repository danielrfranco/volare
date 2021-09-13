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
    case 'EMPTY_RESERVATION':
      return {};
    default:
      return state;
  }
};

export default reservation;
