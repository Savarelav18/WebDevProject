interface CampotextoProps{
    nombre:string;
    tipo: 'text' | 'email' | 'password'; 
}

export const Campotexto:React.FC<CampotextoProps>=({nombre, tipo}) => {
    return (<>
        <div className="campotexto" style={{position: "relative", margin: "30px 0 0 0"}}>
            <label htmlFor={nombre}>{nombre}</label>
            <input 
            id={nombre} 
            name={nombre} 
            required
            type={tipo} //
            />
        </div>
    </>)
}
