import React from "react";

const SVG = ({
  width = 100,
  height = 100,
  viewBox = `0 0 ${width} ${height}`,
  customStyles = {},
  strokeWidth = 3,
  customClass = "",
  children,
}) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    style={customStyles}
    strokeWidth={strokeWidth}
    className={customClass}
  >
    {children}
  </svg>
);

export default SVG;
