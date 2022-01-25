import '../styles/Header.css'
import logo from '../logo.svg'

function Header(){
    return(
        <header>
            <h1 className="titre">Je suis le composant</h1>
            <img className="logo" alt="Mon logo" src={logo}/>
        </header>

        /* Autre méthode possible
        <h1 style={{
            color: '#FF0000',
            fonSize: 36
        }}>
            Je suis le composant
        </h1>
        */
    )
}
export default Header;

/* Anciennes version de React

import React from "react";

class Header extends React.Component{
    render(){
        return(
            <h1>e suis le composant</h1>
        )
    }
}
*/