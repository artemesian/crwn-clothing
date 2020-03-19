import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../MenuItem/MenuItem.js'
import { selectDirectorySections } from '../../Redux/directory/directory-selectors.js';

import './Directory.scss';

const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
				{sections.map(({id, ...otherMenuProps})=>(
					<MenuItem key={id} {...otherMenuProps}/>
				))}
		</div>
  )
}

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);