import React from "react";
import contactData from "../data/contacts.json";
import ProductContainer from "./ProductContainer";

function ProductSwiper(){

  const items = contactData.items;
  const productList = items.map(
    ({id, name, price, discount, brand, limit, label}) => {
      return(
        <ProductContainer
          key={id} id={id} name={name} price={price}
          discount={discount} brand={brand}
          limit={limit} label={label} />
      );
  });
  return(
    <ul>
      {productList}
    </ul>
  )
}

export default ProductSwiper;