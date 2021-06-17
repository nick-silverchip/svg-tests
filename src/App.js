import "./App.css";
import SVGBracket from "./SVGBracket";
import SVGStraightArrow from "./SVGStraightArrow";
import SVGCurvedArrow from "./SVGCurvedArrow";
import Controls from "./Controls";
import { useWindowDimensions } from "./useWindowDimensions";
import useCurveControls from "./useCurveControls";

function App() {
  const { width, height } = useWindowDimensions();

  const svgWidth = width / 2;
  const svgHeight = height / 2;

  const controlProps = useCurveControls();

  const straightArrowProps = {
    width: svgWidth,
    height: svgHeight,
    up: false,
    left: false,
    horizontalOnly: false,
    verticalOnly: false,
    pointerlength: 30,
    pointerWidth: 15,
    cp: controlProps,
  };

  const bracketProps = {
    flipHorizontal: true,
    cp: controlProps,
  };

  const curvedArrowProps = {
    cp: controlProps,
  };

  return (
    <div className="App">
      <h1>SVG Tests</h1>
      <div className="svg-container" style={{ width: "75vw", height: "50vh" }}>
        <SVGStraightArrow {...straightArrowProps} />
        {/* <SVGCurvedArrow {...curvedArrowProps} /> */}
        {/* <SVGBracket {...bracketProps} /> */}
      </div>
      <Controls {...controlProps} />
    </div>
  );
}

export default App;
