const cart = (state = [], action) => {
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
    case 'EMPTY_CART': {
      return [];
    }
    default:
      return state;
  }
};

export default cart;
