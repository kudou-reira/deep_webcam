import React, { Component } from 'react';
import { connect } from 'react-redux';
import Webcam from 'react-webcam';
import * as actions from '../actions';

class Camera extends Component {
	constructor(props) {
		super(props);

		this.state = {
			image: ''
		}
	}

	setRef = (webcam) => {
    	this.webcam = webcam;
  	}

  	capture = () => {
    	const imageSrc = this.webcam.getScreenshot();
    	// this.setState({ image: imageSrc }, () => {
    	// 	console.log("this is imageSrc", this.state.image);
    	// });
    	console.log("this is imgSrc", imageSrc);
    	this.props.sendImgStr(imageSrc);
    };

	render() {
		return(
			<div>
				<Webcam 
					audio={false}
					height={350}
					ref={this.setRef}
					ref={this.setRef}
			        screenshotFormat="image/jpeg"
			        width={350}
				/>
				<div className="center">
					<button onClick={this.capture}>Check your emotion</button>
				</div>
			</div>
		);
	}
}

export default connect(null, actions)(Camera);