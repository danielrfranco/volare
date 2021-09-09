const reservations = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_CITIES':
      return {
        ...state,
        cities: [
          ...action.cities,
        ],
      };
    default:
      return state;
  }
};

export default reservations;
