import { NavLink, useNavigate} from "react-router-dom"
import { usuario } from "../elements/variablesGlobales";
import { CarritoIcono } from "./icons"
import { Button, Container,Nav, Navbar} from "react-bootstrap"
import "../styles/navBar.css"
import { useCarritoCompras } from "../context/carrito"

export const NavBar= ()=>{
    const Navigate = useNavigate();
    const login = window.localStorage.getItem("isLogedIn");

    const logOut = () => {
        window.localStorage.removeItem("isLogedIn")
        Navigate('/Login');
    }

    const {abrirCarrito,cantidadCarrito} = useCarritoCompras()
    return (
        <>
          <Navbar className="shadow-sm mb-3 sticky-top" style={{backgroundColor:"#E19F41"}}>
            <Container>
              <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink} style={{margin:"0 2rem"}}>Inicio</Nav.Link>
                <Nav.Link to="/Tienda" as={NavLink} style={{margin:"0 2rem"}}>Tienda</Nav.Link>
                <Nav.Link to="/SobreNosotros" as={NavLink} style={{margin:"0 2rem"}}>Sobre nosotros</Nav.Link> 
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
                    <Nav.Link to="/Login" as={NavLink} style={{margin:"0 2rem"}}>Iniciar sesión</Nav.Link>
                )}
                
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