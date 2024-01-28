function calcDiscountPrice(discount, price){

    const result = (price - (price * discount / 100));

    return result;

}

export default calcDiscountPrice;