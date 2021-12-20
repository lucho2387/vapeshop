import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './Screen/Inicio/Inicio';
import Productos from './Screen/Productos/Productos';
import Promociones from './Screen/Promociones/Promociones';
import Nosotros from './Screen/Nosotros/Nosotros';
import Contacto from './Screen/Contacto/Contacto';
import Cart from './Screen/Cart/Cart';
import Detalle from './Screen/Detalle/Detalle';
import Login from './Screen/Login/Login';
import Registro from './Screen/Registro/Registro';
import { Providers } from './providers/providers';
import Pedido from './Screen/Pedido/Pedido';


function App() {
 
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route exact path="/productos/:productoId" element={<Productos />} />
          <Route exact path="/producto/:codigoId" element={<Detalle />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/pedido" element={<Pedido />}/>
        </Routes>
      </BrowserRouter>
    </Providers>  
  );
}

export default App;
