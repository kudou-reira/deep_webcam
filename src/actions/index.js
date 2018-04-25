import axios from 'axios';
import { SEND_IMAGE_STRING } from './types';

export const sendImgStr = (img) => async dispatch => {
	const res = await axios.post('http://localhost:5000/processImage', {
		img
	});
	dispatch({
		type: SEND_IMAGE_STRING,
		payload: res.data
	})
}