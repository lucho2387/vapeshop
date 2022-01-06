import React, {useState, useEffect} from 'react'
import './order.css'
import { useCartItems, useDeletefromCart, useDeleteItems } from '../../context/CartContext'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Input from './Input'


const Order = (props) => { 
  
    const fecha = new Date()
    const date = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();
    const cartItems = useCartItems()
    const deleteItem = useDeletefromCart()
     const deleteItems = useDeleteItems()
    const [total, setTotal] = useState(0)
    // const [name, setName] = useState({campo: '', valido: null});
    // const [apellido, setApellido] = useState({campo: '', valido: null});
    // const [correo, setCorreo] = useState({campo: '', valido: null});
    // const [telefono, setTelefono] = useState({ campo: '', valido: null });
    const [name, setName] = useState(null);
    const [apellido, setApellido] = useState(null);
    const [correo, setCorreo] = useState(null);
    const [telefono, setTelefono] = useState(null);

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        // password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const db = getFirestore() 
    const refOrder = collection(db, "orderItems")

    const saveName = (nombre, apellido, correo, telefono, fecha, total) => {
        addDoc(refOrder, { nombre, apellido, correo, telefono, fecha, total})
    }

    const addToOrder = (e) => {
         if (name !== null && apellido !== null && correo !== null && telefono !== null && total !== 0) {
            saveName(name, apellido, correo, telefono, date, total)
            toast.success("Su orden fue generada correctamente")
            deleteItems()
        } else if(total === 0){
            toast.error("No hay productos agregados al carrito, no se puede procesar su pedido")
            e.preventDefault()
            setName('')
            setApellido('')
            setCorreo('')
            setTelefono('')
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
                
                <form className='contenedor-input'>
                    <h1>Datos del Cliente</h1>
                    <Input
                        tipo="text"
                        error="Solo se permite el ingreso de texto"
                        placeholder="Nombre"
                        name="nombre"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        expresionRegular={expresiones.name}
                    />
                    <Input
                        tipo="text"
                        error="Solo se permite el ingreso de texto" 
                        placeholder="Apellido"
                        name="apellido"
                        value={apellido}
                        onChange={e => setApellido(e.target.value)}
                        expresionRegular={expresiones.apellido}
                    />
                    <Input
                        tipo="email"
                        error="El correo no es valido" 
                        placeholder="Correo"
                        name="correo"
                        value={correo}
                        onChange={e => setCorreo(e.target.value)}
                        expresionRegular={expresiones.correo}
                    />
                    <Input
                        tipo="number"
                        error="Solo se permite el ingreso de 7 a 14 numeros" 
                        placeholder="Telefono"
                        name="telefono"
                        value={telefono}
                        onChange={e => setTelefono(e.target.value)}
                        expresionRegular={expresiones.telefono}
                    />
                </form>
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
                        name,
                        price,
                        count,
                    } = item
                    
                    return (
                        <>
                            <div key={item.id} className="cart-container-order">
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

