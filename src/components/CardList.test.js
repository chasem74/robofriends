import {shallow, mount} from 'enzyme';

import React from 'react';
import CardList from './CardList';

describe('<CardList />', () => {
	it('expect to render CardList component', () => {
		expect.assertions(1);

		const mockRobots = [
			{
				id: 1,
				name: 'Jon Snow',
				username: 'JonJon',
				email: 'jon@gmail.com'
			}
		];
		expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
	});
});
