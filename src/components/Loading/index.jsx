import React from "react";
import ReactLoading from "react-loading";
import "./styles.css";
const Loading = () => {
  return (
    <div className="loading">
      <ReactLoading type={"spin"} color={"black"} height={"5%"} width={"5%"} />;
    </div>
  );
};

export default Loading;
