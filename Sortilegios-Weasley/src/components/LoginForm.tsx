import "../styles/Login.css"
import {Campotexto} from "../elements/Campotexto"
import { NavBar } from "./navBar"

export const LoginForm = () =>{
    return (<>
    <NavBar/>
    <link rel="stylesheet" href="../styles/Login.css"></link>
    <div className="cont">
        <div className="formulario">
            <h1>INICIA SESIÓN</h1>
            <p>¿Aún no tienes cuenta?</p> 
            
            <span> <a href="/Register"> REGISTRATE </a> </span> 
            <form method="post">
                <Campotexto nombre="USUARIO*" tipo='text'/> 
                <Campotexto nombre="CONTRASEÑA*" tipo='password'/> 
            
            <div className="enviar" >
                <input type="submit" value="INICIAR SESIÓN"/>
            </div>

            </form>
        </div>
        <div className="imagen"> 
            <img src="src/assets/logo.png" />
        </div> 
    </div>   
    </>
    )
}