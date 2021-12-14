import React, {useState, useEffect} from 'react'
// import {products} from '../ItemListContainer/Items'
import ItemList from '../ItemList/ItemList';
import './itemListContainer.css'
// import { useParams } from 'react-router-dom';
// import NavBar from './NavBar';
import { getFirestore, collection, getDocs } from 'firebase/firestore' 

const ItemListContainer = () => {
  
  // const { items } = useContext(CartContext)
  const [items, setItems] = useState([])
  // const { productoId } = useParams();

  // // console.log(productoId)
  // useEffect(() => {
  //     const loadProducts = () => {
  //       return new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //             resolve(products)
  //         }, 500);
  //       })
  //     }
    
  //     loadProducts()
  //       .then((response) => {
  //         productoId ? setItems(response.filter((product) => product.category === productoId)) : setItems(response);
  //       })
  //       .catch((error) => console.log(error))
    
  // }, [productoId]);

  useEffect(() => { 
    const db = getFirestore() 
    const ref = collection(db, "products")

    getDocs(ref) 
      .then((snapShop) => { 
        //trae un objeto con todos los productos
        // console.log(snapShop.docs.map((doc)=> doc.data())) 
        //trae un producto por separado
        snapShop.docs.map((doc)=>
          setItems(item => ([...item,doc.data()]))
          // console.log(doc.data().image)
        )
      }) 

  }, []) 

  return (
    <>
      {/* <NavBar /> */}
      <ItemList items={items}/>
    </>
    ) 
}

export default ItemListContainer
