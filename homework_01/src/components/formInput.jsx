import React from "react";

export default function formInput(){

  const styles = {
    form: {
      "position": "relative",
    },
    input: {
      "border": "1px solid purple",
      "borderRadius": "4px",
      "width": "400px",
      "height": "60px",
      "padding": "20px",
      "fontSize": "22px",
    },
    button: {
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "border": "0px",
      "width": "36px",
      "height": "36px",
      "backgroundColor": "transparent",
      "position": "absolute",
      "top": "12px",
      "right": "20px",
    }
  }

  function handleSearch(e){
    e.preventDefault();
    console.log("click!")
  }

  return (
    <form action="/" style={styles.form}>
      <label htmlFor="searchProduct"></label>
      <input type="search" id="searchProduct" placeholder="검색어를 입력해주세요." style={styles.input} />
      <button type="submit" onClick={handleSearch} style={styles.button}>
        <img src="/assets/header/icon-search.svg" alt="검색" />
      </button>
    </form>
  );
}