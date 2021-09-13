export const completeOrder = ({
  name, lastName, address, email, reservations,
}) => ({
  type: 'COMPLETE_ORDER',
  name,
  lastName,
  address,
  email,
  reservations,
});
