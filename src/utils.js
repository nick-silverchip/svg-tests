export const calcAngle = (startX, startY, endX, endY) => {
  const dx = endX - startX;
  const dy = endY - startY;
  let theta = Math.atan2(dy, dx); // range (-PI, PI]
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
};

export const rotate = (cx, cy, x, y, angle) => {
  let radians = (Math.PI / 180) * (angle * -1);
  let cos = Math.cos(radians);
  let sin = Math.sin(radians);
  let nx = cos * (x - cx) + sin * (y - cy) + cx;
  let ny = cos * (y - cy) - sin * (x - cx) + cy;
  return [nx, ny];
};
