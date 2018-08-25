import {apiCall} from '../api/api';
import Constants from '../constants';

export const setSearchField = (text) => ({
	type: Constants.CHANGE_SEARCH_FIELD_ACTION,
	payload: text
});

const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com/users';

export const requestRobots = () => (dispatch) => {
	dispatch({type: Constants.REQUEST_ROBOTS_STATE_PENDING});

	return apiCall(JSON_PLACEHOLDER_URL)
	.then(data => dispatch({type: Constants.REQUEST_ROBOTS_STATE_SUCCESS, payload: data}))
	.catch(error => dispatch({type: Constants.REQUEST_ROBOTS_STATE_FAILED, payload: error}));
};