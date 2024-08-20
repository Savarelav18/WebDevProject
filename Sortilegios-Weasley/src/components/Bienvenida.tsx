import { Container, Row, Col, Image, Stack } from "react-bootstrap"

export const Bienvenida = () =>{
    return (
    <Container>
        <Row>
            <Col className="d-flex align-items-center justify-content-center">
            <Image src="src/assets/logo.png" alt="" fluid />;
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
            <Stack className="d-flex align-items-center justify-content-center" direction="vertical" style={{color:"white"}}>
            <h1>¡Bienvenidos a Sortilegios Weasley!</h1>
            <p>¡Hola, hola! Somos Fred y George Weasley, y estamos aquí para darles la bienvenida a nuestro pequeño rincón mágico.
            No importa si eres un mago experimentado o un muggle curioso, en Sortilegios Weasley tenemos todo lo que necesitas para
            vivir una aventura mágica inolvidable.</p>
            </Stack>       
            </Col>
        </Row>
    </Container>
    )}