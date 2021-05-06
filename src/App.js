import "./App.css";
import SVGCurve from "./SVGCurve";
import SVGTriangle from "./SVGTriangle";
import SVGCurvedArrow from "./SVGCurvedArrow";
import SVGStraightArrow from "./SVGStraightArrow";
import SVG from "./SVG";
import { useWindowDimensions } from "./useWindowDimensions";
import PathLine from "./PathLine";
import PathCurve from "./PathCurve";
import PolygonTriangle from "./PolygonTriangle";

function App() {
  const { width, height } = useWindowDimensions();

  const svgWidth = width / 2;
  const svgHeight = height / 2;
  const triWidth = 30;
  const triHeight = 15;

  const calcAngle = (startX, startY, endX, endY) => {
    var dx = endX - startX;
    var dy = endY - startY;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
  };

  const svgProps = {
    width: svgWidth,
    height: svgHeight,
    customStyles: { flex: 1 },
  };

  const lineProps = {
    startXY: [0, 0],
    endXY: [svgWidth - triWidth, svgHeight - triWidth],
    strokeWidth: 3,
    strokeColor: "#000000",
    fill: "transparent",
    customStyles: {},
  };

  const curveProps = {
    startXY: [0, 0],
    endXY: [svgWidth, svgHeight],
    centerXY: [svgWidth / 2, svgHeight / 2],
    curveXY: [0, svgHeight / 4],
    strokeWidth: 3,
    strokeColor: "#000000",
    customStyles: {},
    fill: "transparent",
  };

  const triangleProps = {
    startXY: [lineProps.endXY[0], lineProps.endXY[1]],
    width: triWidth,
    height: triHeight,
    angle: calcAngle(
      lineProps.startXY[0],
      lineProps.startXY[1],
      lineProps.endXY[0],
      lineProps.endXY[1]
    ),
  };

  const straightArrowProps = {
    width: svgWidth,
    height: svgHeight,
    up: false,
    left: false,
    horizontalOnly: false,
    verticalOnly: false,
    pointerlength: 30,
    pointerWidth: 15,
  };

  return (
    <div className="App">
      <h1>SVG Tests</h1>
      <p>
        Dynamic Deformable SVG Shape
        <br />
        Resize window for demo
      </p>
      <div
        className="svg-container"
        style={{ width: "50vw", height: "50vh", border: "1px solid" }}
      >
        <SVGStraightArrow {...straightArrowProps} />
      </div>
    </div>
  );
}

export default App;
