import React, { Component  } from 'react';
import Camera from './camera';
import Emotion from './emotion';

class App extends Component {
	render(){
		return (
			<div className="container">
				<div className="center">
					<Camera />
					<Emotion />
				</div>
			</div>
		);
	}
};

export default  App;