import { DetailedHTMLProps, HTMLAttributes } from "react";
import "./style.css";
import React from 'react';


const buttonHover = {
    backgroundColor: '#d9d9d9',
    height: 62,
    width: 300,
 };

const buttonHoverTitle = {
  color: "#bb3939",
  fontFamily: "Inika",
  fontSize: "24px",
  fontWeight: 700,
  textAlign: "Center",
};

const buttonHoverSubtitle = {
    color: "#bb3939",
    fontFamily: "Indie Flower-Regular",
    fontSize: "15px",
    lineHeight: "normal",
    position: "relative",
    width: 300,
  };
  


export interface AnimaButtonProps {
    Title?: string;
    Subtitle?: string;
}

export const initialProps: AnimaButtonProps = {
    Title: "Title",
    Subtitle: "Subtitle",
};

const AnimaButton = ({ Title, Subtitle}: AnimaButtonProps ) => {
    return (
        <div style = {buttonHover}>
            <div style = {buttonHoverTitle}>{Title}</div>
            <div style = {buttonHoverSubtitle}>{Subtitle}</div>
        </div>
    );
};

export default AnimaButton;