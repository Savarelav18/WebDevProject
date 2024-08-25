import { useState } from "react";
interface ImagenesProps {
    imagenes: string[];
}
export function Imagenes({ imagenes }: ImagenesProps) {
    const [actualImg, setActualImg] = useState(0);
    const handleImgClick = (index: number) => {
        setActualImg(index);
    }
    return (
        <div className="container-big-img">
            <img src={imagenes[actualImg]} className="big-image" />
            <div className="mini-imgs-container">
                {imagenes.map((img, index) => (
                    <img key={index} src={img} alt="producto" className="mini-imgs" onClick={() => handleImgClick(index)} style={{cursor:"pointer"}} />
                ))}
            </div>
        </div>
    )
}