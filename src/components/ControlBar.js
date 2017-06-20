import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button'

class ControlBar extends Component {
	
	render() {
		return (
			<div className="controlBar">
				<Button type="previous" onButtonClick={this.props.onPrev} children="Previous" />
				<Button type="next" onButtonClick={this.props.onNext} children="Next" />
			</div>
		);
	}
}

//TODO: Fix button onClick

ControlBar.propTypes = {
	onNext: PropTypes.func,
	onPrev: PropTypes.func,
};

export default ControlBar;