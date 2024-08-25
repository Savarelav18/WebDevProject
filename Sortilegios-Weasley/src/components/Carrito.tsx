import { Button, Offcanvas, Stack } from "react-bootstrap";
import "../styles/Carrito.css";
import { useCarritoCompras } from "../context/carrito";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductoCarrito } from "../elements/ProductoCarrito";
import {mockProductos} from "../mocks/MockProductos"

type CarritoProps={
  abierto:boolean
}

export function Carrito ({abierto}:CarritoProps){
  const {cerrarCarrito,productosCarrito} = useCarritoCompras()
  const login = window.localStorage.getItem("isLogedIn");
  return <Offcanvas show={abierto} onHide={cerrarCarrito} placement="end">
    <Offcanvas.Header closeButton>
      <img src="./src/assets/WizzardWheezesLogo.jpg" alt="logo" style={{objectFit:"cover", maxHeight:"100px",marginRight:"15px"}}/>
      <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Stack gap={3}>
        {productosCarrito.map(producto =>(
          <ProductoCarrito key={producto.id} {...producto}/>
        ))}
      <div className="ms-auto fw-bold fs-5">
          
          Total {productosCarrito.reduce((total,itemCarrito)=>{
            const item =  mockProductos.find(i => i.id === itemCarrito.id)
            return total+ (item?.precio || 0) * itemCarrito.cantidad
            },0)
            } Galeones
      </div>
      <div>
        <Button className="w-100" style={{backgroundColor:"#0C2D4D"}} 
        onClick={() => {
          if (login !== null) {
              window.location.href = "/DetallePedido";
          } else {
              alert("Debe estar logueado para continuar.");
              window.location.href = "/Login";
          }
      }}>
          Pagar
        </Button>
      </div>
      </Stack>
    </Offcanvas.Body>
  </Offcanvas>
}
