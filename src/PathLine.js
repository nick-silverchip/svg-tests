import React from "react";

export default function PathLine({
  startXY = [0, 0],
  endXY = [50, 50],
  strokeWidth = 3,
  strokeColor = "#f7f7f7",
  fill = "transparent",
  customStyles = {},
}) {
  return (
    <path
      d={`M ${startXY[0]} ${startXY[1]} T ${endXY[0]} ${endXY[1]}`}
      stroke={strokeColor}
      fill={fill}
      style={customStyles}
      strokeWidth={strokeWidth}
    />
  );
}
