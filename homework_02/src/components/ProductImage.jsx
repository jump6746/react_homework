import { getImageUrl } from "../utils";

function ProductImage({id, name}){

  const source = getImageUrl(id);
  const alt = name;

  return(
    <img src={source} alt={alt} />
  )
}

export default ProductImage;