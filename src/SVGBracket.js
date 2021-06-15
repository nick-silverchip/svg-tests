import { useRef } from "react";
import SVG from "./SVG";
import PathCurve from "./PathCurve";

function SVGBracket({ flipHorizontal = false, cp }) {
  const containerRef = useRef({ current: { clientHeight: 0, clientWidth: 0 } });
  const {
    current: { clientHeight, clientWidth },
  } = containerRef;

  const svgProps = {
    width: clientWidth,
    height: clientHeight,
    customStyles: { flex: 1 },
  };

  const topCurveProps = {
    startXY: [flipHorizontal ? clientWidth : 0, 0],
    endXY: [flipHorizontal ? 0 : clientWidth, clientHeight / 2],
    centerXY: [
      clientWidth / 2 + (clientWidth / 2) * cp.centerXY[0],
      clientHeight * 0.25 + (clientHeight / 0.25) * cp.centerXY[1],
    ],
    curveXY: [
      flipHorizontal
        ? (clientWidth / 3) * 2 + (clientWidth / 3) * cp.curveXY[0]
        : clientWidth / 3 + (clientWidth / 3) * cp.curveXY[0],
      0 + (clientHeight / 2) * cp.curveXY[1],
    ],
    strokeWidth: 3,
    strokeColor: "#f7f7f7",
    customStyles: {},
  };

  const bottomCurveProps = {
    startXY: [flipHorizontal ? 0 : clientWidth, clientHeight / 2],
    endXY: [flipHorizontal ? clientWidth : 0, clientHeight],
    centerXY: [
      clientWidth / 2 + (clientWidth / 2) * cp.centerXY[0],
      clientHeight * 0.75 + (clientHeight / 0.75) * cp.centerXY[1],
    ],
    curveXY: [
      flipHorizontal
        ? clientWidth / 3 + (clientWidth / 3) * cp.curveXY[0] * -1
        : (clientWidth / 3) * 2 + (clientWidth / 3) * 2 * cp.curveXY[0] * -1,
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
    border: "1px solid red",
  };

  return (
    <div ref={containerRef} class="bracket-container" style={containerStyle}>
      <SVG {...svgProps}>
        <PathCurve {...topCurveProps} />
        <PathCurve {...bottomCurveProps} />
      </SVG>
    </div>
  );
}

export default SVGBracket;
