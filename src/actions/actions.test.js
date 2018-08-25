import * as actions from './actions';
import Constants from '../constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchField', () => {
	it('should create an action to search robots', () => {
		const text = 'woo';
		const expectedAction = {
			type: Constants.CHANGE_SEARCH_FIELD_ACTION,
			payload: text
		};

		expect(actions.setSearchField(text)).toEqual(expectedAction);
	});
});

describe('requestRobots', () => {
	it('handles requesting robots API', () => {
		const store = mockStore();
		store.dispatch(actions.requestRobots());
		const action = store.getActions();
		const expectedAction = {
			type: Constants.REQUEST_ROBOTS_STATE_PENDING
		};

		expect(action[0]).toEqual(expectedAction);		
	});
});