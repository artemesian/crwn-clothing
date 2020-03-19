import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../CollectionItem/CollectionItem.js';

import {selectShopCollection} from '../../Redux/shop/shop-selectors.js';

import './CollectionPage.scss';

const CollectionPage = ({collection}) => {
	 const { title, items } = collection;
  return (
    <div className="collection-page">
    	<h2 className="title">{title}</h2>
    	<div className="items">
    	{
    		items.map(item => <CollectionItem key={item.id} item={item}/>)
    	}
    	</div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
	collection: selectShopCollection(ownProps.match.params.collectionPageID)(state),
})

export default connect(mapStateToProps)(CollectionPage);