import Header from '../../components/Header/Header';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import Loader from '../../components/Loader/Loader'
import React, { useState} from 'react'
import './productos.css'
// import { useIsLoading } from '../../context/CartContext'

const Productos = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    // const isLoading = useIsLoading()

    return (
        <>
            <Header />
            { isLoading ? <Loader /> : <ItemListContainer />}  
        </>  
    )
}

export default Productos