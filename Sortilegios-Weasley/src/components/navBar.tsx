import { NavLink, useNavigate } from "react-router-dom"
import { usuario } from "../elements/variablesGlobales";
import { CarritoIcono, IconoMenu, IconoUsuarioLogin } from "./icons"
import { Button, Container, FormLabel, Nav, Navbar, Offcanvas } from "react-bootstrap"
import "../styles/navBar.css"
import { useCarritoCompras } from "../context/carrito"
import { useState } from "react";

export const NavBar = () => {
  const Navigate = useNavigate();
  const login = window.localStorage.getItem("isLogedIn");

  const logOut = () => {
    window.localStorage.removeItem("isLogedIn")
    Navigate('/Login');
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  const { abrirCarrito, cantidadCarrito } = useCarritoCompras()
  return (
    <>
      <Navbar className="shadow-sm mb-3 sticky-top" style={{ backgroundColor: "#E19F41" }}>
        <Container>
          <Nav className="me-auto" id="navbar-menu">
            <Nav.Link to="/" as={NavLink} style={{ margin: "0 1.5rem" }}>Inicio</Nav.Link>
            <Nav.Link to="/Tienda" as={NavLink} style={{ margin: "0 1.5rem" }}>Tienda</Nav.Link>
            <Nav.Link to="/SobreNosotros" as={NavLink} style={{ margin: "0 1.5rem" }}>Sobre nosotros</Nav.Link>
          </Nav>
          <Nav className="me-auto" id="nav_toggle">
            <Button id="botonMenu" onClick={handleShow}><IconoMenu /></Button>
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
              ¡HOLA! {usuario.nombre}
              <abbr title="Cerrar sesión">
                <img
                  src="https://img.icons8.com/?size=100&id=X1FIMcbT5Jed&format=png&color=000000"
                  alt="Cerrar sesión"
                  onClick={logOut}
                  style={{ cursor: 'pointer', width: '35px', height: '35px', verticalAlign: 'middle', marginLeft: '10px' }}
                />
              </abbr>
            </FormLabel>
          ) : (
            <Nav.Link to="/Login" as={NavLink} style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 1rem", position: "relative" }}><span style={{ marginRight: "0.6rem" }}><IconoUsuarioLogin /></span>Iniciar sesión</Nav.Link>
          )}
          <Button className="carrito=button"
            style={{ position: "relative", cursor: "pointer", backgroundColor: "transparent", outline: "none", border: "none" }}
            onClick={abrirCarrito}>
            <CarritoIcono></CarritoIcono>
            <div style={{
              color: "white",
              width: "1rem",
              height: "1rem",
              borderRadius: "100%",
              position: "absolute",
              bottom: "0",
              right: "0",
              fontSize: "20px",
              transform: "(25%,25%)"
            }}>
              {cantidadCarrito}
            </div>
          </Button>
        </Container>
      </Navbar>

    </>

  );
}