import React from 'react'
import Navbar from '../NavBar/Navbar'
import './header.css'



const Header = () => {

    

    return (
        <header className="header trans_300">
            <a href="/" className ="menuHamburguesa"><i className="fas fa-bars"></i></a>
            <a href="/" className="logo">Vape<span>Shop</span></a>
            <Navbar />
        </header>
    )
}

export default Header