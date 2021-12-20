import React from 'react'
import { Link } from 'react-router-dom';
import './itemListContainer.css'

const NavBar = ({ categories, filterItems }) => {
    return (
      
      <div className="new_arrivals">
        <div className="containerNavegacion">
          <div className="row">
              <div className="col">
                <div className="new_arrivals_sorting">
                  <div className="arrivals_grid_sorting">
                    {
                      categories.map((category, index) => {
                        return  <button type='button' className="grid_sorting_button"
                                  key={index}
                                  onClick={() => filterItems(category)}>
                                  <Link to={`/productos/${category}`}>{category}</Link>
                                </button>
                      })
                    }
                      
                  </div>
                </div>
              </div>
          </div>    
        </div>
      </div>
    )
}

export default NavBar
