import contactData from '../data/contacts.json';
import ProductContainer from './ProductContainer';
import './ProductSwiper.css';

function ProductSwiper() {
  const items = contactData.items;
  const productList = items.map(
    ({ id, name, price, discount, brand, limit, label }) => {
      return (
        <ProductContainer
          key={id}
          id={id}
          name={name}
          price={price}
          discount={discount}
          brand={brand}
          limit={limit}
          label={label}
        />
      );
    }
  );
  return <ul className="product-swiper">{productList}</ul>;
}

export default ProductSwiper;
