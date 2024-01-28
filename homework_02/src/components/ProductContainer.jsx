import ProductButton from './ProductButton';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import ProductTag from './ProductTag';

function ProductContainer({ id, name, price, discount, brand, limit, label }) {
  return (
    <li key={id} className="product-info">
      <a href="/">
        <ProductImage id={id} name={name} />
        <ProductInfo
          name={name}
          price={price}
          discount={discount}
          brand={brand}
          label={label}
        />
        <ProductButton />
      </a>
      <ProductTag limit={limit} />
    </li>
  );
}

export default ProductContainer;
