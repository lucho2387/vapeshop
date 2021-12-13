import React, {useContext, useEffect, useState} from 'react'
import { products } from '../components/ItemListContainer/Items'

const CartContext = React.createContext()


export function CartContextProvider({ children }) {
    
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [irAlCarrito, setIrAlCarrito] = useState(false)
    // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setItems(products)
        })
    }, []);

    // Validacion
    const isOnCart = (product) => {
        return cartItems?.findIndex(item => item.id === product.id)
    }

    const addToCart = (item) => {
        
        if (isOnCart(item) === -1) {
            setCartItems([...cartItems, item])
            // alert("El producto se agrego al carrito correctamente")
            setIrAlCarrito(true)
        } else {
            alert("El producto ya fue agregado")
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

    //     const sort_lists = (item) => {
    //        [...cartItems].sort((b, a) => (a[item.category] > b[item.category] ? 1 : a[item.category] < b[item.category] ? -1 : 0))
    //    }
    
    // const sort_lists = (item) => {
    //     setCartItems(cartItems.sort((a,b) => (a[item.id] > b[item.id] ? 1 : a[item.id] < b[item.id] ? -1 : 0)))
    // }
    
    

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
            value={{ items, addToCart, setItems, cartItems, deleteFromCart, decrease, increase, deleteItems, deleteItemsCategory, irAlCarrito, activarBoton }}>
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

// export function useIsLoading(){
//     return useContext(CartContext).isLoading
// }

// export function useOrdenar(){
//     return useContext(CartContext).sort_lists
// }

export default CartContext
