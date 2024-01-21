import React from "react";
import {slashBar} from "/src/components/header/index.js";

export default function headerSign(){

  const signData = {
    signUp: "회원가입",
    login: "로그인",
    cs: "고객센터",
  }

  const styles = {
    headerTopContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    topLink: {
      fontSize: "12px",
    },
  }

  return (
    <div style={styles.headerTopContainer}>
      <a href="" style={styles.topLink}>{signData.signUp}</a>
      {slashBar(13)}
      <a href="" style={styles.topLink}>{signData.login}</a>
      {slashBar(13)}
      <a href="" style={styles.topLink}>{signData.cs}</a>
    </div>  
  );
}