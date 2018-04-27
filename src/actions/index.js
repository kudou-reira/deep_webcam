import axios from 'axios';
import { SEND_IMAGE_STRING } from './types';

// http://localhost:5000/processImage
// http://172.16.21.1:5000/processImage

export const sendImgStr = (img) => async dispatch => {
	const res = await axios.post('http://172.16.21.1:5000/processImage', {
		img
	});
	dispatch({
		type: SEND_IMAGE_STRING,
		payload: res.data
	})
}