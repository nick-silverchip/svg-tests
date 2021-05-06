import { useRef } from "react";
import SVG from "./SVG";
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

  const lineProps = {
    startXY: [left ? clientWidth : 0, up ? clientHeight : 0],
    endXY: [
      left ? pointerLength : clientWidth - pointerLength,
      up ? pointerLength : clientHeight - pointerLength,
    ],
    strokeWidth: 3,
    strokeColor: "#000000",
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
  };

  return (
    <div ref={containerRef} class="arrow-container" style={containerStyle}>
      <SVG {...svgProps}>
        <PathLine {...lineProps} />
        <PolygonTriangle {...triangleProps} />
      </SVG>
    </div>
  );
}

export default SVGStraightArrow;
