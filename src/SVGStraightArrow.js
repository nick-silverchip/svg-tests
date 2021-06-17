import { useState, useLayoutEffect, useRef } from "react";
import SVG from "./SVG";
import Nodes from "./Nodes";
import PathLine from "./PathLine";
import PolygonTriangle from "./PolygonTriangle";
import { calcAngle } from "./utils";

function SVGStraightArrow({
  pointerLength = 30,
  pointerWidth = 15,
  horizontalOnly = true,
  verticalOnly = false,
  up = false,
  left = false,
  cp,
}) {
  const containerRef = useRef(document.createElement("div"));

  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useLayoutEffect(() => {
    if (containerRef.current) {
      setClientWidth(containerRef.current.clientWidth);
      setClientHeight(containerRef.current.clientHeight);
    }
  }, [containerRef.current.clientHeight, containerRef.current.clientWidth]);

  const svgProps = {
    width: clientWidth,
    height: clientHeight,
    customStyles: { flex: 1 },
  };

  const lineProps = {
    startXY: [left ? clientWidth - 10 : 10, up ? clientHeight - 10 : 10],
    endXY: [
      left ? pointerLength : clientWidth - pointerLength,
      up ? pointerLength : clientHeight - pointerLength,
    ],
    strokeWidth: 3,
    strokeColor: "#f7f7f7",
    fill: "transparent",
    customStyles: {},
  };

  if (horizontalOnly) {
    lineProps.startXY[1] = clientHeight / 2;
    lineProps.endXY[1] = clientHeight / 2;
  }
  if (verticalOnly) {
    lineProps.startXY[0] = clientWidth / 2;
    lineProps.endXY[0] = clientWidth / 2;
  }

  const triangleProps = {
    startXY: [lineProps.endXY[0], lineProps.endXY[1]],
    width: pointerLength,
    height: pointerWidth,
    angle: calcAngle(
      lineProps.startXY[0],
      lineProps.startXY[1],
      lineProps.endXY[0],
      lineProps.endXY[1]
    ),
  };

  const containerStyle = {
    width: "100%",
    height: "100%",
    border: cp.showBorder ? "1px solid red" : "unset",
  };

  return (
    <div ref={containerRef} className="arrow-container" style={containerStyle}>
      <SVG {...svgProps}>
        <PathLine {...lineProps} />
        <PolygonTriangle {...triangleProps} />
        {cp.showNodes && <Nodes {...lineProps} />}
      </SVG>
    </div>
  );
}

export default SVGStraightArrow;
