import React from 'react'
import { Link } from 'react-router-dom'
import './registerForm.css'

const RegisterForm = (props) => {
    return (
        <>
            <div className="container-caja1">
                <form className="container-form">
                    <Link to="/login" className="form-registro-enlace"><i class="fas fa-long-arrow-alt-left"></i></Link>
                    <input className="form-input" type="text" placeholder="Nombre" />
                     <input className="form-input" type="text" placeholder="Apellido" />
                    <input className="form-input" type="email" placeholder="Correo" />
                    <input className="form-input" type="password" placeholder="Contraseña"/>
                    <button type="submit" className="form-register-boton">Registrarse</button>
                </form>
            </div>
        </>
     )
}

export default RegisterForm