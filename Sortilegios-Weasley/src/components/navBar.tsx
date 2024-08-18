<<<<<<< HEAD
import { NavLink, useNavigate} from "react-router-dom"
import { usuario } from "../elements/variablesGlobales";

export const NavBar= ()=>{
    const Navigate = useNavigate();
    const login = window.localStorage.getItem("isLogedIn");

    const logOut = () => {
        window.localStorage.removeItem("isLogedIn")
        Navigate('/Login');
    }

    return <nav className="Navegacion">
            <ul>
                <li><label>Buscar</label><input type="text" placeholder="ingresa el producto que deseas buscar"/></li>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><a href="">Tienda</a></li>
                <li><NavLink to="/home">Sobre nosotros</NavLink></li>
                {/* <li><NavLink to="/Login">Iniciar sesión</NavLink></li> */}
                {login ? (
                    <li>
                        ¡HOLA! {usuario.nombre}   
                        <abbr title="Cerrar sesión">
                        <img
                                src="https://img.icons8.com/?size=100&id=X1FIMcbT5Jed&format=png&color=000000"
                                alt="Cerrar sesión"
                                onClick={logOut}
                                style={{ cursor: 'pointer', width: '35px', height: '35px', verticalAlign: 'middle', marginLeft: '10px' }}
                            />
                        </abbr>                       
                    </li>
                ) : (
                    <li><NavLink to="/Login">Iniciar sesión</NavLink></li>
                )}

                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </li>
            </ul>
        </nav>
}
=======
import { NavLink } from "react-router-dom"
import { CarritoIcono } from "./icons"
import { Button, Container,Nav, Navbar} from "react-bootstrap"
import "../styles/navBar.css"
import { useCarritoCompras } from "../context/carrito"

export const NavBar= ()=>{
    const {abrirCarrito,cantidadCarrito} = useCarritoCompras()
    return (
        <>
          <Navbar className="shadow-sm mb-3 sticky-top" style={{backgroundColor:"#E19F41"}}>
            <Container>
              <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink} style={{margin:"0 2rem"}}>Inicio</Nav.Link>
                <Nav.Link to="/Tienda" as={NavLink} style={{margin:"0 2rem"}}>Tienda</Nav.Link>
                <Nav.Link to="/SobreNosotros" as={NavLink} style={{margin:"0 2rem"}}>Sobre nosotros</Nav.Link>
                <Nav.Link to="/" as={NavLink} style={{margin:"0 2rem"}}>Iniciar sesión</Nav.Link>
              </Nav>
              <Button className="carrito=button"
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
              </Button>
            </Container>
          </Navbar>
        </>
      );
    }
>>>>>>> ee4fcfd53f37f06490f4207495e23d18037c9e79
