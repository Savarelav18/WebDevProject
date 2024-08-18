import '../styles/Inicio.css'
import '../styles/Bienvenida.css'
import { NavBar } from '../components/navBar'
import { Bienvenida } from '../components/Bienvenida'
import { Producto } from '../components/Producto'
import {productos} from "../mocks/productos.json"
import { Col, Container, Row} from 'react-bootstrap'

function Inicio() {
  return (
    <>
      <NavBar/>
      <Bienvenida/>
      <Container>
      <h1 style={{color:"white",margin:"1em 2.5em",fontSize:"42px"}}>Productos más vendidos</h1>
        <Row>
          <Col>
          <Producto productos={productos.filter(producto=>producto.id<=4)}/>
          </Col>
        </Row>
      </Container>
      
      
    </>
  )
}

export default Inicio


