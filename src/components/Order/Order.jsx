import React, {useState, useEffect} from 'react'
import './order.css'
import { useCartItems, useDeletefromCart, useDeleteItems } from '../../context/CartContext'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Order = () => { 
  
    const fecha = new Date()
    const date = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();
    const cartItems = useCartItems()
    const deleteItem = useDeletefromCart()
     const deleteItems = useDeleteItems()
    const [total, setTotal] = useState(0)
    const [name, setName] = useState(null);
    const [apellido, setApellido] = useState(null);
    const [correo, setCorreo] = useState(null);
    const [telefono, setTelefono] = useState(null);

    const db = getFirestore() 
    const refOrder = collection(db, "orderItems")

    const saveName = (nombre, apellido, correo, telefono, fecha, total) => {
        addDoc(refOrder, { nombre, apellido, correo, telefono, fecha, total})
    }

    const addToOrder = (e) => {
         if (name !== null && apellido !== null && correo !== null && telefono !== null) {
            saveName(name, apellido, correo, telefono, date, total)
            toast.success("Su orden fue generada correctamente")
            deleteItems()
        } else {
            toast.error("Hay campos Vacios")
            e.preventDefault()
        }
    }

    
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
            <div className='container-pedido'> 
                <div className='contenedor-boton'>
                <Link to="/cart" className="atrasPedido"><i className="far fa-arrow-alt-circle-left"></i></Link>
                <h1 className='tituloOrdenCompra'>Orden De compra</h1>
                </div>
                
                <div className='contenedor-input'>
                    <h1>Datos del Cliente</h1>
                    <input type="text" placeholder='Nombre' id="nombre" name='nombre' onChange={e => setName(e.target.value)} />
                    <input type="text" placeholder='Apellido' id="apellido" name='apellido' onChange={e => setApellido(e.target.value)} />
                    <input type="email" placeholder='Correo' id="correo" name='correo' onChange={e => setCorreo(e.target.value)} />
                    <input type="number" placeholder='Telefono' id="telefono" name='telefono' onChange={e => setTelefono(e.target.value)}/>
                </div>
                <div className='contenedor-detalle'>
                    <div className='cart-detalle'>
                        <h1 className='tituloPedido'>Pedido</h1> 
                        <p className='fecha' id='fecha'>Fecha: {`${date}`}</p>
                        <h3 className="cart-total-order">Total: $ <span>{total}</span></h3>
                        <Link to="/productos"><button className='botonComprar' onClick={addToOrder}>Comprar</button></Link>
                    </div>
                </div>
            {       
                cartItems?.map((item) => {
                    const {
                        id,
                        name,
                        price,
                        count,
                    } = item
                    
                    return (
                        <>
                            <div key={id} className="cart-container-order">
                                <div className='cart-card'>
                                    <span className="cart-title-order">{name}</span>
                                    <span className="cart-count-order">{count}</span>
                                    <p className="cart-price-order">Precio $ <span>{price}</span></p>
                                    <button className="cart-button-order" onClick={() => deleteItem(item)}><i className="fas fa-trash"></i></button>
                                </div>
                            </div>       
                        </>
                    )
                })       
                }
            
        </div>
        </>
    )
}

export default Order
