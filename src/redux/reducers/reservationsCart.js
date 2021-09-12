const reservationsCart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RESERVATION':
      return [
        ...state,
        action.reservation,
      ];
    case 'REMOVE_RESERVATION': {
      const newArray = state.filter((obj) => obj.id !== action.reservationId);
      return [
        ...newArray,
      ];
    }
    default:
      return state;
  }
};

export default reservationsCart;
