import '../styles/Inicio.css'
import '../styles/Bienvenida.css'
import '../styles/Producto.css'

import { NavBar } from '../components/navBar'
import { Bienvenida } from '../components/Bienvenida'
import { Producto } from '../components/Producto'
import { Col, Container, Row} from 'react-bootstrap'
import { mockProductos } from '../mocks/MockProductos'

function Inicio() {
    const productos = mockProductos;
  return (
    <>
      <NavBar/>
      <Bienvenida/>
      <Container id='ProductosVendidos'>
      <h1>Productos más vendidos</h1>
        <Container style={{marginTop:"2rem"}}>
          <Row style={{gap:"2rem", display:"flex",justifyContent:"center"}}>
          <Producto productos={productos.slice(0,4)}/>
          </Row>
        </Container>
      </Container>


    </>
  )
}

export default Inicio
