import React from "react";
import { rotate } from "./utils";

export default function SVGTriangle({
  startXY = [50, 50],
  width = 30,
  height = 15,
  angle = 0,
}) {
  const startCoords = {
    cxcy: [startXY[0], startXY[1]],
    aXY: [startXY[0], startXY[1] - height / 2],
    bXY: [startXY[0], startXY[1] + height / 2],
    cXY: [startXY[0] + width, startXY[1]],
  };

  const newCoords = {
    aXY: rotate(
      startXY[0],
      startXY[1],
      startCoords.aXY[0],
      startCoords.aXY[1],
      angle
    ),
    bXY: rotate(
      startXY[0],
      startXY[1],
      startCoords.bXY[0],
      startCoords.bXY[1],
      angle
    ),
    cXY: rotate(
      startXY[0],
      startXY[1],
      startCoords.cXY[0],
      startCoords.cXY[1],
      angle
    ),
  };

  return (
    <polygon
      fill="#f7f7f7"
      stroke="#f7f7f7"
      strokeWidth="0"
      points={`${newCoords.aXY[0]}, ${newCoords.aXY[1]}  ${newCoords.bXY[0]}, ${newCoords.bXY[1]} ${newCoords.cXY[0]}, ${newCoords.cXY[1]} `}
    />
  );
}
