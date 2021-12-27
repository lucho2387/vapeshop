import React, {useState, useEffect} from 'react'
import {products} from '../ItemListContainer/Items'
import ItemList from '../ItemList/ItemList';
import './itemListContainer.css'
import NavBar from './NavBar';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore' 


const allCategories = ['all', ...new Set(products.map((item) => item.category))]

const ItemListContainer = () => {
  
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {
      if (category === 'all') {
        setItems(products)
        return
      }
    const db = getFirestore() 
    const refItems = collection(db, "productos")
    const queryItem = query(refItems, where("category", "==" , category))
    
    getDocs(queryItem) 
        .then((snapShop) => { 
            setItems(snapShop.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        }) 
  }

  useEffect(() => { 
    
    const db = getFirestore() 
    const ref = collection(db, "productos")

    getDocs(ref) 
      .then((snapShop) => { 
         setItems(snapShop.docs.map((doc) => ({id: doc.id, ...doc.data()})))
      }) 

  }, []) 

  return (
    <>
      <NavBar categories = { categories } filterItems = { filterItems }/>
      <ItemList items = { items }/>
    </>
    ) 
}

export default ItemListContainer

