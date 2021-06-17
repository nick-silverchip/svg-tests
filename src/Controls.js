import React from "react";

export default function Controls({
  centerXY,
  setCenterXY,
  curveXY,
  setCurveXY,
  showNodes,
  setShowNodes,
  showBorder,
  setShowBorder,
}) {
  return (
    <div className="controls">
      <div className="control-col">
        <label htmlFor="ip-centerx">Center X</label>
        <input
          id="ip-centerxy"
          type="range"
          value={centerXY[0]}
          min={-1}
          max={1}
          step={0.01}
          onChange={(e) => handleChange("centerX", e.target.value)}
        />
      </div>
      <div className="control-col">
        <label htmlFor="ip-centery">Center Y</label>
        <input
          id="ip-centery"
          type="range"
          value={centerXY[1]}
          min={-1}
          max={1}
          step={0.01}
          onChange={(e) => handleChange("centerY", e.target.value)}
        />
      </div>
      <div className="control-col">
        <label htmlFor="ip-shownodes">Show nodes</label>
        <input
          id="ip-shownodes"
          type="checkbox"
          value={showNodes}
          onChange={() => setShowNodes(!showNodes)}
        />
        <label htmlFor="ip-showborder">Show border</label>
        <input
          id="ip-showborder"
          type="checkbox"
          value={showBorder}
          onChange={() => setShowBorder(!showBorder)}
        />
      </div>
      <div className="control-col">
        <label htmlFor="ip-curvex">Curve X</label>
        <input
          id="ip-curvex"
          type="range"
          value={curveXY[0]}
          min={-1}
          max={1}
          step={0.01}
          onChange={(e) => handleChange("curveX", e.target.value)}
        />
      </div>
      <div className="control-col">
        <label htmlFor="ip-curvex">Curve Y</label>
        <input
          id="ip-curvey"
          type="range"
          value={curveXY[1]}
          min={-1}
          max={1}
          step={0.01}
          onChange={(e) => handleChange("curveY", e.target.value)}
        />
      </div>
    </div>
  );

  function handleChange(name, value) {
    if (name === "centerX") setCenterXY([value, centerXY[1]]);
    else if (name === "centerY") setCenterXY([centerXY[0], value]);
    else if (name === "curveX") setCurveXY([value, curveXY[1]]);
    else if (name === "curveY") setCurveXY([curveXY[0], value]);
  }
}
