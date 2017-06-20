import React, { Component } from 'react';
import MainImage from './MainImage';
import ControlBar from './ControlBar';
import Button from './Button';
import ThumbnailList from './ThumbnailList';

const FEED_URL = "https://jsonplaceholder.typicode.com/photos?albumId=8";

class Slideshow extends Component {
	
	constructor() {
			super();
			
			this.state = {
				imageList: [],
				selectedIndex: 0,
			}
		}
		
		componentWillMount() {
			fetch(FEED_URL)
				.then(response => response.json())
				.then(data => {
					this.setState({
						imageList: data,
					});
				});
		}
	
	
	onImageSelect = (index) => {
		this.setState({
			selectIndex: index,
		})
	}

	onNext = () => {
		let nextIndex = this.state.selectedIndex + 1;
		
		if (nextIndex >= this.state.imageList.length) {
			nextIndex = 0;
		}
		
		this.onImageSelect(nextIndex);
	}
	
	onPrev = () => {
		let nextIndex = this.state.selectedIndex - 1;
		
		if (nextIndex < 0) {
			nextIndex = this.state.selectedIndex - 1;
		}
		
		this.onImageSelect(nextIndex);
	}
	
	render() {
		
		let noImageMessage = <h1>No images loaded yet!</h1>
		const { imageList, selectedIndex } = this.state;
			
		if (imageList.length === 0) {
			return noImageMessage;
		}
		
		return (
			<div className="slideshow">
				<MainImage src={imageList[selectedIndex].url} />
				<ThumbnailList imageList={imageList} onThumbClick={this.onImageSelect} selectedIndex={selectedIndex} />
				<ControlBar onNext={this.onNext} onPrev={this.onPrev} />
			</div>
		);
	}
}

export default Slideshow;