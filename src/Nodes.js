import React from "react";
import Node from "./Node";

export default function Nodes({ startXY, endXY, centerXY, curveXY }) {
  return (
    <>
      {!!startXY && <Node cxcy={startXY} fill="yellow" />}
      {!!endXY && <Node cxcy={endXY} fill="yellow" />}
      {!!centerXY && <Node cxcy={centerXY} fill="lightblue" />}
      {!!curveXY && <Node cxcy={curveXY} fill="red" />}
    </>
  );
}
