import React,{ useState } from "react";
import TinderCard from "react-tinder-card";
import './TinderCards.css';


function TinderCards() {
const [people, setPeople] = useState([

        {
            name: 'IU ',
            url:'https://static.asiachan.com/IU.600.171328.jpg',
        },
        {
            name: 'IU',
            url:'https://static.asiachan.com/IU.600.221859.jpg',
        },
    ]);
    
    return (
        
        <div>
            <h1>Tinder</h1>

            <div className="tinderCards__cardContainer">

            
            {people.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    provenSwipe={['up','down']}          
                >
                    <div 
                    style={{ backgroundImage: `url(${person.url})`}}
                    className="card">
                       <h3>{person.name}</h3>
                    </div>
                </TinderCard>

            ))}       
        </div>
        </div>
    );
}

export default TinderCards;
