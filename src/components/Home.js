import React from 'react'
import { FaHome } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './Home.css';
const Home = () => {
  return (
    <div className="main">
    <div className='div-1'>
     <NavLink exact to="/" activeClassName="active"><FaHome size={25} color="gray" /></NavLink>
     <span className="separator">{' > '}</span>
    <NavLink to="/flashcard" activeClassName="active">Go to Flashcards</NavLink>
    <span className="separator">{' > '}</span>
    <NavLink to="/flashcard/mathematics" activeClassName="active">Go to Mathematics</NavLink>
    <span className="separator">{' > '}</span>
    <NavLink to="/flashcard/mathematics/relation-function" activeClassName="active">Go to Relation and Function</NavLink>
    </div>
    
    </div>
  )
}

export default Home
