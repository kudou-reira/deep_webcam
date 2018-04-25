import React, { Component  } from 'react';
import Camera from './camera';

class App extends Component {

	render(){
		return (
			<div className="container">
				<div className="center">
					<Camera />
				</div>
			</div>
		);
	}
};

export default App;