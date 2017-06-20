import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';

class ThumbnailList extends Component {
	
	render() {
		const thumbnails = this.props.imageList.map((item, index) => {
			return (
				<Thumbnail 
					key={item.id} 
					isSelected={index === this.props.selectedIndex} 
					index={index} 
					url={item.thumbnailUrl}
				/>
			);
		});
		
		return <div className="thumbnailList">{thumbnails}</div>;
	}
}

ThumbnailList.propType = {
	imageList: PropTypes.arrayOf(PropTypes.shape({
		albumId: PropTypes.number,
		id: PropTypes.number,
		thumbnailUrl: PropTypes.string,
		title: PropTypes.string,
		url: PropTypes.string,
	})),
	onThumbClick: PropTypes.func,
}

ThumbnailList.defaultProps = {
	imageList: [],
	onThumbClick: () => {},
}

export default ThumbnailList;