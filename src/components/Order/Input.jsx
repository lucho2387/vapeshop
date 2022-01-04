import React from 'react'
import { useState } from 'react/cjs/react.development'
import './input.css'

const Input = ({value, tipo, placeholder, name, error, expresionRegular, onChange}) => {
    
    const [errores, setErrores] = useState(true);
    
    const validacion = () => {
        if (expresionRegular) {
            if (expresionRegular.test(value)) {
                setErrores(true)
            } else {
                setErrores(false)
            }
        }
    }

    return (
        <div>
            <div className='grupoInput'>
                <input
                    type={tipo}
                    placeholder={placeholder}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                />
                <i className="far fa-check-circle iconoSuccess"></i>
            </div>
            {
                errores ? '':  <p className='textoError'>{error}</p>
            }
           
        </div>
    )
}

export default Input
