import { CartContextProvider } from "../context/CartContext"
import { AuthProvider } from "../context/ContextAuth"


export const Providers = ({children}) => {
    
    return (
        <AuthProvider>
            <CartContextProvider>
                {children}
            </CartContextProvider>
        </AuthProvider>
    )
}
