import React from "react";

const bannerMessage = {
  span_1: "지금 가입하고 인기상품 ",
  strong: "100원",
  span_2: "에 받아가세요!",
};

export default function topBanner(textData = bannerMessage){

  const styles = {
    bannerWrapper: {
      width: "100%",
      backgroundColor: "#5F0080",
    },
    bannerContainer: {
      width: "1050px",
      height: "50px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "right",
      alignItems: "center",
    },
    bannerText: {
      margin: "0 auto",
      fontSize: "16px",
      color: "white",
      display: "inline-block",
    },
    strongText:{
      fontWeight: 600,
    },
    closeButton:{
      width: "42px",
      height: "42px",
      border: "0",
      background: "url(/assets/header/close-button.svg) 50% 50% no-repeat"
    }
  }

  function closeBanner(e){
    e.preventDefault();
  }

  return (

    <div style={styles.bannerWrapper}>
      <div style={styles.bannerContainer}>
        <span style={styles.bannerText}>
          {textData.span_1}
          <strong style={styles.strongText}>{textData.strong}</strong>
          {textData.span_2}
        </span>
        <button type="submit" onClick={closeBanner} style={styles.closeButton}>
        </button>
      </div>
    </div>

  );
}