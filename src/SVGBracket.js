import { useState, useLayoutEffect, useRef } from "react";
import SVG from "./SVG";
import PathCurve from "./PathCurve";
import Nodes from "./Nodes";

function SVGBracket({ flipHorizontal = false, cp }) {
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

  const topCurveProps = {
    startXY: [flipHorizontal ? clientWidth - 10 : 10, 10],
    endXY: [flipHorizontal ? 10 : clientWidth - 10, clientHeight / 2],
    centerXY: [
      clientWidth / 2 + clientWidth * cp.centerXY[0],
      clientHeight * 0.25 + clientHeight * cp.centerXY[1],
    ],
    curveXY: [
      flipHorizontal
        ? (clientWidth / 3) * 2 + (clientWidth / 3) * cp.curveXY[0]
        : clientWidth / 3 + (clientWidth / 3) * cp.curveXY[0],
      10 + (clientHeight / 2) * cp.curveXY[1],
    ],
    strokeWidth: 3,
    strokeColor: "#f7f7f7",
    customStyles: {},
  };

  const bottomCurveProps = {
    startXY: [flipHorizontal ? 10 : clientWidth - 10, clientHeight / 2],
    endXY: [flipHorizontal ? clientWidth - 10 : 10, clientHeight - 10],
    centerXY: [
      clientWidth / 2 + clientWidth * cp.centerXY[0],
      clientHeight * 0.75 + (clientHeight / 0.75) * cp.centerXY[1],
    ],
    curveXY: [
      flipHorizontal
        ? clientWidth / 3 + (clientWidth / 3) * cp.curveXY[0] * -1
        : (clientWidth / 3) * 2 + (clientWidth / 3) * 2 * cp.curveXY[0],
      clientHeight / 2 + (clientHeight / 2) * cp.curveXY[1],
    ],
    strokeWidth: 3,
    strokeColor: "#f7f7f7",
    customStyles: {},
  };

  const containerStyle = {
    width: "100%",
    height: "100%",
    maxWidth: "25vw",
    border: cp.showBorder ? "1px solid red" : "unset",
  };

  return (
    <div
      ref={containerRef}
      className="bracket-container"
      style={containerStyle}
    >
      <SVG {...svgProps}>
        <PathCurve {...topCurveProps} />
        <PathCurve {...bottomCurveProps} />
        {cp.showNodes && (
          <>
            <Nodes {...topCurveProps} />
            <Nodes {...bottomCurveProps} />
          </>
        )}
      </SVG>
    </div>
  );
}

export default SVGBracket;
