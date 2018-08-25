import Constants from '../constants';

import * as reducers from './reducers';

describe('redux reducers', () => {
	describe('searchRobots', () => {
		const initialSearchState = {
			searchText: '',
		};

		it('should return the initial state', () => {
			expect(reducers.searchRobots(undefined, {})).toEqual(initialSearchState);
			expect(reducers.searchRobots()).toEqual(initialSearchState);
		});

		it('it should handle CHANGE_SEARCH_FIELD_ACTION', () => {
			expect(reducers.searchRobots(initialSearchState, {
				type: Constants.CHANGE_SEARCH_FIELD_ACTION,
				payload: 'abc'
			})).toEqual({
				searchText: 'abc'
			});
		});
	});

	describe('requestRobots', () => {
		const initialRobotState = {
			robots: [],
			isPending: false,
			error: ''
		};

		it('should return the initial state', () => {
			expect(reducers.robots()).toEqual(initialRobotState);
			expect(reducers.robots(undefined, {})).toEqual(initialRobotState);
		});

		it('should handle REQUEST_ROBOTS_STATE_PENDING action', () => {
			expect(reducers.robots(initialRobotState, {
				type: Constants.REQUEST_ROBOTS_STATE_PENDING,
			})).toEqual({
				robots: [],
				isPending: true,
				error: ''
			});
		});

		it('should handle REQUEST_ROBOTS_STATE_SUCCESS action', () => {
			const mockPayload = [{
				id: 1,
				name: 'Chase',
				email: 'chase@gmail.com'
			}];

			expect(reducers.robots(initialRobotState, {
				type: Constants.REQUEST_ROBOTS_STATE_SUCCESS,
				payload: mockPayload
			})).toEqual({
				robots: mockPayload,
				isPending: false,
				error: ''
			});
		});

		it('should handle REQUEST_ROBOTS_STATE_FAILED action', () => {
			const mockPayload = 'There was an error loading robots';

			expect(reducers.robots(initialRobotState, {
				type: Constants.REQUEST_ROBOTS_STATE_FAILED,
				payload: mockPayload
			})).toEqual({
				robots: [],
				isPending: false,
				error: mockPayload
			});
		});
	});
});