import React, {useState, useEffect} from 'react'
import {products} from '../ItemListContainer/Items'
import ItemList from '../ItemList/ItemList';
import './itemListContainer.css'
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';


const ItemListContainer = () => {
  
  // const { items } = useContext(CartContext)
  const [items, setItems] = useState([])
  const { productoId } = useParams();

  // console.log(productoId)
  useEffect(() => {
      const loadProducts = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(products)
          }, 500);
        })
      }
    
      loadProducts()
        .then((response) => {
          productoId ? setItems(response.filter((product) => product.category === productoId)) : setItems(response);
        })
        .catch((error) => console.log(error))
    
  }, [productoId]);
  return (
    <>
      <NavBar />
      <ItemList items={items}/>
    </>
    ) 
}

export default ItemListContainer