import React, {useContext, useEffect, useState} from 'react'
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'

const CartContext = React.createContext()


export function CartContextProvider({ children }) {
    
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [irAlCarrito, setIrAlCarrito] = useState(false)
    const db = getFirestore() 
    const refItems = collection(db, "productos")
    const refCart = collection(db, "cartItems")

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
            //Agrega el producto al carrito
            addDoc(refCart, item)
            //recargamos los items
                .then(() => {
                    getCartItems()
                    setIrAlCarrito(true)
                })
            
        } else {
            const ref = cartItems.find(product => product.id === item.id)
            const pro = doc(db, 'cartItems', ref.cartId)
            updateDoc(pro, { count: ref.count + 1 }).then(() => {
                getCartItems()
            })
        }
       
    }

    // Funcion para recargar de nuevo todos los productos
    const getCartItems = () => {
        getDocs(refCart) 
            .then((snapShop) => { 
                setCartItems(snapShop.docs.map((doc) => ({cartId: doc.id, cartCategory: doc.category, ...doc.data()})))
            }) 
    }

    const deleteFromCart = (product) => {
        // setCartItems(cartItems.filter(item => item.id !== product.id))
        const ref = cartItems.find(item => item.id === product.id)
        const pro = doc(db, 'cartItems', ref.cartId)
        deleteDoc(pro, product).then(() => {
            getCartItems()
        })
    }

    const deleteItemsCategory = (product) => {
        setCartItems(cartItems.filter(item => item.category !== product.category))
        // const ref = cartItems.find(item => item.category !== product.category)
        // const pro = doc(db, 'cartItems', toString(ref.cartCategory))
        // deleteDoc(pro, product).then(() => {
        //     getCartItems()
        // })
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

