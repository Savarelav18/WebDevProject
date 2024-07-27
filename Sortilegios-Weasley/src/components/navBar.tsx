import { NavLink, useNavigate} from "react-router-dom"
import { usuario } from "../elements/variablesGlobales";

export const NavBar= ()=>{
    const Navigate = useNavigate();
    const login = window.localStorage.getItem("isLogedIn");

    const logOut = () => {
        window.localStorage.removeItem("isLogedIn")
        Navigate('/Login');
    }

    return <nav className="Navegacion">
            <ul>
                <li><label>Buscar</label><input type="text" placeholder="ingresa el producto que deseas buscar"/></li>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><a href="">Tienda</a></li>
                <li><NavLink to="/home">Sobre nosotros</NavLink></li>
                {/* <li><NavLink to="/Login">Iniciar sesión</NavLink></li> */}
                {login ? (
                    <li>
                        ¡HOLA! {usuario.nombre}   
                        <abbr title="Cerrar sesión">
                        <img
                                src="https://img.icons8.com/?size=100&id=X1FIMcbT5Jed&format=png&color=000000"
                                alt="Cerrar sesión"
                                onClick={logOut}
                                style={{ cursor: 'pointer', width: '35px', height: '35px', verticalAlign: 'middle', marginLeft: '10px' }}
                            />
                        </abbr>                       
                    </li>
                ) : (
                    <li><NavLink to="/Login">Iniciar sesión</NavLink></li>
                )}

                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </li>
            </ul>
        </nav>
}