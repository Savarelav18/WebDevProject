import { magicDivisesToMuggle, COPFormmater } from "../../services/ConversorDivisas";

interface MiniDescProdProps {
    name: string;
    price: number;
    quantity: number;
    divise: string;
}
export function MiniDescProd({ name, price, quantity, divise }: MiniDescProdProps) {

    return (
        <div className="mini-desc-prod">
            <p className="name">{name} ({quantity})</p>
            <p className="COP">$ {COPFormmater(magicDivisesToMuggle(divise, price)! * quantity)}</p>
        </div>
    )
}