import calcDiscountPrice from '../utils/lib/calcDiscountPrice';
import comma from '../utils/lib/comma';

function ProductInfo({ name, price, discount, brand, label }) {
  const productTitle = `[${brand}] ${name}`;
  const discountPrice = calcDiscountPrice(discount, price);

  return (
    <>
      <span className="product-title">{productTitle}</span>
      <span className="product-discount-price">
        {Number(discount) === 0 ? null : <b>{discount}%</b>}
        {comma(discountPrice)}원
      </span>
      {Number(discount) === 0 ? null : (
        <span className="product-line-price">{comma(price)}원</span>
      )}
      <span className="product-label">{label}</span>
    </>
  );
}

export default ProductInfo;
