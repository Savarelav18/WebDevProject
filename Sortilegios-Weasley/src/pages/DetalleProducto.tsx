import { NavBar } from "../components/navBar.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { mockProductos } from "../mocks/MockProductos.ts";
import { Imagenes } from "../components/DetalleProducto/Imagenes.tsx";
import { Descripcion } from "../components/DetalleProducto/Description.tsx";
import { Comentarios } from "../components/DetalleProducto/Comentarios.tsx";
import "../styles/DetalleProducto.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export function DetalleProducto() {
    const { productId } = useParams();
    const [producto, setProducto] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:8080/productos/${productId}`).then(response => {
            if (response.status == 200) {
                return response.json()
            }
            throw "Error"
        }).then(data => setProducto(data));
    }, [])
    const navigate = useNavigate()
    return (
        <>
            <NavBar />
            <Container className="fondo-completo">
                {producto ? <>
                    <Button id="btnVolver" onClick={() => navigate("/Tienda")}>Volver</Button>
                    <Row className="fondo-descripcion">
                        <Col>
                            <Container>
                                <Imagenes imagenes={producto && producto!.imagenes} />
                            </Container>
                        </Col>
                        <Col>
                            <Container>
                                <Descripcion producto={producto!} />
                            </Container>
                        </Col>
                    </Row>
                    <Comentarios comentarios={producto!.comentarios} />
                </>
                    : "Error: el producto solicitado no se encuentra"}
            </Container >

        </>
    )
}