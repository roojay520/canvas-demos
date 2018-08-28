<template>
  <div class="demo">
    <canvas id="demos-03">你的浏览器不支持 canvas!</canvas>
  </div>
</template>
<script>

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
      this.$canvas.drawLine(context, {
        startX: 100,
        startY: 0,
        endX: 100,
        endY: 400,
        color: this.$colors.grey,
      });
      this.$canvas.drawLine(context, {
        startX: 500,
        startY: 0,
        endX: 500,
        endY: 400,
        color: this.$colors.grey,
      });

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
      context.strokeStyle = this.$colors.red;
      context.lineWidth = 14;
      context.stroke();
      context.closePath();
      // round：端点是在线段边缘处以线宽为直径的半圆。
      context.beginPath();
      context.moveTo(100, 200);
      context.lineTo(500, 200);
      context.lineCap = 'round';
      context.strokeStyle = this.$colors.green;
      context.lineWidth = 14;
      context.stroke();
      context.closePath();
      // square：端点是在选段边缘处以线宽为长、以一半线宽为宽的矩形。
      context.beginPath();
      context.moveTo(100, 300);
      context.lineTo(500, 300);
      context.lineCap = 'square';
      context.strokeStyle = this.$colors.blue;
      context.lineWidth = 14;
      context.stroke();
      context.closePath();
    },

  },
};
</script>

