import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/MainImage.css';

class MainImage extends Component {
	
	render() {
		return (
			<div className="mainImage">
				<img src={this.props.src} alt="main" />
			</div>
		);
	}
}

MainImage.propTypes = {
	src: PropTypes.string.isRequired,
};

export default MainImage;