import React, {useState} from 'react'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer'
import Header from '../../components/Header/Header'
import Loader from '../../components/Loader/Loader'
import './detalle.css'

const Detalle = () => {
   
   const [isLoading, setIsLoading] = useState(true);
    
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
      
      return (
         <>
            <Header />
            { isLoading ? <Loader /> : <ItemDetailContainer />}
            
         </>
      )
}

export default Detalle