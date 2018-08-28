/**
 * 绘制矩形
 * options: {
 *   x = 0, y = 0,
 *   width = 0, height = 0,
 *   color = '#222',
 *   lineWidth = 4
 * }
 * @param {*} context 2D 环境画笔
 * @param {object} options 配置选项
 *
 */
export const drawRect = (context, options = {}) => {
  const { x = 0,
    y = 0,
    width = 0,
    height = 0,
    color = '#222',
    lineWidth = 4 } = options;
  const ctx = context;
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.closePath();
};

/**
 * 绘制线条
 * options: {
 *   startX = 0, startY = 0,
 *   endX = 10, endY = 10,
 *   color = '#222',
 *   lineWidth = 2, lineCap = 'butt'
 * }
 * @param {*} context 2D 环境画笔
 * @param {*} options 配置选项
 */
export const drawLine = (context, options = {}) => {
  const { startX = 0,
    startY = 0,
    endX = 10,
    endY = 10,
    color = '#222',
    lineWidth = 2,
  } = options;
  const ctx = context;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
  ctx.closePath();
};

export default {
  drawRect,
  drawLine,
};

