import React, { useState } from "react";
import './itemCount.css'
import { useAddToCart } from '../../context/CartContext'


const ItemCount = ({ item, stock, price }) => {
    

    // const [numero, setNumero] = useState(1)

    // const onIncrease = () => {
    //     setNumero(numero < stock ? numero + 1 : numero);
    // }

    // const onDecrease = () => {
    //     setNumero(numero > 1 ? numero - 1 : numero);
    // }
    
    const addToCart = useAddToCart()

    return (
        <>
        <div className="container">
            {/* <button className="botonDisminuir1"  onClick={onDecrease}>-</button>
            <h3 className="cantidad1">{`${numero}`}</h3>
            <button className="botonIncrementar1" onClick={onIncrease}>+</button> */}
            {/* <h4 className="precioProducto1">Total $ <span className="spanPrecio1">{price * numero}</span></h4> */}
            <button className="botonAgregar1"  onClick={() => addToCart(item)}>Agregar</button>
        </div>
        </>
    )
}

export default ItemCount