import React, { Component } from 'react';
import { connect } from 'react-redux';
import Webcam from 'react-webcam';
import Logistics from './logistics';
import RaisedButton from 'material-ui/RaisedButton';
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
    	this.props.sendImgStr(imageSrc);
    };

	render() {
		return(
			<div>
				<Webcam 
					audio={false}
					height={400}
					width={400}
					ref={this.setRef}
					ref={this.setRef}
			        screenshotFormat="image/jpeg"
			        style={{marginBottom: '-30px'}}
				/>
				<div className="center">
					<RaisedButton onClick={this.capture}>
						Emotion?
					</RaisedButton>
				</div>
				<div>
					<Logistics />
				</div>
			</div>
		);
	}
}

export default connect(null, actions)(Camera);