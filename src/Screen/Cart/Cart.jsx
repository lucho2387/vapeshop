import React, { useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import './cart.css'
import { useCartItems,useDeletefromCart, useCountDecrease, useCountIncrease, useDeleteItems, useDeleteCategoryItems } from '../../context/CartContext'


const Cart = () => {
    
    const cartItems = useCartItems()
    const deleteItem = useDeletefromCart()
    const decrease = useCountDecrease()
    const increase = useCountIncrease()
    const deleteItems = useDeleteItems()
    const deleteItemsCategory = useDeleteCategoryItems()
    // const addToOrder = useAddToOrder()
    // const sort_lists = useOrdenar()
    const [total, setTotal] = useState(0)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const getTotal = () => {
            const res = cartItems.reduce((prev, item) => {
                return prev + (item.price * item.count)
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [cartItems])


    return (
        <>
            {   
                cartItems.length === 0
                    ?(<>
                        <Header />
                        <div className="container-titulo">
                        <Link to="/productos" className="atras"><i className="far fa-arrow-alt-circle-left"></i></Link>
                        <h1 className="tituloCarrito">Carrito de Compras Vacio</h1>
                        </div>
                    </>)
                    :(<>
                        <Header />
                        <div className="container-general">
                            {
                                cartItems?.map((item) => {
                                        const {
                                            id,
                                            name,
                                            image,
                                            detail,
                                            price,
                                            count,
                                        } = item
                                        
                                        return (
                                            <>
                                            <div key={item.id} className="cart-container">
                                                <img src={image} alt={image} />
                                                <span className="cart-title">{name}</span>
                                                <span className="cart-detail">{detail}</span>
                                                <p className="cart-price">Precio $ <span>{price}</span></p>
                                                <button className="cart-button" onClick={() => deleteItem(item)}><i className="fas fa-trash"></i></button>
                                                <div className="cart-amount">
                                                    <button className="cart-button-decrease" onClick={() => decrease(id)}> - </button>
                                                    <span className="cart-count">{count}</span>
                                                    <button className="cart-button-increase" onClick={() => increase(id)}> + </button>   
                                                </div>
                                            </div>
                                            <div className="total">
                                                <div className="cart-botones">
                                                    <button className="cart-button-eliminar" onClick={() => deleteItemsCategory(item)}><i className="fas fa-eraser"></i>Eliminar Categoria</button>
                                                    <button className="cart-button-limpiar" onClick={() => deleteItems()}><i className="fas fa-trash-alt"></i>Limpiar</button>
                                                  
                                                </div>
                                            </div>
                                            </>
                                        )
                                })
                                
                                }
                            
                        </div>
                        <h3 className="cart-total">Total: $ <span>{total}</span></h3>
                        <Link to="/pedido"><button className="cart-button-comprar"><i className="fas fa-credit-card"></i>Checkout</button></Link>
                    </>)
            }
            
        </>
     )
}

export default Cart

