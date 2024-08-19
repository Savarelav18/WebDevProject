import '../styles/Inicio.css'
import '../styles/Bienvenida.css'
import '../styles/Producto.css'

import { NavBar } from '../components/navBar'
import { Bienvenida } from '../components/Bienvenida'
import { Producto } from '../components/Producto'
import { Carrito } from '../components/Carrito'
import { mockProductos } from '../mocks/MockProductos'

function Inicio() {
  return (
    <>
      <NavBar />
      <Carrito />
      <Bienvenida />
      <h1 style={{ color: "white", margin: "1em 2.5em", fontSize: "42px" }}>Productos más vendidos</h1>
      <div className='Productos-mas-vendidos'>
        <Producto id={0} nombre='adas' precio='2' imagen='Producto2' calificacion={5} />
        <Producto id={1} nombre='amortentia' precio='2' imagen={mockProductos[0].imagenes[0]} calificacion={4} />
      </div>
    </>
  )
}

export default Inicio
