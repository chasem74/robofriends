import React from 'react';
import {connect} from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';

import {setSearchField, requestRobots} from '../actions/actions';

import './App.css';

class App extends React.Component{

	componentDidMount(){
		this.props.onRequestRobots();
/*		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
*/	}

	render(){
		const {searchText, onSearchChange, robots, isPending} = this.props;
		
		if(isPending === 0){
			return <h1>Loading...</h1>;
		}else{
			const filterRobots = robots.filter(robot => {
				return robot.name.toLowerCase().includes(searchText.toLowerCase());
			});

			return (
				<div className='tc'>
					<Header />
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
	searchText: state.searchRobots.searchText,
	robots: state.robots.robots,
	isPending: state.robots.isPending,
	error: state.robots.error
});

const mapDispatchToProps = (dispatch) => ({
	onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
	onRequestRobots: () => dispatch(requestRobots())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);