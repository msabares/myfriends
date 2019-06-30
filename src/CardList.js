import React from 'react';
import Card from "./Card";

const CardList = ({ friends }) => {


    const friendList = [];
    let uniqueID = 1;

    for (let friend of friends) {
        friendList.push( <Card key={uniqueID} name={friend.name} likes={friend.likes} dislikes={friend.dislikes} picture={friend.picture}/>)
        uniqueID++;
    }

    return (
    <div id='myfriends'>

        {
            // friends.map((friend, i )=> {
            //     return <Card key={i} name={friends[i].name} likes={friends[i].likes} dislikes={friends[i].dislikes} picture={friends[i].picture}/>
            // })
            friendList
        }
    </div>
    )

};

export default CardList;