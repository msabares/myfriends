import React, { Component }from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import { friends } from "./friends";
import './App.css'

class App extends Component {

    constructor() {
        super();
        this.state = {
            friends: friends,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    };


    render() {
        const sortFriends = this.state.friends.sort(function (a, b) {
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
        });
        const filterFriends = sortFriends.filter(friends => {
            return friends.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return(
            <div>
                <h1>My Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList friends={filterFriends}/>
            </div>
        );
    }

}

export default App;
