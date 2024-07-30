
import { NavBar } from "../components/navBar"
import { Producto } from "../components/Producto"
import {productos} from "../mocks/productos.json"
import { Button, Stack } from "react-bootstrap"
import "../styles/Tienda.css"
import { HerramientasIcon, PotionIcon } from "../components/icons"

export const Tienda= () => {
    return(
        <>
        <NavBar/>
        <div className="contenido-tienda">
        <Stack className="d-flex align-items-center" direction="vertical" style={{color:"white"}}>
            <h1>Filtros</h1>
            <div>
            <Button style={{outline:"none", border:"none", backgroundColor:"transparent", display:"flex",alignItems:"center"}}><span style={{marginRight:"5px"}}><PotionIcon/></span> Pociones</Button>
            <Button style={{outline:"none", border:"none", backgroundColor:"transparent", display:"flex",alignItems:"center"}}><span style={{marginRight:"5px"}}><HerramientasIcon/></span> Herramientas</Button>
            </div>
        </Stack>
        
        <section className="productos">
            <Producto productos={productos}/>
        </section>
        
        </div>
        </>
    )
}