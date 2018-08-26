import {shallow, mount} from 'enzyme';

import React from 'react';
import Card from './Card';

describe('<Card />', () => {
	it('expect to render Card component', () => {
		expect.assertions(1);

		expect(shallow(<Card />)).toMatchSnapshot();
	});
});
