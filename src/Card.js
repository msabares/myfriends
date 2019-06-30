import React from 'react';
import './Card.css';

const Card = (friend) => {

    const {name, picture, likes, dislikes} = friend;

    return(
        <div className='cards'>
            <img alt='My friends' src={picture}/>
            <p id='name'>{name}</p>
            <div id='info'>
                <p><span id='green'>Likes:</span> {likes}</p>
                <p><span id='red'>Dislikes:</span> {dislikes}</p>
            </div>
        </div>
    )
};

export default Card;