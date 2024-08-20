
import { NavBar } from "../components/navBar"
import { Producto } from "../components/Producto"
import { Button, Container, Stack, Col,Row } from "react-bootstrap"
import "../styles/Tienda.css"
import { DownArrowIcon, HerramientasIcon, JuguetesIcon, PotionIcon, UpArrowIcon } from "../components/icons"
import { useState } from "react"
import Form from 'react-bootstrap/Form';
import {mockProductos} from "../mocks/MockProductos.ts";

export const Tienda= () => {
    const productos = mockProductos;

    const [productosTienda,setProductos] = useState(productos)
    const [productosfiltrados,setProductosFiltrados] = useState(productos)
    
    const filtroCateforia = (categoria:string) =>{
        const filtro = productosTienda.filter(producto=> producto.categoria === categoria)
        setProductosFiltrados(filtro)
    }

    const productosOrdenadosAsc = ()=>{
        const ordenAsc= [...productosfiltrados].sort((a, b) => a.precio - b.precio)
        console.log(productosfiltrados)
        setProductosFiltrados(ordenAsc)
    }

    const productosOrdenadosDesc = ()=>{
        const ordenDesc= [...productosfiltrados].sort((a, b) => b.precio - a.precio)
        console.log(productosfiltrados)
        setProductosFiltrados(ordenDesc)
    }

    return(
        <>
        <NavBar/>
        <Container style={{color:"white"}}>
            <Row>
                <Col sm={2}>
                    <Container>
                        <h1>Filtros</h1>
                        <Button onClick={()=> filtroCateforia("pociones")} style={{outline:"none", border:"none", backgroundColor:"transparent", display:"flex",alignItems:"center"}}><span style={{marginRight:"5px"}}><PotionIcon/></span> Pociones</Button>
                        <Button onClick={()=> filtroCateforia("Bromas")} style={{outline:"none", border:"none", backgroundColor:"transparent", display:"flex",alignItems:"center"}}><span style={{marginRight:"5px"}}><HerramientasIcon/></span> Herramientas</Button>
                        <Button onClick={()=> filtroCateforia("juguetes")} style={{outline:"none", border:"none", backgroundColor:"transparent", display:"flex",alignItems:"center"}}><span style={{marginRight:"5px"}}><JuguetesIcon/></span> Juguetes</Button>
                    </Container>
                    <Container>
                    <h1>Orden</h1>
                        <Button onClick={()=> productosOrdenadosDesc()} style={{outline:"none", border:"none", backgroundColor:"transparent", display:"flex",alignItems:"center"}} ><span style={{marginRight:"5px"}}><UpArrowIcon/></span> Mayor precio</Button>
                        <Button onClick={()=> productosOrdenadosAsc()} style={{outline:"none", border:"none", backgroundColor:"transparent", display:"flex",alignItems:"center"}} ><span style={{marginRight:"5px"}}><DownArrowIcon/></span> Menor precio</Button>
                        <Button variant="danger" size="sm" onClick={()=> setProductosFiltrados(productos)} style={{display:"flex",alignItems:"center", justifyContent:"center", marginTop:"1rem"}}>Remover Filtros</Button>
                    </Container>
                </Col>
                <Col sm={10}>
                
                <Form className="d-flex" style={{paddingLeft:"4rem", marginTop:"1rem"}}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="success">Search</Button>
                </Form>
                <Container>
            <Producto productos={productosfiltrados}/>
                </Container>
                </Col>
            </Row>
        </Container>
        </>
    )
}