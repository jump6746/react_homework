import React from "react";

export default function headerIcon(){

  const styles = {
    iconContainer:{
      display: "flex",
      gap: "20px",
    },
    location: {
      width: "36px",
      height: "36px",
      background: "url(/assets/header/icon-location.svg) 50% 50% no-repeat",
      cursor: "pointer"
    },
    heart: {
      width: "36px",
      height: "36px",
      background: "url(/assets/header/icon-heart.svg) 50% 50% no-repeat",
    },
    cart: {
      width: "36px",
      height: "36px",
      background: "url(/assets/header/icon-cart.svg) 50% 50% no-repeat",
    }
  }

  return (
    <div style={styles.iconContainer}>
      <div style={styles.location}>
      </div>
      <a href="/" aria-label="찜하기" style={styles.heart}>
      </a>
      <a href="/" aria-label="장바구니 보기" style={styles.cart}>
      </a>
    </div>
  );
}