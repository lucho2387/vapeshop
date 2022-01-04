import React from 'react'
import Header from '../../components/Header/Header'
import './contacto.css'
import Footer from '../../components/Footer/Footer'
import img14 from '../../assets/banner02.png'

const Contacto = () => {
    return (
        <>
            <Header />
            {/* <h1 className="tituloContacto">Contacto</h1> */}
             <section id="contact-section">
                <div className="contact-left">
                    <img className='contact-img' src={img14} />
                </div>

                <div className="contact-right">
                    <h1 className='contact-titulo-contacto'>Contacto</h1>
                    <div className="address">
                        <ul>
                            <li>
                                <span className="address-logo">
                                    <i className="fas fa-paper-plane"></i>
                                </span>
                                <p>Direccion</p>
                                <span className="saprater">:</span>
                                <b>La Reduccion, San Miguel de Tucuman</b>
                            </li>
                            <li>
                                <span className="address-logo">
                                    <i className="fas fa-phone-alt"></i>
                                </span>
                                <p>Telefeno</p>
                                <span className="saprater">:</span>
                                <b>+54 381-654-4321</b>
                            </li>
                            <li>
                                <span className="address-logo">
                                    <i className="far fa-envelope"></i>
                                </span>
                                <p>Correo Electronico</p>
                                <span className="saprater">:</span>
                                <b>luchin_23_77@gmail.com</b>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
     )
}

export default Contacto

