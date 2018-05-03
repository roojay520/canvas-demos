<template>
  <div class="demo">
    <canvas id="demos-02">你的浏览器不支持 canvas!</canvas>
  </div>
</template>
<script>
import { getRandom } from '../utils/helper';
import { colors } from '../utils/color';
import { drawRect } from '../utils/canvas';

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
      drawRect(context, 150, 50, 300, 300);
      const color = Object.values(colors);
      const len = color.length;
      for (let i = 1; i < 15; i++) {
        drawRect(
          context,
          150 + (i * 10), 50 + (i * 10),
          300 - (i * 20),
          300 - (i * 20), color[getRandom(len)],
        );
      }
    },

  },
};
</script>

