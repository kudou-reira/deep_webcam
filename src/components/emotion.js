import React, { Component } from 'react';
import { connect } from 'react-redux';

const divStyle = {
  marginLeft: '20px',
  marginTop: '50px'
};

const picStyle = {
	marginTop: '20px'
};

const imgStyle = {
	width: 350,
	height: 262.5
};

class Emotion extends Component {
	// render backwards from end to front
	constructor(props) {
		super(props);
	}

	renderEmotion() {
		if(this.props.emotion.emotion_results !== undefined) {
			console.log("this is props", this.props.emotion.emotion_results);
			if(this.props.emotion.emotion_results.length !== 0) {
				return(
					<div style={divStyle}>
						Emotion Results:
						<div className="detail">
							{this.renderDetails()}
						</div>
					</div>
				)
			}
		}
	}

	renderDetails() {
		var tempEmotion = [];
		tempEmotion = this.props.emotion.emotion_results.slice(0).reverse().map((emotion) => {
			var append = 'data:image/jpeg;base64,'
			return(
				<div style={picStyle}>
					<img 
						src={append + emotion.sample_image}
						style={imgStyle}
					/>
					<div className="centerSpace">
						<div>
							Emotion: {emotion.emotion_result}				
						</div>
						<div>
							Probability: {emotion.emotion_probability*100}%
						</div>
					</div>
				</div>
			)
		})
		return tempEmotion;
	}


	render(){
		// console.log("this is props", this.props.emotion);
		return(
			<div>
				<div>
					{this.renderEmotion()}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		emotion: state.webcam
	}
}

export default connect(mapStateToProps, null)(Emotion);