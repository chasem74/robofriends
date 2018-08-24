import React from 'react';
import {connect} from 'react-redux';

import MainPage from '../components/MainPage';

import {setSearchField, requestRobots} from '../actions/actions';

class App extends React.Component{
	render(){
		return <MainPage {...this.props} />
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