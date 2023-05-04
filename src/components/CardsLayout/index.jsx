import React from "react";
import "./styles.css";

const CardsLayout = (props) => {
  return <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">{props.children}</ul>;
};

export default CardsLayout;
