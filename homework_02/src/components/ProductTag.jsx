function ProductTag({ limit }) {
  return limit === '' ? null : <span className="product-limit">{limit}</span>;
}

export default ProductTag;
