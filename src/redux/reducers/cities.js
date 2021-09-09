const cities = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_CITIES':
      return [
        ...action.cities,
      ];
    default:
      return state;
  }
};

export default cities;
