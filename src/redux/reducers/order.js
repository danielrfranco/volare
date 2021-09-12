const order = (state = {}, action) => {
  const { reservationsCart = [] } = state;
  switch (action.type) {
    case 'ADD_RESERVATION':
      return {
        ...state,
        reservationsCart: [
          ...reservationsCart,
          action.reservation,
        ],
      };
    case 'REMOVE_RESERVATION': {
      const newArray = reservationsCart.filter((obj) => obj.id !== action.reservationId);
      return {
        ...state,
        reservationsCart: [
          ...newArray,
        ],
      };
    }
    default:
      return state;
  }
};

export default order;
