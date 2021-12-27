import React from 'react'
import Navbar from '../NavBar/Navbar'
import './header.css'
import {useDataUser} from '../../context/ContextAuth'


const Header = () => {

    const user = useDataUser()
    // console.log(user)
    return (
        <header className="header trans_300">
            <p className='usuario'>{ user?.email}</p>
            <a href="/" className ="menuHamburguesa"><i className="fas fa-bars"></i></a>
            <a href="/" className="logo">Vape<span>Shop</span></a>
            <Navbar />
        </header>
    )
}

export default Header
