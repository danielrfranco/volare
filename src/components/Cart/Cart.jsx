import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Cart = ({ reservationsCart = [] }) => {
  const reservationsCounter = reservationsCart.length;

  return (
    <button type="button" className="cart">
      <ShoppingCartIcon />
      {reservationsCounter > 0 && (
        <div className="counter">
          {reservationsCounter}
        </div>
      )}
    </button>
  );
};

Cart.propTypes = {
  reservationsCart: PropTypes.array,
};

const mapStateToProps = ({ reservationsCart }) => ({
  reservationsCart,
});

export default connect(mapStateToProps)(Cart);
