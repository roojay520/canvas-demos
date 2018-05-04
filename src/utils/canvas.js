export const drawRect = (context, x = 0, y = 0, width = 0, height = 0, color = '#222', lineWidth = 4) => {
  context.beginPath();
  context.rect(x, y, width, height);
  context.lineWidth = lineWidth;
  context.strokeStyle = color;
  context.stroke();
};

export const drawLine = (context, startX = 0, startY = 0, endX = 10, endY = 10, color = '#222', lineWidth = 2) => {
  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(endX, endY);
  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  context.stroke();
  context.closePath();
};

