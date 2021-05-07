import React from "react";

export default function PathCurve({
  startXY = [0, 0],
  endXY = [50, 50],
  centerXY = [25, 25],
  curveXY = [0, 15],
  strokeWidth = 3,
  strokeColor = "#000000",
  customStyles = {},
}) {
  return (
    <path
      style={customStyles}
      strokeWidth={strokeWidth}
      d={`M ${startXY[0]} ${startXY[1]} Q ${curveXY[0]} ${curveXY[1]}, ${centerXY[0]} ${centerXY[1]} T ${endXY[0]} ${endXY[1]}`}
      stroke={strokeColor}
      fill="none"
    />
  );
}
