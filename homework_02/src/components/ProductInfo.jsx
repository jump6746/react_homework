import calcDiscountPrice from "../utils/lib/calcDiscountPrice";

function ProductInfo({name, price, discount, brand, limit, label}){

  const productTitle = `[${brand}]${name}`;
  const discountPrice = calcDiscountPrice(discount, price);


  return (
   <>
    <span>{productTitle}</span>
    <span><b>{discount}</b>{discountPrice}</span>
    <span>{price}</span>
    <span>{label}</span>
    <span>{limit}</span>
   </>
  )
}

export default ProductInfo;