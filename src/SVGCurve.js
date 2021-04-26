import React from "react";

export default function SVGCurve({
  curve: {
    width = 300,
    height = 300,
    startXY = [0, 0],
    endXY = [300, 300],
    centerXY = [150, 150],
    curveXY = [50, 0],
    strokeWidth = 4,
    strokeColor = "#000000",
  },
  curveStyles = {},
}) {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      style={curveStyles}
      strokeWidth={strokeWidth}
      className="svg-arrow-curve"
    >
      <path
        d={`M ${startXY[0]} ${startXY[1]} Q ${curveXY[0]} ${curveXY[1]}, ${centerXY[0]} ${centerXY[1]} T ${endXY[0]} ${endXY[1]}`}
        stroke={strokeColor}
        fill="transparent"
      />
    </svg>
  );
}
