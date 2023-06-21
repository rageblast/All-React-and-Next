import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../store/cart/cart.action';
import { selectCartItemsCount } from '../../store/cart/cart.selector';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { createStructuredSelector } from 'reselect';

import { CartIconContainer, ItemCount } from './cart-icon.styles';

class CartIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { toggleCartHidden, itemCount } = this.props;
    return (
      <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <ItemCount>{itemCount}</ItemCount>
      </CartIconContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
