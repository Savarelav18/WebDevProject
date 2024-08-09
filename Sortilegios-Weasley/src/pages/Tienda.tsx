
import { NavBar } from "../components/navBar"
import { Producto } from "../components/Producto"
import {productos} from "../mocks/productos.json"
import { Button, Stack } from "react-bootstrap"
import "../styles/Tienda.css"
import { DownArrowIcon, HerramientasIcon, JuguetesIcon, PotionIcon, UpArrowIcon } from "../components/icons"
import { useState } from "react"
import Form from 'react-bootstrap/Form';

export const Tienda= () => {

    const [productosTienda,setProductos] = useState(productos)
    const [productosfiltrados,setProductosFiltrados] = useState(productos)
    
    const filtroCateforia = (categoria:string) =>{
        const filtro = productosTienda.filter(producto=> producto.categoria === categoria)
        setProductosFiltrados(filtro)
    }

    return(
        <>
        <NavBar/>
        <div className="contenido-tienda">
        <Stack className="d-flex align-items-center" direction="vertical" style={{color:"white"}}>
            <h1>Filtros</h1>
            <div>
            <Button onClick={()=> filtroCateforia("herramientas")} style={{outline:"none", border:"none", backgroundColor:"transparent", display:"flex",alignItems:"center"}}><span style={{marginRight:"5px"}}><PotionIcon/></span> Pociones</Button>
            <Button onClick={()=> filtroCateforia("Bromas")} style={{outline:"none", border:"none", backgroundColor:"transparent", display:"flex",alignItems:"center"}}><span style={{marginRight:"5px"}}><HerramientasIcon/></span> Herramientas</Button>
            <Button onClick={()=> filtroCateforia("juguetes")} style={{outline:"none", border:"none", backgroundColor:"transparent", display:"flex",alignItems:"center"}}><span style={{marginRight:"5px"}}><JuguetesIcon/></span> Juguetes</Button>
            <Button variant="danger" size="sm" onClick={()=> setProductosFiltrados(productos)} style={{display:"flex",alignItems:"center", justifyContent:"center", margin:"auto"}}>Remover Filtros</Button>
            </div>
            <h1>Orden</h1>
            <Button style={{outline:"none", border:"none", backgroundColor:"transparent", display:"flex",alignItems:"center"}}><span style={{marginRight:"5px"}}><UpArrowIcon/></span> Mayor precio</Button>
            <Button style={{outline:"none", border:"none", backgroundColor:"transparent", display:"flex",alignItems:"center"}}><span style={{marginRight:"5px"}}><DownArrowIcon/></span> Menor precio</Button>

        </Stack>
        
        <section className="productos">
                <Form className="d-flex" style={{paddingLeft:"4rem"}}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="success">Search</Button>
                </Form>
            <Producto productos={productosfiltrados}/>
            
        </section>
        
        </div>
        </>
    )
}