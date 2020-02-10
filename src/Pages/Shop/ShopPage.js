import React from 'react';
import './ShopPage.scss';
import SHOP_DATA from './SHOP_DATA.js'

export default class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collection:SHOP_DATA
		}
	}

	render() {
		return (
			<div>
				SHOP PAGE
			</div>
		);
	}
}
