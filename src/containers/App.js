import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import './App.css';

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			robots: [],
			searchText: ''
		};
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({searchText: event.target.value});
	}

	render(){
		if(this.state.robots.length === 0){
			return <h1>Loading...</h1>;
		}else{
			const filterRobots = this.state.robots.filter(robot => {
				return robot.name.toLowerCase().includes(this.state.searchText.toLowerCase());
			});

			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
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

export default App;