import React from 'react';

import './ShopPage.scss';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview.js'
import SHOP_DATA from './SHOP_DATA.js'

export default class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections:SHOP_DATA
		}
	}

	render() {
		const {collections} = this.state;
		return (
			<div>
			{
				collections.map(({id, ...otherCollectionProps})=>
				<CollectionPreview key={id} {...otherCollectionProps}/>)
			}
			</div>
		);
	}
}
