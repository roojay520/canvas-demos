<template>
  <div class="demo">
    <canvas id="demos-02">你的浏览器不支持 canvas!</canvas>
  </div>
</template>
<script>
import { getRandom } from '../utils/helper';

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
      const canvas = document.getElementById('demos-02');
      const context = canvas.getContext('2d');
      canvas.width = this.width;
      canvas.height = this.height;
      this.$canvas.drawRect(context, 150, 50, 300, 300);
      const color = Object.values(this.$colors);
      const len = color.length;
      const options = (i) => ({
        x: 150 + (i * 10),
        y: 50 + (i * 10),
        width: 300 - (i * 20),
        height: 300 - (i * 20),
        color: color[getRandom(len)],
      });
      for (let i = 1; i < 15; i++) {
        this.$canvas.drawRect(context, options(i));
      }
    },

  },
};
</script>

