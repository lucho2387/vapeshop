import img1 from '../../assets/vaporizador1.png'
import img2 from '../../assets/vaporizador2.png'
import img3 from '../../assets/vaporizador3.png'
import img4 from '../../assets/vaporizador4.png'
import img5 from '../../assets/atomizador1.png'
import img6 from '../../assets/atomizador2.png'
import img7 from '../../assets/cartucho1.png'
import img8 from '../../assets/cartucho2.png'
import img9 from '../../assets/cartucho3.png'
import img10 from '../../assets/liquido1.png'
import img11 from '../../assets/liquido2.png'
import img12 from '../../assets/liquido3.png'

//MAP
export const products = [
    {
        name: 'Kit Vaporesso Sky Solo Plus',
        colour: 'gris',
        image: img1,
        src: [
            img1,
            img5,
            img6,
            img7
        ],
        category: "vaporizadores",
        id: "1",
        stock: "2",
        price: "8157",
        count: 1,
        detail: "Lo que hace que este kit sea exclusivo es que es el primer kit de un solo cuerpo para todo uso en la línea de SMOK. Viene con una batería interna integrada de 1650 mAh y un sistema de voltaje de salida directa para proporcionar la máxima potencia."
    },
    {
        name: "Liquido Arandanos",
        colour: "rosa y negro",
        image: img10,
        src: [
            img10,
            img5,
            img6,
            img7
        ],
        id: "5",
        category: "accesorios",
        stock: "6",
        price: "990",
        count: 1,
        detail: "Receta mágica que combina Arándanos seleccionados con el balance justo de dulzor y acidez para lograr mantener el sabor silvestre de la fruta, y una masa digna de un maestro pastelero."
    },
    {
        name: "Cartucho Voopoo Pnp",
        colour: "transparente",
        image: img7,
        src: [
            img7,
            img5,
            img6,
            img10,
        ],
        id: "6",
        category: "cartuchos",
        stock: "8",
        price: "1800",
        count: 1,
        detail: "Los cartuchos de reemplazo Voopoo PnP son compatibles con el sistema Voopoo Drag X y Voopoo Drag S Pod Mod.El nuevo cartucho PnP de Voopoo es el complemento perfecto para tu atomizador que es TANK y POD. Es compatible con la serie PnP Coils de Voopoo."
    },
    {
        name: "Liquido Mr.Hel",
        colour: "marron y negro",
        image: img12,
        src: [
            img12,
            img5,
            img6,
            img10,
        ],
        id: "7",
        category: "accesorios",
        stock: "14",
        price: "990",
        count: 1,
        detail: "Una maravilla del Mixer Max Savage que en esta ocasión logra  combinar sabores complejos de tabaco, frutos secos y crema de vainillas, obteniendo un aroma único para el público más exigente y habituados a los Tabaquiles mas famosos del mercado."
    },
    {
        name: "Cartucho Vaporezo Swag",
        colour: "gris plata",
        image: img8,
        src: [
            img8,
            img5,
            img6,
            img10,
        ],
        id: "8",
        category: "cartuchos",
        stock: "22",
        price: "2500",
        count: 1,
        detail: "Cartucho para Vaporesso Swag PX80."
    },
    {
        name: 'Kit Voopoo Argus',
        colour: 'azul',
        image: img2,
        src: [
            img2,
            img5,
            img6,
            img10,
        ],
        category: "vaporizadores",
        id: "2",
        stock: "5",
        price: "15645",
        count: 1,
        detail: "El kit Voopoo Argus está diseñado para el vaper serio. Con una construcción duradera de aleación de zinc, el Argus hace alarde de un acabado de cuero acentuado que ofrece agarre y clase. Maxima duracion. Estilo muy personalizado."
    },
    {
        name: 'Kit Voopoo Argus X',
        colour: 'negro',
        image: img3,
        src: [
            img3,
            img5,
            img6,
            img10,
        ],
        category: "vaporizadores",
        id: "3",
        stock: "3",
        price: "11025",
        count: 1,
        detail: "ARGUS X actualiza una vez más la definición de estética exterior. La gran duración de la batería, el chip GENE.TT y la potente salida de 80 W le brindarán una experiencia de valor sin precedentes. Una vez que empiezas, no puedes dejarlo."
    },
    {
        name: "Liquido Suika Wakai",
        colour: "gris y blanco",
        image: img11,
        src: [
            img11,
            img5,
            img6,
            img10,
        ],
        id: "9",
        category: "accesorios",
        stock: "10",
        price: "990",
        count: 1,
        detail: "Es un mix de frutas blandas, frescas y jugosas. Encontramos Melón, Sandía, Manzana, Mango y notas de Ananá. Cerrando los ojos tendrás la sensación de estar tomando en un melón calado, un licuado natural y refrescante."
    },
    {
        name: "Cartucho Voopoo Vinci",
        colour: "amarillo y negro",
        image: img9,
        src: [
            img9,
            img5,
            img6,
            img10,
        ],
        id: "10",
        category: "cartuchos",
        stock: "10",
        price: "990",
        count: 1,
        detail: "Cartucho para Voopoo Vinci X 2. El cartucho de repuesto VooPoo Vinci 2 / X 2 está diseñado específicamente para usarse con los sistemas VooPoo Vinci 2 y Vinci X 2 Pod."
    },
    {
        name: "Atomizador Melo",
        colour: "amarillo y negro",
        image: img6,
        src: [
            img6,
            img5,
            img7,
            img10,
        ],
        id: "11",
        category: "atomizadores",
        stock: "3",
        price: "3620",
        count: 1,
        detail: "El MELO 300 Sub Ohm Tank de Eleaf cuenta con un nuevo cabezal ES Sextuple-0.17ohm potente que consta de seis bobinas y tiene una potencia ultra alta de 100-300W para una gran producción de vapor."
    },
    {
        name: "Atomizador Zeus",
        colour: "negro",
        image: img5,
        src: [
            img5,
            img6,
            img7,
            img10,
        ],
        id: "12",
        category: "atomizadores",
        stock: "4",
        price: "3250",
        count: 1,
        detail: "El tan esperado tanque Sub-Ohm a prueba de fugas de GeekVapes está aquí! el tanque subohm Zeus conserva el concepto de diseño estructural del Zeus original, con un sistema de bobina preconstruido de cambio rápido."
    },
    {
        name: 'Kit Vaporesso Swag 80W',
        colour: 'amarillo y negro',
        image: img4,
        src: [
            img4,
            img5,
            img7,
            img10,
        ],
        category: "vaporizadores",
        id: "4",
        stock: "4",
        price: "11445",
        count: 1,
        detail: "Es un potente vaporizador con voltaje variable tipo pluma, que integra una batería recargable de 2800mAh, un botón de salida de potencia ajustable y está equipado con el nuevo tanque SMOK TF para extraer el mejor sabor y maxima duracion."
    }
]
