// TODO Remove Math.round from everywhere

const getCornerAngle = (rect: DOMRect) => {
  return Math.atan(rect.width / rect.height) * (180 / Math.PI);
};

export const getPercentage = (value: number, max: number) => `${(value / max) * 100}%`;

export const getRelativeAngle = (x: number, y: number, rect: DOMRect) => {
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rawAngle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90;
  return rawAngle < 0 ? 360 + rawAngle : rawAngle;
};

const getCornerAngles = (rect: DOMRect) => {
  const topRight = getCornerAngle(rect);
  const bottomRight = 180 - topRight;
  const bottomLeft = 180 + topRight;
  const topLeft = 360 - topRight;

  return { topRight, bottomRight, bottomLeft, topLeft };
};

const getQuadrant = (angle: number, rect: DOMRect) => {
  const { topRight, bottomRight, bottomLeft, topLeft } = getCornerAngles(rect);

  if (angle >= topLeft || angle <= topRight) {
    return "top";
  }
  if (angle >= topRight && angle <= bottomRight) {
    return "right";
  }
  if (angle <= bottomLeft && angle >= bottomRight) {
    return "bottom";
  }
  if (angle >= bottomLeft && angle <= topLeft) {
    return "left";
  }
  throw new Error(`Invalid angle ${angle}`);
};

export const getGradientPosition = (angle: number, rect: DOMRect) => {
  const normalizedAngle = ((angle % 360) + 360) % 360;
  const { width, height } = rect;
  const centerX = width / 2;
  const centerY = height / 2;

  // Convert angle to radians for calculations
  const angleRad = normalizedAngle * (Math.PI / 180);

  if (normalizedAngle % 90 === 0) {
    switch (normalizedAngle) {
      case 0:
        return [centerX, 0];
      case 90:
        return [width, centerY];
      case 180:
        return [centerX, height];
      case 270:
        return [0, centerY];
    }
  }

  const quadrant = getQuadrant(normalizedAngle, rect);
  switch (quadrant) {
    case "top":
      return [centerX + Math.tan(angleRad) * centerY, 0];
    case "right":
      return [width, centerY + Math.tan(angleRad - Math.PI / 2) * centerX];
    case "bottom":
      return [centerX - Math.tan(angleRad - Math.PI) * centerY, height];
    case "left":
      return [0, centerY - Math.tan(angleRad - (3 * Math.PI) / 2) * centerX];
  }
};

export const setGradPos = (value: number, max: number) => `${(value / max) * 100}%`;
