import React from "react";
import "./styles.css";

const CardsLayout = (props) => {
  return <div className={`cards_layout_${props.direction}`}>{props.children}</div>;
};

export default CardsLayout;
