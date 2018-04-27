import React, { Component } from 'react';
import { connect } from 'react-redux';

const divStyle = {
  marginTop: '20px'
};

const leftStyle = {
	textAlign: 'left'
}

class Logistics extends Component {
	constructor(props) {
		super(props);
	}

	renderLogistics() {
		if(this.props.emotion.emotion_results !== undefined) {
			console.log("this is props", this.props.emotion.emotion_results);
			if(this.props.emotion.emotion_results.length !== 0) {
				return(
					<div>
						<div>
							{this.renderData()}
						</div>
					</div>
				)
			}
		}
	}

	renderData() {
		var emotions = {};
		var emotionRender = [];
		this.props.emotion.emotion_results.forEach((emotion) => {
			if(!emotions.hasOwnProperty(emotion.emotion_result)) {
				emotions[emotion.emotion_result] = 1;
				emotionRender.push(emotion.emotion_result);
			} else {
				emotions[emotion.emotion_result] += 1;
			}
		})

		const sumValues = emotions => Object.values(emotions).reduce((a, b) => a + b);
		const sum = sumValues(emotions);

		var render = emotionRender.map((emotion) => {
			return(
				<div className="centerSpace2">
					<div style={leftStyle}>
						{emotion}
					</div>
					<div>
						{emotions[emotion]} ({this.calculate(emotions[emotion], sum)})
					</div>
				</div>
			)
		})

		return render;
	}

	calculate(value, sum) {
		console.log(value);
		console.log(sum);
		var annotated = (value/sum * 100).toFixed(1);

		return annotated + "%";
	}

	render(){
		return(
			<div style={divStyle}>
				{this.renderLogistics()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		emotion: state.webcam
	}
}

export default connect(mapStateToProps, null)(Logistics);