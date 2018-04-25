import { combineReducers } from 'redux';
import webcamReducer from './webcamReducer';

export default combineReducers({
	webcam: webcamReducer
});
