import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../CollectionPreview/CollectionPreview.js'

import { selectShopCollectionsForPreview } from '../../Redux/shop/shop-selectors.js';

import './CollectionOverview.scss';

const CollectionOverview = ({collections}) => {
  return (
    <div className="collections-overview">
			{
				collections.map(({id, ...otherCollectionProps})=>
				<CollectionPreview key={id} {...otherCollectionProps}/>)
			}
		</div>
  )
}

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);