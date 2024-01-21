import React from "react";
import "/src/styles/header.css";
import {formInput, headerSign, headerIcon, headerLogo, topBanner} from "/src/components/header/index.js";


export default function header(){

  const styles = {
    headerWrapper:{
      marginBottom: "20px",
    },
    headerContainer: {
      margin: "0 auto",
      paddingTop: "12px",
      width: "1050px",
      display: "flex",
      flexFlow: "column nowrap", 
    },
    headerBottomContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "22px",
      fontWeight: 600
    },
  }

  return (
    <div style={styles.headerWrapper}>
      {topBanner()}
      <div style={styles.headerContainer}>
        {headerSign()}
        <div style={styles.headerBottomContainer}>
          {headerLogo()}
          {formInput()}
          {headerIcon()}
        </div>
      </div>
    </div>
  );
};
