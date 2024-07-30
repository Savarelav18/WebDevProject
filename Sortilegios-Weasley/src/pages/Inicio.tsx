import '../styles/Inicio.css'
import '../styles/Bienvenida.css'
import { NavBar } from '../components/navBar'
import { Bienvenida } from '../components/Bienvenida'

function Inicio() {
  return (
    <>
      <NavBar/>
      <Bienvenida/>
      <h1 style={{color:"white",margin:"1em 2.5em",fontSize:"42px"}}>Productos más vendidos</h1>
      <div className='Productos-mas-vendidos'>
      </div>
    </>
  )
}

export default Inicio


