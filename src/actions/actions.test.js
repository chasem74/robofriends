import * as actions from './actions';
import Constants from '../constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import fetchMock from 'fetch-mock';

const mockStore = configureMockStore([thunkMiddleware]);
let store;

const DUMMY_ERROR = 'ERRROR';
const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com';

describe('redux actions', () => {
	describe('setSearchField', () => {
		it('should create an action to search robots', () => {
			expect.assertions(1);

			const text = 'woo';
			const expectedAction = {
				type: Constants.CHANGE_SEARCH_FIELD_ACTION,
				payload: text
			};

			expect(actions.setSearchField(text)).toEqual(expectedAction);
		});
	});

	describe('requestRobots', () => {
		beforeEach(() => {
			store = mockStore({});
		});

		afterEach(() => {
			fetchMock.reset();
			fetchMock.restore();
		});

		it('handles requesting robots API (eg put into REQUEST_ROBOTS_STATE_PENDING state)', () => {
			expect.assertions(1);

			store.dispatch(actions.requestRobots());
			const action = store.getActions();
			const expectedAction = {
				type: Constants.REQUEST_ROBOTS_STATE_PENDING
			};

			expect(action[0]).toEqual(expectedAction);
		});

		it('responds with the error as the payload on a fetch error', () => {
			expect.assertions(1);

			fetchMock.getOnce(JSON_PLACEHOLDER_URL + '/users', new Promise((resolve, reject) => {
				reject(DUMMY_ERROR);
			}));
			
			const expectedActions = [
				{type: Constants.REQUEST_ROBOTS_STATE_PENDING},
				{type: Constants.REQUEST_ROBOTS_STATE_FAILED, payload: DUMMY_ERROR}
			];

			return store.dispatch(actions.requestRobots()).then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
		});

		it('responds with the data as the payload on a fetch success', () => {
			expect.assertions(1);

			const payload = [{
					id: 3,
					name: 'Chase',
					email: 'chase@gmail.com'
			}];

			fetchMock.getOnce(JSON_PLACEHOLDER_URL + '/users', new Promise((resolve, reject) => {
				resolve(payload);
			}));

			const expectedActions = [
				{type: Constants.REQUEST_ROBOTS_STATE_PENDING},
				{type: Constants.REQUEST_ROBOTS_STATE_SUCCESS, payload: payload}
			];

			return store.dispatch(actions.requestRobots()).then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
		});
	});
});