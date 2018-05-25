import Constants from '../constants';

const initialState = {
	searchText: ''
};

export const searchRobots = (state = initialState, action = {}) => {
	switch(action.type){
		case Constants.CHANGE_SEARCH_FIELD_ACTION:
			return Object.assign({}, state, {
				searchText: action.payload
			});
		default:
			return state;
	}
};