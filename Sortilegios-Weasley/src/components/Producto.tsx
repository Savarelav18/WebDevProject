import { Snitch } from "../elements/Snitch"
import "../styles/Producto.css"
import { Producto as producto } from "../types"
import {useCarritoCompras} from "../context/carrito"
import {Card, Button} from "react-bootstrap";
import { IconoPeso } from "../components/icons";
import { COPFormmater, magicDivisesToMuggle } from "../services/ConversorDivisas";

interface ProductosProp {
    productos: producto[];
}

export const Producto: React.FC<ProductosProp> = ({ productos }) => {
    const { getCantidadProducto, aumentarCantidadProducto, removerProducto } = useCarritoCompras();

    return (
        <>
            {productos.map(producto => (
                <Card border="dark" style={{ width: '18rem',cursor:"pointer",borderRadius: "20px"}} key={producto.id} id="product-card">
                    <Card.Img variant="top" src={producto.imagenes[0]} style={{aspectRatio:"1/1",objectFit:"cover",marginTop:"0.5rem"}} onClick={()=>window.location.href="/DetalleProducto/" + producto.id}/>
                    <Card.Body style={{height:"50%"}} onClick={()=>window.location.href="/DetalleProducto/" + producto.id}>
                        <Card.Title>{producto.nombre}</Card.Title>
                    </Card.Body>
                    <Card.Body>
                    <Card.Text >
                            <span style={{display:"block"}}><strong>Categoria: </strong> {producto.categoria}</span>
                            <Snitch calificacion={producto.calificacion}></Snitch>
                        </Card.Text>
                        <Card.Text style={{display:"flex",alignItems:"center"}}><IconoPeso></IconoPeso>{producto.precio} {producto?.divisa} / {COPFormmater(magicDivisesToMuggle(producto!.divisa, producto!.precio)!)} COP</Card.Text>
                    </Card.Body>
                    <Card.Footer style={{borderTop:"none"}}>{getCantidadProducto(producto.id)===0?
                    (<Button style={{width:"100%", backgroundColor:"#038bbb",border:"none"}} onClick={()=> aumentarCantidadProducto(producto.id)}>Añadir al carrito</Button>):
                    (<Button variant="danger" style={{width:"100%",backgroundColor:"#F3532F"}} onClick={()=>removerProducto(producto.id)}>Remover del carrito</Button>)}
                    </Card.Footer>
                </Card>
            ))}
        </>
    );
};