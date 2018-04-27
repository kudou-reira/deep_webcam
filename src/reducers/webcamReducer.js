import { SEND_IMAGE_STRING } from '../actions/types';

const INITIAL_STATE = {
	emotion_results: []
}

export default function(state = INITIAL_STATE, action) {
	// console.log(action);
	switch(action.type) {
		case SEND_IMAGE_STRING:
			return {...state, emotion_results: [...state.emotion_results, action.payload]};
		default: 
			return state;
	}
}