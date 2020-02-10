import React from 'react';

import './CollectionItem.scss'

const CollectionItem = ({name,imageUrl,price}) => {
  return (
    <div className="collection-item">
    	<div className="image"
    		style = {{
    			backgroundImage: `url(${imageUrl})`}}
    	/>
    	<div className="item-footer">
    		<span className="name">{name}</span>
    		<span className="price">{price}</span>
    	</div>
    </div>
  )
}

export default CollectionItem;