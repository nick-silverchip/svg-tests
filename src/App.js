import "./App.css";
import SVGStraightArrow from "./SVGStraightArrow";
import { useWindowDimensions } from "./useWindowDimensions";

function App() {
  const { width, height } = useWindowDimensions();

  const svgWidth = width / 2;
  const svgHeight = height / 2;

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
