import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../store/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionItemsContainer,
  CollectionTitle,
} from './category.styles';

class CollectionPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { collection } = this.props;
    const { title, items } = collection;
    return (
      <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </CollectionItemsContainer>
      </CollectionPageContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
