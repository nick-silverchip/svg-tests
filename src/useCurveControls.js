import { useState } from "react";

const useCurveControls = () => {
  const [centerXY, setCenterXY] = useState([0, 0]);
  const [curveXY, setCurveXY] = useState([0, 0]);
  const [showNodes, setShowNodes] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  return {
    centerXY,
    setCenterXY,
    curveXY,
    setCurveXY,
    showNodes,
    setShowNodes,
    showBorder,
    setShowBorder,
  };
};

export default useCurveControls;
