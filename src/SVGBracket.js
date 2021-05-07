import { useRef } from "react";
import SVG from "./SVG";
import PathCurve from "./PathCurve";

function SVGBracket({ flipHorizontal = false }) {
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
    centerXY: [clientWidth / 2, clientHeight * 0.25],
    curveXY: [flipHorizontal ? (clientWidth / 3) * 2 : clientWidth / 3, 0],
    strokeWidth: 3,
    strokeColor: "#000000",
    customStyles: {},
  };

  const bottomCurveProps = {
    startXY: [flipHorizontal ? 0 : clientWidth, clientHeight / 2],
    endXY: [flipHorizontal ? clientWidth : 0, clientHeight],
    centerXY: [clientWidth / 2, clientHeight * 0.75],
    curveXY: [
      flipHorizontal ? clientWidth / 3 : (clientWidth / 3) * 2,
      clientHeight / 2,
    ],
    strokeWidth: 3,
    strokeColor: "#000000",
    customStyles: {},
  };

  const containerStyle = {
    width: "100%",
    height: "100%",
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
