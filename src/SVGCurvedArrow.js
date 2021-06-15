import { useRef } from "react";
import SVG from "./SVG";
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
}) {
  const containerRef = useRef({ current: { clientHeight: 0, clientWidth: 0 } });
  const {
    current: { clientHeight, clientWidth },
  } = containerRef;

  const svgProps = {
    width: clientWidth,
    height: clientHeight,
    customStyles: { flex: 1 },
  };

  const curveProps = {
    startXY: [flipHorizontal ? clientWidth : 0, 0],
    endXY: [
      left ? pointerLength : clientWidth - pointerLength,
      up ? pointerLength : clientHeight - pointerLength,
    ],
    centerXY: [
      (clientWidth - pointerLength) / 2,
      (clientHeight - pointerLength) / 2,
    ],
    curveXY: [clientWidth / 3, 0],
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
    border: "1px solid red",
  };

  return (
    <div ref={containerRef} class="bracket-container" style={containerStyle}>
      <SVG {...svgProps}>
        <PathCurve {...curveProps} />
        <PolygonTriangle {...triangleProps} />
      </SVG>
    </div>
  );
}

export default SVGBracket;
