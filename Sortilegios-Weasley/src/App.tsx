import './App.css'
import './Bienvenida.css'
import { NavBar } from './components/navBar'
import { Bienvenida } from './components/Bienvenida'
import { Producto } from './components/Producto'
import { Sobre_Nosotros } from './components/Sobre_Nosotros'
function App() {
  return (
    <>
      <NavBar/>
      <Bienvenida/>
      <Producto/>
      <Sobre_Nosotros/>
    </>
  )
}

export default App
