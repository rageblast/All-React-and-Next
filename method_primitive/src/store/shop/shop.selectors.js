import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

//old

// export const selectCollectionsForPreview = createSelector(
//     [selectCollections],
//     collections => Object.keys(collections).map(key => collections[key])
//   );

//new

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

//changed inside shop data so i commented below
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     women: 4,
//     mens: 5
// }

//https://www.kirupa.com/html5/hashtables_vs_arrays.htm
//objects > array (search)

//old
// export const selectCollection = memoize((collectionUrlParam) =>
// createSelector(
//   [selectCollections],
//   (collections) => collections[collectionUrlParam]
// )
// );

//new

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
