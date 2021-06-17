import React from "react";

export default function Node({
  cxcy = [0, 0],
  r = 8,
  strokeWidth = 2,
  strokeColor = "#111111",
  fill = "#f7f7f7",
  customStyles = {},
}) {
  return (
    <circle
      cx={cxcy[0]}
      cy={cxcy[1]}
      r={r}
      stroke={strokeColor}
      fill={fill}
      style={customStyles}
      strokeWidth={strokeWidth}
    />
  );
}
