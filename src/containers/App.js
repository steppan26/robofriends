import React, { useEffect, useState } from 'react';
import CardList from  '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


const App = () =>{
    const [searchfield, updateSearchfield] = useState("")
    const [ robots, setRobots ] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    },[])

    const onSearchChange = (event) => {
        updateSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !robots.length ?
    <h1>Loading...</h1> :
    (
        <div className="tc">
            <h1>Robofriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
    );
}



export default App;