import React from 'react'
import './registerContainer.css'
import RegisterForm from './RegisterForm'


const RegisterContainer = (props) => {
    return (
        <>
            <div className="container-caja">
                <div className="container-superior">
                    <div className="fondo"></div>
                    <div className="container-header">
                        <h2 className="titulo-register-header">Registro</h2>
                    </div>
                </div>
                <RegisterForm />
            </div>
        </>
     )
}

export default RegisterContainer