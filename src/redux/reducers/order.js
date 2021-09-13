const order = (state = {}, action) => {
  switch (action.type) {
    case 'COMPLETE_ORDER':
      return {
        ...state,
        status: 'complete',
        name: action.name,
        lastName: action.lastName,
        address: action.address,
        email: action.email,
        reservations: action.reservations,
      };
    default:
      return state;
  }
};

export default order;
