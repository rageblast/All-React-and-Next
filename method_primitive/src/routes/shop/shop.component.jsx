import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../store/shop/shop.action';

// import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../category/category.container';

class ShopPage extends React.component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    return (
      <Routes>
        <Route index element={<CollectionsOverview />} />
        <Route path=":collectionId" element={<CollectionPageContainer />} />
      </Routes>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
