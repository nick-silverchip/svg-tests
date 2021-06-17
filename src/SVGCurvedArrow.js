import { useState, useRef, useLayoutEffect } from "react";
import SVG from "./SVG";
import Nodes from "./Nodes";
import PathCurve from "./PathCurve";
import { calcAngle } from "./utils";
import PolygonTriangle from "./PolygonTriangle";

function SVGBracket({
  flipHorizontal = false,
  pointerLength = 30,
  pointerWidth = 15,
  up = false,
  left = false,
  horizontalOnly = true,
  verticalOnly = false,
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

  const curveProps = {
    startXY: [flipHorizontal ? clientWidth - 10 : 10, 10],
    endXY: [
      left ? pointerLength + 10 : clientWidth - pointerLength - 10,
      up ? pointerLength + 10 : clientHeight - pointerLength - 10,
    ],
    centerXY: [
      (clientWidth - pointerLength) / 2 +
        (clientWidth - pointerLength) * cp.centerXY[0],
      (clientHeight - pointerLength) / 2 +
        (clientHeight - pointerLength) * cp.centerXY[1],
    ],
    curveXY: [
      clientWidth / 3 + (clientWidth / 3) * cp.curveXY[0],
      10 + (clientHeight / 3) * cp.curveXY[1],
    ],
    strokeWidth: 3,
    strokeColor: "#f7f7f7",
    customStyles: {},
  };

  const triangleProps = {
    startXY: [curveProps.endXY[0], curveProps.endXY[1]],
    width: pointerLength,
    height: pointerWidth,
    angle: 0,
  };

  const containerStyle = {
    width: "100%",
    height: "100%",
    border: cp.showBorder ? "1px solid red" : "unset",
  };

  return (
    <div
      ref={containerRef}
      className="bracket-container"
      style={containerStyle}
    >
      <SVG {...svgProps}>
        <PathCurve {...curveProps} />
        <PolygonTriangle {...triangleProps} />
        {cp.showNodes && <Nodes {...curveProps} />}
      </SVG>
    </div>
  );
}

export default SVGBracket;
