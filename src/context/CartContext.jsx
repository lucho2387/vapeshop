import React, {useContext, useEffect, useState} from 'react'
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where } from 'firebase/firestore'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CartContext = React.createContext()

toast.configure()

export function CartContextProvider({ children }) {
    
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [irAlCarrito, setIrAlCarrito] = useState(false)
    const db = getFirestore() 
    const refItems = collection(db, "productos")

    useEffect(() => { 

    getDocs(refItems) 
      .then((snapShop) => { 
         setItems(snapShop.docs.map((doc) => ({id: doc.id, ...doc.data()})))
      }) 

    }, []) 

    // Validacion
    const isOnCart = (product) => {
        return cartItems?.findIndex(item => item.id === product.id)
    }

    const addToCart = (item) => {
        
        if (isOnCart(item) === -1) {
            setCartItems([...cartItems, item])
            toast.success("El producto fue agregado al carrito")
        }else   
            if (item.count >= item.stock) {
               toast.warning("No hay Stock disponible")
        }else {
               item.count++
               toast.info("La cantidad del Producto fue incrementada")
            }  
    }

    const deleteFromCart = (product) => {
        setCartItems(cartItems.filter(item => item.id !== product.id))
    }

    const deleteItemsCategory = (product) => {
        setCartItems(cartItems.filter(item => item.category !== product.category))
    }

    const deleteItems = () => {
        setCartItems([])
    }
    
    
    const decrease = id => {
        cartItems.forEach(item => {
            if (item.id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1
            }
            setCartItems([...cartItems])
        })
    }

    const increase = id => {
        cartItems.forEach(item => {
            if (item.id === id && item.count < item.stock) {
                item.count += 1
            }
            setCartItems([...cartItems])
        })
    }

    const activarBoton = () => {
        setIrAlCarrito(false)
    } 

    console.log(cartItems)
    
    return (
        <CartContext.Provider 
            value={{ items, addToCart, setItems, cartItems, setCartItems, deleteFromCart, decrease, increase, deleteItems, deleteItemsCategory, irAlCarrito, activarBoton }}>
            {children}
        </CartContext.Provider>
    )
    
}

export function useAddToCart(){
    return useContext(CartContext).addToCart
}

export function useCartItems(){
    return useContext(CartContext).cartItems
}

export function useDeletefromCart(){
    return useContext(CartContext).deleteFromCart
}

export function useCountDecrease(){
    return useContext(CartContext).decrease
}

export function useCountIncrease(){
    return useContext(CartContext).increase
}

export function useDeleteItems(){
    return useContext(CartContext).deleteItems
}

export function useDeleteCategoryItems(){
    return useContext(CartContext).deleteItemsCategory
}

export function useBotonFinalizar(){
    return useContext(CartContext).irAlCarrito
}

export function useActivarBoton(){
    return useContext(CartContext).activarBoton
}

export default CartContext


