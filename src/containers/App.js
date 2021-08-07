import React, { useEffect } from 'react';
import { connect } from 'react-redux'; //import the 'connect' method from react-redux to connect component to redux store
import CardList from  '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { requestRobots, setSearchField } from '../actions'; // import actions for Redux

const mapStateToProps = state => {
    return {
        searchField : state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

const App = (props) =>{

    useEffect(() => {
        props.onRequestRobots()
    },[])

    const { searchField, onSearchChange, robots, isPending } = props

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return isPending ?
    <h1>Loading...</h1> :
    (
        <div className="tc">
            <h1 className='f1'>Robofriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>
        </div>
    );
}


//connect() is a higher-order function [a function that returns another function,
// meaning it returns another function which runs and passes (App) as parameters]
// "mapStateToProps" and "mapDispatchToProps" are the react standards for these names but can be changed to anything
export default connect(mapStateToProps, mapDispatchToProps)(App);