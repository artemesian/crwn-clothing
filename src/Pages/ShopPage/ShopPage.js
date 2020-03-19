import React from 'react';
import { Route } from 'react-router';

import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview.js';
import CollectionPage from '../../Components/CollectionPage/CollectionPage.js'

import './ShopPage.scss';

const ShopPage = ({match}) => {
  return (
    <div>
    	<Route exact path={`${match.path}`} component={CollectionOverview}/>
			<Route  path={`${match.path}/:collectionPageID`} component={CollectionPage}/>
		</div>
  )
}

export default ShopPage;