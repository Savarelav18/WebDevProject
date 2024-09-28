import '../styles/Inicio.css'
import '../styles/Bienvenida.css'
import '../styles/Producto.css'

import { NavBar } from '../components/navBar'
import { Bienvenida } from '../components/Bienvenida'
import { Producto } from '../components/Producto'
import { Col, Container, Row } from 'react-bootstrap'
import { mockProductos } from '../mocks/MockProductos'
import { useEffect, useState } from 'react'

function Inicio() {
  const productos = mockProductos;
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8080/productos').then(response => response.json()).then(data => setData(data))
  }, [])


  return (
    <>
      <NavBar />
      <Bienvenida />
      <Container id='ProductosVendidos'>
        <h1>Productos más vendidos</h1>
        <Container style={{ marginTop: "2rem" }}>
          <Row style={{ gap: "2rem", display: "flex", justifyContent: "center" }}>
            {data && <Producto productos={data.slice(0, 4)} />}
          </Row>
        </Container>
      </Container>


    </>
  )
}

export default Inicio
