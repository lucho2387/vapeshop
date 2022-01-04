import React, {useState, useContext} from 'react'
import Registro from '../Screen/Registro/Registro'
import Login from '../Screen/Login/Login'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
    
    const auth = getAuth()
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState(false)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
            setIsAuth(true)
        } else {
            setIsAuth(false)
        } 
    })

    const logout = () => {
        signOut(auth)
            .then(() =>  toast.success("Su sesion se cerro correctamente"))
    }
                
    return (
        <AuthContext.Provider value={{user, logout}}>
            {
                isAuth ?  children  : <><Login /><Registro /></>
            }
        </AuthContext.Provider>
    )
}

export function useDataUser() {
    return useContext(AuthContext).user
}

export function useLogOut() {
    return useContext(AuthContext).logout
}
 
export default AuthContext
