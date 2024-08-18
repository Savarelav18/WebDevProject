import { NavBar } from '../components/navBar'
import '../styles/SobreNosotros.css'
import {Integrante} from '../elements/Integrante'
import { Container, Row , Col} from 'react-bootstrap'
import Image from 'react-bootstrap/Image';

export const Sobre_Nosotros = () =>{
    return(
    <>
    <NavBar/>
    <Container>
        <Row>
            <Col sm={8}>
            <Image className="gemelos" src="src/assets/hermanosW.jpg" fluid />;
            </Col>
            <Col sm={4}>
            <div className="contenido" style={{color:"white"}}>
            <h1>Sobre Nosotros</h1>

            <p>Sortilegios Weasley, también conocida como Weasley & Weasley, es una tienda de artículos de bromas 
                ubicada en el Callejón Diagon, propiedad de los gemelos Fred y George Weasley.</p>
            <p>Vendemos productos de bromas (las orejas extensibles, los surtidos salta clases, las pociones de amor
                etc.) También hay una sección de productos de trucos de magia para muggles aficionados.</p>
            <p>la posibilidad de traer nuestros productos al mundo muggle fue posible gracias a 4 elfos
                que estan en la busqueda de su calcetín para lograr ser elfos libres 
                (graduarse como ingenieros de sistemas).</p>
            
            <div className='integrantes' style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <Integrante nombre='Juanse'/>
                <Integrante nombre='Laney'/>
                <Integrante nombre='Valos'/>
                <Integrante nombre='Sanvar'/>
            </div>

        </div>
            
            </Col>
        </Row>
    </Container>
    </>
    )}

