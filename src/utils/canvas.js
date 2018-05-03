export const drawRect = (context, x = 0, y = 0, w = 0, h = 0, c = '#222', lw = 4) => {
  context.beginPath();
  context.rect(x, y, w, h);
  context.lineWidth = lw;
  context.strokeStyle = c;
  context.stroke();
};
