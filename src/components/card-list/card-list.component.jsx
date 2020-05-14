import React from "react";
import "./card-list.styles.css";

function CardList(props) {
  return <div className="card-list">{props.children}</div>;
}

export default CardList;
