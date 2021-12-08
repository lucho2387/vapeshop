import React from 'react'
import { Link } from 'react-router-dom'
import './loginForm.css'

const LoginForm = (props) => {
    return (
        <>
            <div className="container-caja1">
                <form className="container-form">
                    <Link to="/registro" className="form-enlace1">Registrarse</Link>
                    <Link to="/" className="form-enlace2"><i class="fas fa-long-arrow-alt-left"></i></Link>
                    <input className="form-input" type="email" placeholder="Correo" />
                    <input className="form-input" type="password" placeholder="Contraseña"/>
                    <button type="submit" className="form-boton">Ingresar</button>
                </form>
            </div>
        </>
     )
}

export default LoginForm