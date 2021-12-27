import React , { useEffect, useContext} from "react";
import { useParams } from "react-router";
import {products} from '../ItemListContainer/Items'
import ItemDetail from '../ItemDetail/ItemDetail'
import CartContext from '../../context/CartContext'

const ItemDetailContainer = () => {
    const { items, setItems } = useContext(CartContext)
    const { codigoId } = useParams()
   
    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            // setTimeout(() => {
                resolve(products)
            // }, 1000)
        })
        getItem
            .then((resp) => {
                codigoId
                    ? setItems(resp.filter(product => product.id === codigoId))
                    : setItems(resp)
            })
        
    }, [codigoId]);

    return (
        <>
            {items.map((item,index) => {
                return(
                        <div key={index}>
                            <ItemDetail item={item} />
                    </div>
                ) 
            })}
        </>
    )
}
export default ItemDetailContainer
