import {shallow, mount} from 'enzyme';
import React from 'react';

import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchText: '',
		isPending: false
	};

	wrapper = shallow(<MainPage {...mockProps} />);
});

describe('<MainPage />', () => {
	it('renders MainPage without crashing', () => {
		expect.assertions(1);
		expect(wrapper).toMatchSnapshot();
	});

	it('filters robots correctly', () => {
		expect.assertions(1);

		const mockProps2 = {
			onRequestRobots: jest.fn(),
			robots: [{
				id: 3,
				name: 'Chase',
				email: 'chase@gmail.com'
			}],
			searchText: 'a',
			isPending: false
		};

		const wrapper2 = shallow(<MainPage {...mockProps2} />);
		expect(wrapper2.instance().filterRobots()).toEqual(mockProps2.robots);
	});

	it('renders loading message correctly when isPending is true', () => {
		expect.assertions(1);

		const mockProps3 = {
			onRequestRobots: jest.fn(),
			robots: [],
			searchText: '',
			isPending: true
		};
		const wrapper3 = shallow(<MainPage {...mockProps3} />);
		expect(wrapper3.find('h1').text()).toEqual('Loading...');
	});
});