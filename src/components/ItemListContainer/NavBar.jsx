import React from 'react'
import { Link } from 'react-router-dom';
import './itemListContainer.css'

const NavBar = () => {
    return (
      <div className="new_arrivals">
        <div className="containerNavegacion">
          <div className="row">
              <div className="col">
                <div className="new_arrivals_sorting">
                  <ul className="arrivals_grid_sorting">
                    <li className="grid_sorting_button"><Link to="/productos/vaporizadores">Vaporizadores</Link></li>
                    <li className="grid_sorting_button "><Link to="/productos/atomizadores" >Atomizadores</Link></li>
                    <li className="grid_sorting_button "><Link to="/productos/cartuchos" >Cartuchos</Link></li>
                    <li className="grid_sorting_button "><Link to="/productos/accesorios">Accesorios</Link></li>
                  </ul>
                </div>
              </div>
          </div>    
        </div>
      </div>
    )
}

export default NavBar