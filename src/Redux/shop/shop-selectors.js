import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const selectShopCollections = createSelector(
	[selectShop],
	(shop)=>shop.collections
)

const selectShopCollectionsForPreview = createSelector(
	[selectShopCollections],
	(collections)=> Object.keys(collections).map(key => collections[key])
	)
const selectShopCollection = collectionID => createSelector(
	[selectShopCollections],
	(collections) => collections[collectionID]
)

export {selectShopCollections,selectShopCollection,selectShopCollectionsForPreview};