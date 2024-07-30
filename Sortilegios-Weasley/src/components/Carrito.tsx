import { Button, Offcanvas, Stack } from "react-bootstrap";
import "../styles/Carrito.css";
import { useCarritoCompras } from "../context/carrito";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductoCarrito } from "../elements/ProductoCarrito";
import {productos} from "../mocks/productos.json"

type CarritoProps={
  abierto:boolean
}

export function Carrito ({abierto}:CarritoProps){
  const {cerrarCarrito,productosCarrito} = useCarritoCompras()
  return <Offcanvas show={abierto} onHide={cerrarCarrito} placement="end">
    <Offcanvas.Header closeButton>
      <img src="https://weasley-wizard-wheezes.netlify.app/favicon.png" alt="logo" style={{objectFit:"cover", maxHeight:"100px"}}/>
      <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Stack gap={3}>
        {productosCarrito.map(producto =>(
          <ProductoCarrito key={producto.id} {...producto}/>
        ))}
      <div className="ms-auto fw-bold fs-5">
          
          Total {productosCarrito.reduce((total,itemCarrito)=>{
            const item =  productos.find(i => i.id === itemCarrito.id)
            return total+ (item?.precio || 0) * itemCarrito.cantidad
            },0)
            } Galeones
      </div>
      <div>
        <Button className="w-100" style={{backgroundColor:"#0C2D4D"}}>Pagar</Button>
      </div>
      </Stack>
    </Offcanvas.Body>
  </Offcanvas>
}
