import React from 'react';
import './SearchBox.css'

const SearchBox = ( { searchfield, searchChange} ) => {
    return(
        <div id='searchbox'>
            <input id='search' type='search' placeholder='Search Friend' onChange={searchChange}/>
        </div>
    );
};

export default SearchBox;