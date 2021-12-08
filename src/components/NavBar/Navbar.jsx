import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/header.css'
import { useCartItems } from '../../context/CartContext'

const Navbar = () => {
    
    const cartItems = useCartItems()

    return (
          <nav className="navbar">
                    <ul className="navbar_menu">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/productos">Productos</Link></li>
                         <li><Link to="/cart">Carrito</Link></li>
                        {/* <li><Link to="/promociones">Promociones</Link></li> */}
                        <li><Link to="/nosotros">Nosotros</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                    <ul className="navbar_user">
                        <li><Link to="/buscar"><i className="fa fa-search" arial-hidden="true"></i></Link></li>
                        <li><Link to="/login"><i className="fa fa-user" arial-hidden="true"></i></Link></li>
                        {
                        cartItems.length === 0
                        ? ''
                        : (
                            <li className="checkout">
                                <Link to="/cart"  className = "enlace">
                                    <i className="fa fa-shopping-cart" arial-hidden="true"></i>
                                    <span className="checkout_items">{cartItems.length}</span>
                                </Link>
                            </li>
                        )
                        }
                        
                    </ul>
                </nav>
     )
}

export default Navbar