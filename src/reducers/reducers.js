import Constants from '../constants';

const searchInitialState = {
	searchText: '',
};

export const searchRobots = (state = searchInitialState, action = {}) => {
	switch(action.type){
		case Constants.CHANGE_SEARCH_FIELD_ACTION:
			return Object.assign({}, state, {
				searchText: action.payload
			});
		default:
			return state;
	}
};

const robotsInitialState = {
	robots: [],
	isPending: false,
	error: ''
};

export const robots = (state = robotsInitialState, action = {}) => {
	switch(action.type){
		case Constants.REQUEST_ROBOTS_STATE_PENDING:
			return Object.assign({}, state, {
				isPending: true
			});
		case Constants.REQUEST_ROBOTS_STATE_SUCCESS:
			return Object.assign({}, state, {robots: action.payload, isPending: false});
		case Constants.REQUEST_ROBOTS_STATE_FAILED:
			return Object.assign({}, state, {error: action.payload, isPending: false});
		default:
			return state;
	}
};