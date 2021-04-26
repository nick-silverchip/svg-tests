import "./App.css";
import SVGCurve from "./SVGCurve";
import { useWindowDimensions } from "./useWindowDimensions";

function App() {
  const { width, height } = useWindowDimensions();

  const svgWidth = width / 2;
  const svgHeight = height / 2;

  const curve1 = {
    width: svgWidth,
    height: svgHeight,
    startXY: [0, 0],
    endXY: [svgWidth, svgHeight],
    centerXY: [svgWidth / 2, svgHeight / 2],
    curveXY: [svgWidth / 3, 0],
    strokeWidth: 3,
    strokeColor: "red",
  };

  return (
    <div className="App">
      <h1>SVG Tests</h1>
      <SVGCurve curve={curve1} />
      <p>
        Dynamic Deformable SVG Shape
        <br />
        Resize window for demo
      </p>
    </div>
  );
}

export default App;
