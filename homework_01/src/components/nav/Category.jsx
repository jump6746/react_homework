import React from "react";

function CategoryBar(props){

    const styles = {
        categoryImage: {
            width: "16px",
            height: "16px",
        },
        categoryText: {
            fontSize: "16px",
        }
    }
    
    return (
        <li>
            <div style={styles.categoryImage}></div>
            <span style={styles.categoryText}>{props.text}</span>
        </li>
    )
}

export default function Category(){

    const styles = {
        hamburgerContainer: {
            display: "inline-flex",
            gap: "12px",
            justifiyContent: "center",
            alignItems: "center",
        },
        hamburger: {
            width: "16px",
            height: "14px",
            background: "url(/assets/nav/hamburger.svg) 50% 50% no-repeat",
        },
        hamburgerText: {
            color: "5F0080",
            fontSize: "16px",
        },
        categoryContainer: {
            display: "flex",
            flexFlow: "column",
            width: "200px",
            height: "400px",
            overflow: "auto",
        },
    }

    return (
        <>
            <div style={styles.hamburgerContainer}>
                <div style={styles.hamburger}></div>
                <span style={styles.hamburgerText}>카테고리</span>
            </div>
            <ul style={styles.categoryContainer}>
                <CategoryBar text="열매 농수산물"/>
                <CategoryBar text="열매 농수산물"/>
                <CategoryBar text="열매 농수산물"/>
                <CategoryBar text="열매 농수산물"/>
                <CategoryBar text="열매 농수산물"/>
                <CategoryBar text="열매 농수산물"/>
                <CategoryBar text="열매 농수산물"/>
                <CategoryBar text="열매 농수산물"/>
                <CategoryBar text="열매 농수산물"/>
                <CategoryBar text="열매 농수산물"/>
                <CategoryBar text="열매 농수산물"/>
                <CategoryBar text="열매 농수산물"/>
                <CategoryBar text="열매 농수산물"/>
            </ul>
        </>
    );
}