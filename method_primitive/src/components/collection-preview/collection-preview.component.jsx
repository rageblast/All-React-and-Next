import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './collection-preview.styles';

class CollectionPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, items } = this.props;
    return (
      <CategoryPreviewContainer>
        <h2>
          <Title to={title}>{title.toUpperCase()}</Title>
        </h2>
        <Preview>
          {items
            .filter((item, idx) => idx < 4)
            .map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
        </Preview>
      </CategoryPreviewContainer>
    );
  }
}

export default CollectionPreview;
