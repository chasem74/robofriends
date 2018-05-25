
import Constants from '../constants';

export const setSearchField = (text) => ({
	type: Constants.CHANGE_SEARCH_FIELD_ACTION,
	payload: text
});