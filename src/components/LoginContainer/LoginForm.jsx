import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
import './loginForm.css'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const LoginForm = (props) => {

    const [loginUser, setLoginUser] = useState()
    const auth = getAuth()

    const onChangeLogIn = (event) => {
        setLoginUser({
            ...loginUser,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitLogIn = (e) => {
        e.preventDefault()
        if(loginUser.email !== '' && loginUser.password !== ''){
            signInWithEmailAndPassword(auth, loginUser?.email, loginUser?.password)
                .then((userCredential) => {
                    console.log(userCredential)
                })
        }else {
            alert("Hay campos vacios")
        }   
    }

    return (
        <>  
            <div className="container-caja1">
                <form className="container-form">
                    <a href="/registro" className="form-enlace1">Registrarse</a>
                    {/* <a href="/" className="form-enlace2"><i class="fas fa-long-arrow-alt-left"></i></a> */}
                    <input className="form-input" type="email" placeholder="Correo" name='email' onChange={onChangeLogIn} />
                    <input className="form-input" type="password" placeholder="Contraseña" name='password' onChange={onChangeLogIn}/>
                    <button type="submit" className="form-boton" onClick={onSubmitLogIn}>Ingresar</button>
                </form>
            </div>
        </>
     )
}

export default LoginForm
