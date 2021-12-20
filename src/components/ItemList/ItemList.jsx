import React from "react"
import { Link } from "react-router-dom"
import './itemList.css'

const ItemList = ({items}) => {
    return (
        <div className="grid">
            {items.map((item) => {
                
                const { id, name, image, stock, price } = item;

                return(
                    <div className="contenedorProducto" key={id}>
                        <h1 className="tituloProducto">{name}</h1>
                        <img className="imagenProducto1" src={image} alt="producto1" />
                        <span className="spanProducto">Cantidad: {stock}</span>
                        <span className="tituloProducto">Precio: $ {price}</span>
                        <Link to={`/producto/${id}`}><button className="botonProducto">Ver Detalle</button></Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList
