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
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSortAsc, setselectedSortAsc] = useState(false);
    const [selectedSortDes, setselectedSortDes] = useState(false);

    const filtroCateforia = (categoria: string) => {
        if (selectedCategory === categoria) {
            // Si la categoría ya está seleccionada, deseleccionarla y mostrar todos los productos
            setSelectedCategory("");
            setProductosFiltrados(productosTienda);
          } else {
            // Si no está seleccionada, aplicamos el filtro y cambiamos el estilo del botón
            const filtro = productosTienda.filter(producto => producto.categoria === categoria);
            setProductosFiltrados(filtro);
            setSelectedCategory(categoria);
          }
    }

    const productosOrdenadosAsc = () => {
      if (selectedSortAsc) {
        // Si ya está seleccionado, deseleccionar y mostrar productos no ordenados
        setProductosFiltrados(productosFiltrados);
        setselectedSortAsc(false);
      } else {  
      
      const ordenAsc = [...productosFiltrados].sort((a, b) => a.precio - b.precio)
        setProductosFiltrados(ordenAsc)
        setselectedSortAsc(true)
        setselectedSortDes(false)
      }
    }

    const productosOrdenadosDesc = () => {
      if (selectedSortDes) {
        // Si ya está seleccionado, deseleccionar y mostrar productos no ordenados
        setProductosFiltrados(productosFiltrados);
        setselectedSortDes(false);
      } else {
        // Ordenar productos por precio descendente y marcar el botón como seleccionado
        const ordenDes = [...productosFiltrados].sort((a, b) => b.precio - a.precio);
        setProductosFiltrados(ordenDes);
        setselectedSortDes(true);
        setselectedSortAsc(false)
      }
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBusqueda(e.target.value);
        const productosFiltrados = productosTienda.filter(producto =>
            producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setProductosFiltrados(productosFiltrados);
    };

    const removerFiltros = () => {
        setSelectedCategory("");
        setProductosFiltrados(productosTienda);
        setselectedSortAsc(false)
        setselectedSortDes(false)
      };

    return (
        <>
        <NavBar/>
        <Container style={{color:"white"}}>
            <Row id="rowTienda">
                <Col sm={2} id="filterCol">
                    <Container>
                        <h1>Filtros</h1>
                        {categorias.map((categoria, index) => (
                        <Button
                        key={index}
                        onClick={() => filtroCateforia(categoria)}
                        style={{
                          outline: 'none',
                          border: selectedCategory === categoria ? '2px solid orange' : 'none',
                          backgroundColor: 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          color: selectedCategory === categoria ? 'orange' : 'white',
                        }}
                      >
                        <span style={{ marginRight: '5px'}}>
                          <CategoriaIcon categoria={categoria}/>
                        </span>
                        {categoria}
                      </Button>))}
                    </Container>
                    <Container>
                    <h1>Orden</h1>
                        <Button onClick={()=> productosOrdenadosDesc()} style={{outline:"none", border: selectedSortDes ? '2px solid orange' : 'none', backgroundColor:"transparent", display:"flex",alignItems:"center",color: selectedSortDes ? 'rgb(225, 159, 65)' : 'white',}} ><span style={{marginRight:"5px"}}><UpArrowIcon/></span> Mayor precio</Button>
                        <Button onClick={()=> productosOrdenadosAsc()} style={{outline:"none", border: selectedSortAsc ? '2px solid orange' : 'none', backgroundColor:"transparent", display:"flex",alignItems:"center",color: selectedSortAsc ? 'rgb(225, 159, 65)' : 'white',}} ><span style={{marginRight:"5px"}}><DownArrowIcon/></span> Menor precio</Button>
                        <Button variant="danger" size="sm" onClick={()=> removerFiltros()} style={{display:"flex",alignItems:"center", justifyContent:"center", marginTop:"1rem"}}>Remover Filtros</Button>
                    </Container>
                </Col>
                <Col sm={10} id="colProductos">
                
                <Form className="d-flex" >
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