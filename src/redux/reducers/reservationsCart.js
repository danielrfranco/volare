const reservationsCart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RESERVATION':
      return [
        ...state,
        action.reservation,
      ];
    default:
      return state;
  }
};

export default reservationsCart;
