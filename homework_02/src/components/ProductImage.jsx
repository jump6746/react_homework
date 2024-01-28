import { getImageUrl } from "../utils";

function ProductImage({id, name}){

  const source = getImageUrl(id);
  const alt = name;

  return(
    <div className="image-container">
      <img src={source} alt={alt} />
    </div>
  )
}

export default ProductImage;