import React from "react"
import { Link } from "react-router-dom"
import './itemList.css'

const ItemList = ({items}) => {
    return (
        <div className="grid">
            {items.map((item, index) => (
                <div className="contenedorProducto" key={index}>
                    <h1 className="tituloProducto">{item.name}</h1>
                    <img className="imagenProducto1" src={item.image} alt="producto1" />
                    <p>{items.colour}</p>
                    <span className="spanProducto">Cantidad: {item.stock}</span>
                    <span className="tituloProducto">Precio: $ {item.price}</span>
                    <Link to={`/producto/${item.id}`}><button className="botonProducto">Ver Detalle</button></Link>
                </div>
            ))}
        </div>
    )
}

export default ItemList