const order = (state = {}, action) => {
  const { reservationsCart = [] } = state;
  switch (action.type) {
    case 'ADD_RESERVATION':
      return {
        ...state,
        status: 'pending',
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
    case 'PAY_ORDER':
      return {
        ...state,
        status: 'payed',
        name: action.name,
        lastName: action.lastName,
        address: action.address,
        email: action.email,
      };
    default:
      return state;
  }
};

export default order;
