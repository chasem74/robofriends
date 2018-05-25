import React from 'react';
import {connect} from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import {setSearchField} from '../actions/actions';

import './App.css';

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			robots: [],
		};
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	render(){
		if(this.state.robots.length === 0){
			return <h1>Loading...</h1>;
		}else{
			const {searchText, onSearchChange} = this.props;

			const filterRobots = this.state.robots.filter(robot => {
				return robot.name.toLowerCase().includes(searchText.toLowerCase());
			});

			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filterRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}
};

const mapStateToProps = (state) => ({
	searchText: state.searchText
});

const mapDispatchToProps = (dispatch) => ({
	onSearchChange: (event) => dispatch(setSearchField(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);