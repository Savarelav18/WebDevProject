import React from "react";
import "../styles/ProductoCarrito.css";
import { Cantidad } from "../elements/cantidadProducto";
import { useCarritoCompras } from "../context/carrito";
import {productos} from "../mocks/productos.json"
import { Stack } from "react-bootstrap";
import { Button} from "react-bootstrap"
import { IconoMas, IconoMenos } from "../components/icons";

interface ProductoCarritoProps {
  id:number
  cantidad:number
}

export const ProductoCarrito: React.FC<ProductoCarritoProps> = ({ id,cantidad }) => {
  const {removerProducto,aumentarCantidadProducto,disminuirCantidadProducto} = useCarritoCompras()
  const item =  productos.find(i => i.id === id)
  if (item == null) return null
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img src={item.imagen} style={{width:"125px", height:"75px", objectFit:"cover"}} alt="" />
      <div className="me-auto">
        <div>
          {item.nombre}{" "}
          {cantidad>1 && (
            <span className="text-muted" 
            style={{fontSize:".65rem"}}>
            </span>)}
        </div>
        <div className="text-muted" style={{fontSize:".75rem"}}>{item.precio * cantidad} Galeones</div>
      </div>
        <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
          <Button className="d-flex align-items-center justify-content-center" size="sm" style={{backgroundColor:"#0C2D4D"}} onClick={() => disminuirCantidadProducto(id)}><IconoMenos/></Button>
        </div>
          <span className="fs-3">{cantidad}</span>
        <div>
          <Button className="d-flex align-items-center justify-content-center" size="sm" style={{backgroundColor:"#0C2D4D"}} onClick={() => aumentarCantidadProducto(id)}><IconoMas/></Button>
          </div>
      <div>
        <Button variant="outline-danger" size="sm" onClick={() => removerProducto(id)}>&times;</Button>
      </div>
     
    </Stack>
  );
};
