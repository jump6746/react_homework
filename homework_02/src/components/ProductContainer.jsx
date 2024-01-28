import ProductButton from "./ProductButton";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

function ProductContainer({id, name, price, discount, brand, limit, label}){

    return(
        <li key={id}>
            <a href="/">
                <ProductImage id={id} name={name}/>
                <ProductInfo 
                    name={name} price={price} 
                    discount={discount} brand={brand} 
                    label={label} limit={limit}/>
                <ProductButton />
            </a>
        </li>
    )
}

export default ProductContainer;