import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
import './registerForm.css'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const RegisterForm = (props) => {

    const [createUser, setCreateUser] = useState()
    const [error, setError] = useState()
    const auth = getAuth()

    const onChangeSignUp = (event) => {
        setCreateUser({
            ...createUser,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitSignUp = (e) => {
        e.preventDefault()
        if(createUser.email !== '' && createUser.password !== '' && createUser.repetirPassword !== ''){
            createUserWithEmailAndPassword(auth, createUser?.email, createUser?.password, createUser?.repetirPassword)
                .then(() => alert('El usuario fue creado satisfactoriamente'))
                .catch((error) => setError(error.message))
        }else {
            alert("Hay campos vacios")
        }   
    }

    return (
        <>
            <div className="container-caja1">
                <form className="container-form">
                    <a href="/login" className="form-registro-enlace"><i className="fas fa-long-arrow-alt-left"></i></a>
                    {/* <input className="form-input" type="text" placeholder="Nombre" />
                     <input className="form-input" type="text" placeholder="Apellido" /> */}
                    <input className="form-input" type="email" placeholder="Correo" name='email' onChange={onChangeSignUp} />
                    <input className="form-input" type="password" placeholder="Contraseña" name='password' onChange={onChangeSignUp}/>
                    <input className="form-input" type="password" placeholder="RepetirContraseña" name='repetirPassword' onChange={onChangeSignUp}/>
                    <button type="submit" className="form-register-boton" onClick={onSubmitSignUp}>Registrarse</button>
                    { error && <p className="error">{`${error}`}</p>}
                </form>
            </div>
        </>
     )
}

export default RegisterForm
