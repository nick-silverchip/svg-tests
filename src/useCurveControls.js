import { useState } from "react";

const useCurveControls = () => {
  const [centerXY, setCenterXY] = useState([0, 0]);
  const [curveXY, setCurveXY] = useState([0, 0]);

  return { centerXY, setCenterXY, curveXY, setCurveXY };
};

export default useCurveControls;
