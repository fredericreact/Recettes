// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';


// == Composant
const Navigation = ({list}) => (

<nav className='navigation'>
    <a className='navigation-link active' href="/">acceuil</a>
    { list.map((navObject) => (
        <a
        key={navObject.id}
        className="navigation-link"
        href={navObject.slug}
        >
            {navObject.title}
        </a>
    ))
    }
        
</nav>

);

Navigation.propTypes ={
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            
            slug: PropTypes.string.isRequired,
        }),
    ).isRequired
}

// == Export
export default Navigation;