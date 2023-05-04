import React from "react";
import "./styles.css";

const Container = (props) => {
  return(
    <div className="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
        {props.children}
      </div>
    </div>
  );
};

export default Container;
