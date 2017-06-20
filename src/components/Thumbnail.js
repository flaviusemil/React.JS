import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Thumbnail.css';

class Thumbnail extends Component {
	
	render() {
		
		const { index, url, onThumbClick, isSelected } = this.props;
		
		let className = "thumbnail";
		
		if (isSelected) {
			className += " selected";
		}
		
		return (
			<img
				src={url} 
				className={className} 
				alt="thumb" 
				onClick={() => {onThumbClick(index);}}
			/>
		);
	}
}

Thumbnail.propTypes = {
	index: PropTypes.number.isRequired,
	url: PropTypes.string.isRequired,
	onThumbClick: PropTypes.func,
	isSelected: PropTypes.bool,
}

Thumbnail.defaultProps = {
	onThumbClick: () => {},
	isSelected: false,
}

export default Thumbnail;