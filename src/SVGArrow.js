import React, { useEffect, useRef, useState } from "react";
import SVGCurve from "./SVGCurve";
import SVGTriangle from "./SVGTriangle";

export default function SVGArrow({
  props: { headWidth = 20, headLength = 40 },
}) {
  const ref = useRef({ current: { clientHeight: 0, clientWidth: 0 } });
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    setContainerWidth(ref.current.clientWidth || 0);
    setContainerHeight(ref.current.clientHeight || 0);
  }, [ref.current.clientWidth, ref.current.clientHeight]);

  const curve = {
    width: containerWidth - headLength,
    height: containerHeight,
    startXY: [0, 3],
    endXY: [containerWidth - headLength, containerHeight - headWidth / 2.5],
    centerXY: [containerWidth / 2, (containerHeight - headWidth / 2) / 2],
    curveXY: [containerWidth / 3, 0],
    strokeWidth: 3,
    strokeColor: "#000",
  };

  const curveStyles = {
    flex: 1,
  };

  const arrow = {
    width: headLength,
    heigth: headWidth,
    orientation: "right",
  };

  return (
    <div ref={ref} className="svg-arrow">
      <SVGCurve curve={curve} curveStyles={curveStyles} />
      <SVGTriangle props={arrow} />
    </div>
  );
}
