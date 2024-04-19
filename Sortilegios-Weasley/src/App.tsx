import './App.css'
import './styles/Bienvenida.css'
import './styles/Producto.css'

import { NavBar } from './components/navBar'
import { Bienvenida } from './components/Bienvenida'
import { Producto } from './components/Producto'

function App() {
  return (
    <>
      <NavBar/>
      <Bienvenida/>
      <h1 style={{color:"white",margin:"1em 2.5em",fontSize:"42px"}}>Productos más vendidos</h1>
      <div className='Productos-mas-vendidos'>
      <Producto nombre='adas' precio='2' imagen='Producto2' calificacion={5}/>
      <Producto nombre='123' precio='5' imagen='Producto2' calificacion={2}/>
      <Producto nombre='312' precio='10' imagen='Producto2' calificacion={1}/>
      <Producto nombre='312' precio='8' imagen='Producto2' calificacion={4}/>
      </div>
    </>
  )
}

export default App
