import React from 'react';

class CounterButton extends React.Component{

	constructor(){
		super();

		this.state = {
			count: 0
		}
	}

	shouldComponentUpdate(nextProps, nextState){
		return this.state.count !== nextState.count;
	}

	render(){
		return <button color={this.props.color} onClick={() => this.setState(state => ({count: state.count + 1}))}>Count: {this.state.count}</button>
	}
}

export default CounterButton;