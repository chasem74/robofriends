import {shallow, mount} from 'enzyme';

import React from 'react';
import CounterButton from './CounterButton';

const MOCK_COLOR = 'red';

describe('<CounterButton />', () => {
//	expect.assertions(3);
	it('expect to render CounterButton component', () => {
		const wrapper = shallow(<CounterButton color={MOCK_COLOR}/>);
		expect(wrapper).toMatchSnapshot();
	});

	it('expect state.count to be (prevState.count + 1) the button has be clicked', () => {
		const wrapper = shallow(<CounterButton color={MOCK_COLOR} />);
		const prevState = wrapper.state();

		wrapper.find('button').simulate('click');
		expect(wrapper.state().count).toEqual(prevState.count + 1);
	});
});
