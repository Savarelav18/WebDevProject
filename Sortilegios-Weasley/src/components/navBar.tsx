import { NavLink } from "react-router-dom"
import { Carrito } from "./Carrito"
import { CarritoIcono } from "./icons"
import { useId } from "react"

import "../styles/navBar.css"
import { useCarritoCompras } from "../context/carrito"

export const NavBar= ()=>{
    const {abrirCarrito,cantidadCarrito} = useCarritoCompras()
    return <nav className="Navegacion">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/Tienda">Tienda</NavLink></li>
                <li><NavLink to="/SobreNosotros">Sobre nosotros</NavLink></li>
                <li><label>Buscar</label><input type="text" placeholder="ingresa el producto que deseas buscar"/></li>
                <li><NavLink to="/Login">Iniciar sesión</NavLink></li>
                <li>
                    <button className="carrito=button"
                    style={{position:"relative",cursor:"pointer",backgroundColor:"transparent",outline:"none",border:"none"}}
                    onClick={abrirCarrito}>
                        <CarritoIcono></CarritoIcono>
                        <div style={{
                        color:"white",
                        width:"1rem",
                        height:"1rem",
                        borderRadius:"100%",
                        position:"absolute",
                        bottom:"0",
                        right:"0",
                        fontSize:"20px",
                        transform:"(25%,25%)"}}>
                        {cantidadCarrito}
                    </div>
                    </button>
                </li>
            </ul>
        </nav>
}