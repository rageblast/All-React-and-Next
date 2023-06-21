import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../store/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.container';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

//above is written like the below one
// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));
// to make it more read able we use the above methods
// compose it will pass the value to the multiple functions

export default CollectionsOverviewContainer;
