import React , { useEffect, useContext} from "react";
import { useParams } from "react-router";
import {products} from '../ItemListContainer/Items'
import ItemDetail from '../ItemDetail/ItemDetail'
import CartContext from '../../context/CartContext'
// import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const { items, setItems } = useContext(CartContext)
    // const [items, setItems] = useState([]);
    const { codigoId } = useParams()
   
    console.log(codigoId)
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



    // useEffect(() => {

    //         const db = getFirestore()
    //         const ref = doc(db, 'productos', codigoId)
        
    //         getDoc(ref)
    //             .then((snapShop) => {
    //             if(snapShop.exists()){
    //                 // setItems(snapShop.data())
    //                 // const product = snapShop.data();
    //                 // console.log(snapShop.data())
    //                 // setItems(snapShop.doc.find((doc) => ({id: doc.id, ...doc.data()})))
    //                 // setItems(snapShop.data().id)
    //                 setItems(snapShop.docs.filter(product => product.id === codigoId))
    //             }
    //         })

    //     }, [codigoId])
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
