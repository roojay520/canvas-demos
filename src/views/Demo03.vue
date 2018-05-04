<template>
  <div class="demo">
    <canvas id="demos-03">你的浏览器不支持 canvas!</canvas>
  </div>
</template>
<script>
import { colors } from '../utils/color';
import { drawLine } from '../utils/canvas';

export default {
  data() {
    return {
      width: 600,
      height: 400,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const canvas = document.getElementById('demos-03');
      const context = canvas.getContext('2d');
      canvas.width = this.width;
      canvas.height = this.height;

      // 参考线
      drawLine(context, 100, 0, 100, 400, colors.grey);
      drawLine(context, 500, 0, 500, 400, colors.grey);

      /**
       * lineCap 定义上下文中线的端点状态
       * butt：默认值，端点是垂直于线段边缘的平直边缘。
       * round：端点是在线段边缘处以线宽为直径的半圆。
       * square：端点是在选段边缘处以线宽为长、以一半线宽为宽的矩形。
       */
      // butt：默认值，端点是垂直于线段边缘的平直边缘。
      context.beginPath();
      context.moveTo(100, 100);
      context.lineTo(500, 100);
      context.lineCap = 'butt';
      context.strokeStyle = colors.red;
      context.lineWidth = 14;
      context.stroke();
      context.closePath();
      // round：端点是在线段边缘处以线宽为直径的半圆。
      context.beginPath();
      context.moveTo(100, 200);
      context.lineTo(500, 200);
      context.lineCap = 'round';
      context.strokeStyle = colors.green;
      context.lineWidth = 14;
      context.stroke();
      context.closePath();
      // square：端点是在选段边缘处以线宽为长、以一半线宽为宽的矩形。
      context.beginPath();
      context.moveTo(100, 300);
      context.lineTo(500, 300);
      context.lineCap = 'square';
      context.strokeStyle = colors.blue;
      context.lineWidth = 14;
      context.stroke();
      context.closePath();
    },

  },
};
</script>

