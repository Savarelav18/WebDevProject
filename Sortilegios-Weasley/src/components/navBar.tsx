import { NavLink, useNavigate } from "react-router-dom"
//import { usuario } from "../elements/variablesGlobales";
import { CarritoIcono, IconoMenu, IconoUsuarioLogin, IconoLogout, IconoUser } from "./icons"
import { Button, Container,FormLabel,Nav, Navbar, Offcanvas} from "react-bootstrap"
import "../styles/navBar.css"
import { useCarritoCompras } from "../context/carrito"
import { useState } from "react";

export const NavBar = () => {
  const Navigate = useNavigate();
  const login = window.localStorage.getItem("isLogedIn");
  const username  = window.localStorage.getItem("username")|| "Muggle";
  console.log("Estado de Login:", login);
  console.log("Nombre de Usuario:", username);
  
  const logOut = () => {
    window.localStorage.removeItem("isLogedIn");
    window.localStorage.removeItem("username");
    Navigate('/Login');
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const {abrirCarrito,cantidadCarrito} = useCarritoCompras()
    return (
        <>
          <Navbar className="shadow-sm mb-3 sticky-top" style={{backgroundColor:"#E19F41"}}>
            <Container>
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src="../src/assets/logonavbar.png"
                  width="75"
                  height="75"
                  className="d-inline-block align-center"
                />{' '}
            </Navbar.Brand>
              <Nav className="me-auto" id="navbar-menu">
                <Nav.Link to="/" as={NavLink} style={{margin:"0 1.5rem"}}>Inicio</Nav.Link>
                <Nav.Link to="/Tienda" as={NavLink} style={{margin:"0 1.5rem"}}>Tienda</Nav.Link>
                <Nav.Link to="/SobreNosotros" as={NavLink} style={{margin:"0 1.5rem"}}>Sobre nosotros</Nav.Link> 
              </Nav>
              <Nav className="me-auto" id="nav_toggle">
                <Button id="botonMenu" onClick={handleShow}><IconoMenu/></Button>
                <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Menú</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body id="ContentMenu">
                  <Nav.Link className="active" to="/" as={NavLink}>Inicio</Nav.Link>
                  <Nav.Link to="/Tienda" as={NavLink}>Tienda</Nav.Link>
                  <Nav.Link to="/SobreNosotros" as={NavLink}>Sobre nosotros</Nav.Link>
                  <Container id="ImagenMenu">
                    <img src="https://i.pinimg.com/736x/e0/d9/c1/e0d9c1002f137376a32fb9e2510136de.jpg"></img>
                  </Container>
                </Offcanvas.Body>
              </Offcanvas>
              </Nav>
              {login ? (
                <FormLabel style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 1rem", position: "relative" }}>
                      <IconoUser/>  ¡Hola {username}!
                      <abbr title="Cerrar sesión">
                          <Button onClick={logOut} style={{ padding: 0, border: 'none', background: 'transparent', cursor: 'pointer' }}>
                              <IconoLogout/>
                          </Button>
                      </abbr>
                  </FormLabel>
                ) : (
                    <Nav.Link to="/Login" as={NavLink} style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"0 1rem",position:"relative"}}><span style={{marginRight:"0.6rem"}}><IconoUsuarioLogin/></span>Iniciar sesión</Nav.Link>
                )}
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