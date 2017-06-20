import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Button.css';

class Button extends Component {
	
	render() {
		
		const { children, onButtonClick, type } = this.props;
		
		return (
			<div className={"button " + type} onClick={onButtonClick} >
				{children}
			</div>
		);
	}
}

//TODO: Fix button onClick

Button.propTypes = {
	type: PropTypes.oneOf(['previous', 'next']),
	onButtonClick: PropTypes.func,
	children: PropTypes.string,
}

Button.defaultProps = {
	type: 'next',
	onButtonClick: () => {},
}

export default Button;