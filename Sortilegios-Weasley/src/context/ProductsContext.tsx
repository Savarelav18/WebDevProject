import { mockProductos } from "../mocks/MockProductos.ts";
import { Producto } from "../types.ts";
import { createContext, FC, ReactNode, useState } from "react";
interface ProductsContextProps {
    products : Producto[];
    addProducts : (product: Producto) => void;
}
export const  ProductsContext = createContext<ProductsContextProps | null>(null);

export const ProductsProvider: FC<{children: ReactNode}> = ({ children }) => {

    const [products, setProducts] = useState<Producto[]>(mockProductos);
    const addProducts = (product: Producto) => {
        setProducts([...products, product]);
    }
    return (
        <ProductsContext.Provider value={{ products, addProducts }}>
            {children}
        </ProductsContext.Provider>
    );
};

