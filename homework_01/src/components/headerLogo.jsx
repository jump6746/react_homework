import React from "react";
import {slashBar} from "/src/components/index.js";

export default function headerLogo(){

  const logoData = {
    logoImageSrc: "/karly_logo.svg",
    logoImageAlt: "마켓칼리 로고",
    logoName_1: "마켓칼리",
    logoName_2: "뷰티칼리",
  }

  const styles = {
    heading_1: {
      display: "flex",
      alignItems: "center",
    },
    logoName:{
      fontSize: "22px",
    }
  }

  return (
    <h1 style={styles.heading_1}>
      <img src={logoData.logoImageSrc} alt={logoData.logoImageAlt}/>
      {slashBar(14, "gray")}
      <a href="/" style={styles.logoName}>{logoData.logoName_1}</a>
      {slashBar(14, "gray")}
      <a href="/" style={styles.logoName}>{logoData.logoName_2}</a>
    </h1>
  );
}