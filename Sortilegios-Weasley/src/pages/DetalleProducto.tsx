import { NavBar } from "../components/navBar.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { mockProductos } from "../mocks/MockProductos.ts";
import { Imagenes } from "../components/DetalleProducto/Imagenes.tsx";
import { Descripcion } from "../components/DetalleProducto/Description.tsx";
import { Comentarios } from "../components/DetalleProducto/Comentarios.tsx";
import "../styles/DetalleProducto.css";
import { Container,Row,Col,Button } from "react-bootstrap";

export function DetalleProducto() {
    const { productId } = useParams();
    const producto = mockProductos.find(x => x.id === Number(productId));
    const navigate =  useNavigate()

    return (
        <>
            <NavBar />
            <Container className="fondo-completo">
            <Button id="btnVolver" onClick={()=>navigate("/Tienda")}>Volver</Button>
                <Row className="fondo-descripcion">
                    <Col>
                    <Container>
                    <Imagenes imagenes={producto!.imagenes} />
                    </Container>
                    </Col>
                    <Col>
                    <Container>
                    <Descripcion producto={producto!} />
                    </Container>
                    </Col>
                </Row>
                <Comentarios comentarios={producto!.comentarios} />
            </Container >

        </>
    )
}