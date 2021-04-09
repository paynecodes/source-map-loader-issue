import React from "react";

export const Box: React.FC = (props) => {
  return (<div className="box">{props.children}</div>);
}