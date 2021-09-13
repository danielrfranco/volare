import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Cart = ({ items = 0 }) => (
  <div type="button" className="cart">
    <ShoppingCartIcon />
    {items > 0 && (
    <div className="counter">
      {items}
    </div>
    )}
  </div>
);

Cart.propTypes = {
  items: PropTypes.number,
};

export default Cart;
