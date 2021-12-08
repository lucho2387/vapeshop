import React from 'react'
import './loginContainer.css'
import LoginForm from './LoginForm'

const LoginContainer = (props) => {
    return (
        <>
            <div className="container-caja">
                <div className="container-superior">
                    <div className="fondo"></div>
                    <div className="container-header">
                        <h2 className="titulo-header">Login</h2>
                        {/* <h2 className="titulo-header">Atras</h2>
                        <h5 className="texto-parrafo">Por favor registrese para continuar</h5> */}
                    </div>
                </div>
                <LoginForm />
            </div>
        </>
     )
}

export default LoginContainer