<template>
  <div class="demo">
    <canvas id="demos-01">你的浏览器不支持 canvas!</canvas>
  </div>
</template>
<script>

export default {
  data() {
    return {
      config: {
        width: 600,
        height: 400,
        lineWidth: 6,
        green: '#34a853',
        red: '#ea4335',
        blue: '#5f97f6',
        yellow: '#fbbc05',
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 获取画布 canvas 对象
      const canvas = document.getElementById('demos-01');
      // 获得画笔(2D 环境)
      const context = canvas.getContext('2d');

      // 设置 canvas 大小
      canvas.width = this.config.width;
      canvas.height = this.config.height;

      /**
       * canvas 使用笛卡尔坐标系, canvas 画布的左上角为坐标系的原点,
       * x 轴的正方向向右, y 轴的正方向向下.
       * moveTo(x, y) 移动画笔到(x, y)位置, lineTo(x, y) 画笔停点.
       * moveTo(), lineTo() 都只是一种状态, 表示要绘制到什么位置, 并没有实际绘制.
       */
      // 上
      context.moveTo(100, 100);
      context.lineTo(500, 100);
      // 设置画笔宽度与颜色
      context.lineWidth = this.config.lineWidth;
      context.strokeStyle = this.config.red;
      // 确定绘制有两种方法: fill() 填充和 stroke() 描边。
      context.stroke();
      // closePath() 闭合图形, 可以去除两个线段闭合时的缺口，仅对本次绘制状态有效。
      context.closePath();

      /**
       * canvas 是基于状态的绘制， 前面的 strokeStyle 属性会被后面的覆盖。
       * 在每次绘制之前加上 beginPath()，设置下次绘制的起始之处为 beginPath() 之后的代码。
       */
      // 右
      context.beginPath();
      context.moveTo(500, 100);
      context.lineTo(500, 300);
      context.lineWidth = this.config.lineWidth;
      context.strokeStyle = this.config.yellow;
      context.stroke();
      context.closePath();

      // 下
      context.beginPath();
      context.moveTo(500, 300);
      context.lineTo(100, 300);
      context.lineWidth = this.config.lineWidth;
      context.strokeStyle = this.config.blue;
      context.stroke();
      context.closePath();

      // 左
      context.beginPath();
      context.moveTo(100, 300);
      context.lineTo(100, 100);
      context.lineWidth = this.config.lineWidth;
      context.strokeStyle = this.config.green;
      context.stroke();
      context.closePath();

      // 中间
      context.beginPath();
      context.moveTo(250, 150);
      context.lineTo(350, 150);
      context.lineTo(350, 250);
      context.lineTo(250, 250);
      context.lineTo(250, 150);
      context.lineWidth = this.config.lineWidth;
      context.strokeStyle = this.config.green;
      // 设置填充颜色
      context.fillStyle = this.config.green;
      // 填充图形
      context.fill();
      context.stroke();
      context.closePath();
    },

  },
};
</script>