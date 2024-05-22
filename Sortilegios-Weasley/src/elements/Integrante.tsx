interface IntegranteProps{
    nombre : string;
}

export const Integrante:React.FC<IntegranteProps> = ({nombre}) => {
    return(
        <>
            <div className="integrante" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <img src={`src/assets/${nombre}.jpg`} alt={nombre} />
                <h5>{nombre}</h5>
            </div>
        </>
    )
}