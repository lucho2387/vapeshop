import React from 'react'
import Header from '../../components/Header/Header'
import './nosotros.css'
import Footer from '../../components/Footer/Footer'
import img13 from '../../assets/banner01.png'

const Nosotros = () => {
    return (
        <>
            <Header />
            {/* <h1 className="tituloNosotros">Nosotros</h1> */}
             <section id="about-section">
                <div className="about-left">
                    <img src={img13} />
                </div>

                <div className="about-right">
                    <h1 className='about-nosotros'>Quienes Somos</h1>
                    <p>
                        Somos usuarios de los productos que tenemos, interesados en la maxima atencion posible, la cual no siempre es "el cliente tiene la razon siempre", si no que nuestra atencion de primera se basa en el conocimiento y poder brindar informacion detallada y practica para que el nuevo usuario saque el mayor jugo posible de su inversion.
                    </p>
                </div>
            </section>
            <Footer />
        </>
     )
}

export default Nosotros
