import React from 'react';
import colection from '../Assets/colection.jpeg'
import exit from '../Assets/exit.png'
import "./Navbar.css";


export const Navbar = () => {
    return (
        <div className = "navbar">
            <img className= 'colection'src={colection}/>
            <h1>My cool notes</h1>
            <img className= 'exit'src={exit}/>

            
            
        </div>

    )

}