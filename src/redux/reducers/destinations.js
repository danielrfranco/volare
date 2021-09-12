const destinations = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_DESTINATIONS':
      return [
        ...action.destinations,
      ];
    default:
      return state;
  }
};

export default destinations;
