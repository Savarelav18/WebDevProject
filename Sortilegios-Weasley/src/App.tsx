import './App.css'
import './Bienvenida.css'
import { NavBar } from './components/navBar'
import { Bienvenida } from './components/Bienvenida'
import { Producto } from './components/Producto'

function App() {
  return (
    <>
      <NavBar/>
      <Bienvenida/>
      <Producto/>
    </>
  )
}

export default App
