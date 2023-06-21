import React from 'react';
import { connect } from 'react-redux';

import CustomButton, {
  BUTTON_TYPE_CLASSES,
} from '../custom-button/custom-button.component';
import { addItem } from '../../store/cart/cart.action';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './collection-item.styles';

class CollectionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, addItem } = this.props;
    const { name, price, imageUrl } = item;

    return (
      <ProductCartContainer>
        <img src={imageUrl} alt={`${name}`} />
        <Footer>
          <Name>{name}</Name>
          <Price>{price}</Price>
        </Footer>
        <CustomButton
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={() => addItem(item)}
        >
          Add to card
        </CustomButton>
      </ProductCartContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
