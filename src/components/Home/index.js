// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import {Link} from 'react-router-dom';

// == Composant
const Home = ({list}) => {

console.log(list);


return (

<div className='home'>
    <p>bienvenue</p>
    <div className='cards-list'>

    {
        list.map((cardObject)=>(
            <div key={cardObject.id} className='card'>
            <img className="card-image" src={cardObject.image}/>
            <div className='card-infos'>
            <h3 className='card-title'>{cardObject.title}</h3>
            <p className='card-difficulty'>difficulte : {cardObject.difficulty}</p>
            <Link to={cardObject.slug} className='active'>lien recette</Link>
            </div>
        </div>

        ))
    }
        





        
       
    </div>
</div>

);
}

Home.propTypes = {
    list:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            slug : PropTypes.string.isRequired,
            difficulty : PropTypes.string.isRequired,
        })
    ).isRequired,
}


// == Export
export default Home;