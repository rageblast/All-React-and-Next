import React from 'react';
import { CartItemContainer, ItemDetails } from './cart-item.styles';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cartItem } = this.props;
    const { name, imageUrl, price, quantity } = cartItem;
    return (
      <CartItemContainer>
        <img src={imageUrl} alt={`${name}`} />
        <ItemDetails>
          <span>{name}</span>
          <span>
            {quantity} x ${price}
          </span>
        </ItemDetails>
      </CartItemContainer>
    );
  }
}

export default CartItem;
