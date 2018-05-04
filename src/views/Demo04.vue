<template>
  <div class="demo">
    <canvas id="demos-04">你的浏览器不支持 canvas!</canvas>
  </div>
</template>
<script>
import { colors } from '../utils/color';

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
      const canvas = document.getElementById('demos-04');
      const context = canvas.getContext('2d');
      canvas.width = this.width;
      canvas.height = this.height;

      /**
       * lineJoin 定义两条线相交点的拐角状态。
       * miter：默认值，在相交处边缘延长相接。miterLimit 是角长和线宽所允许的最大比例(默认是 10)。
       * bevel：相交处是一个折角。
       * round：相交处是一个圆。
       */
      // miter：默认值，在相交处边缘延长相接
      context.beginPath();
      context.moveTo(100, 100);
      context.lineTo(200, 200);
      context.lineTo(100, 300);
      context.lineCap = 'butt';
      context.lineJoin = 'miter';
      context.strokeStyle = colors.red;
      context.lineWidth = 14;
      context.stroke();
      context.closePath();

      // bevel：相交处是一个折角
      context.beginPath();
      context.moveTo(250, 100);
      context.lineTo(350, 200);
      context.lineTo(250, 300);
      context.lineCap = 'square';
      context.lineJoin = 'bevel';
      context.strokeStyle = colors.green;
      context.lineWidth = 14;
      context.stroke();
      context.closePath();

      // round：相交处是一个圆。
      context.beginPath();
      context.moveTo(400, 100);
      context.lineTo(500, 200);
      context.lineTo(400, 300);
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.strokeStyle = colors.blue;
      context.lineWidth = 14;
      context.stroke();
      context.closePath();
    },

  },
};
</script>

