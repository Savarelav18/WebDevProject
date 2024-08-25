import { NavBar } from "../components/navBar"
import { Producto } from "../components/Producto"
import { Button, Container, Stack, Col, Row } from "react-bootstrap"
import "../styles/Tienda.css"
import { DownArrowIcon, BromasIcon, DulcesIcon, ExplosivosIcon, UpArrowIcon } from "../components/icons"
import { useState } from "react"
import Form from 'react-bootstrap/Form';
import { mockProductos } from "../mocks/MockProductos.ts";
import { CategoriaIcon } from "../components/CategoriaIcon.tsx"

export const Tienda = () => {
    const productos = mockProductos;
    const categorias = [...new Set(productos.map(producto => producto.categoria))];

    const [productosTienda, setProductos] = useState(productos)
    const [productosFiltrados, setProductosFiltrados] = useState(productos)
    const [busqueda, setBusqueda] = useState("")

    const filtroCateforia = (categoria: string) => {
        const filtro = productosTienda.filter(producto => producto.categoria === categoria)
        setProductosFiltrados(filtro)
    }

    const productosOrdenadosAsc = () => {
        const ordenAsc = [...productosFiltrados].sort((a, b) => a.precio - b.precio)
        console.log(productosFiltrados)
        setProductosFiltrados(ordenAsc)
    }

    const productosOrdenadosDesc = () => {
        const ordenDesc = [...productosFiltrados].sort((a, b) => b.precio - a.precio)
        console.log(productosFiltrados)
        setProductosFiltrados(ordenDesc)
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBusqueda(e.target.value);
        const productosFiltrados = productosTienda.filter(producto =>
            producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setProductosFiltrados(productosFiltrados);
    };

    return (
        <>
        <NavBar/>
        <Container style={{color:"white"}}>
            <Row>
                <Col sm={2}>
                    <Container>
                        <h1>Filtros</h1>
                        {categorias.map((categoria, index) => (
                        <Button key={index} onClick={() => filtroCateforia(categoria)} style={{outline:"none", border:"none", backgroundColor:"transparent", display:"flex",alignItems:"center"}}>
                        <span style={{marginRight:"5px"}}><CategoriaIcon categoria={categoria}/></span>{categoria}
                        </Button>))}
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
                    onChange={handleSearch}
                  />
                </Form>
                <Container style={{marginTop:"2rem"}}>
                    <Row style={{gap:"2rem", display:"flex",justifyContent:"center"}}>
                    <Producto productos={productosFiltrados}/>
                    </Row>
                </Container>
                </Col>
            </Row>
        </Container>
        </>
    )
}