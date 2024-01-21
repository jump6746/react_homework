import React from "react";

export default function slashBar(height = 12, color = "gray"){

  const styles = {
    span:{
      display: "inline-block",
      width: "0px",
      height: `${height}px`,
      borderLeft: `1px solid ${color}`,
      marginLeft: "12px",
      marginRight: "12px",
    }
  }

  return (<span style={styles.span}></span>);
}