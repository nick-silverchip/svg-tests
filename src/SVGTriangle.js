import React from "react";

export default function SVGTriangle({
  data: { width = 30, height = 15, orientation = "right" },
}) {
  const coords = {
    right: [
      [0, 0],
      [0, height],
      [width, height / 2],
    ],
    left: [
      [width, 0],
      [width, height],
      [0, height / 2],
    ],
    up: [
      [0, height],
      [width, height],
      [width / 2, 0],
    ],
    down: [
      [0, 0],
      [width, 0],
      [width / 2, height],
    ],
  };

  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      // style={{ border: "1px solid" }}
      // strokeWidth={strokeWidth}
    >
      <polygon
        fill="black"
        points={`${coords[orientation][0][0]}, ${coords[orientation][0][1]}  ${coords[orientation][1][0]}, ${coords[orientation][1][1]} ${coords[orientation][2][0]}, ${coords[orientation][2][1]} `}
      />
    </svg>
  );
}
