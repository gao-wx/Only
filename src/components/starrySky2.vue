<template>
  <body>
    <div class="stars">
      <div class="star" v-for="(item, index) in starsCount" :key="index" ref="star"></div>
    </div>
  </body>
</template>

<script>
export default {
  data () {
    return {
      starsCount: 800,
      distance: 800
    }
  },
  mounted () {
    let starArr = this.$refs.star
    starArr.forEach(item => {
      let speed = 0.2 + (Math.random() * 1)
      let thisDistance = this.distance + (Math.random() * 300)
      item.style.transformOrigin = `0 0 ${thisDistance}px`
      item.style.transform = `translate3d(0, 0, -${thisDistance}px) rotateY(${(Math.random() * 360)}deg) rotateX(${(Math.random() * -50)}deg) scale(${speed}, ${speed})`
    })
  }
}
</script>

<style scoped lang="less">

body {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
  background: radial-gradient(200% 100% at bottom center, #f7f7b6, #e96f92, #1b2947) !important;
  background: radial-gradient(220% 105% at top center, #1b2947 10%, #75517d 40%, #e96f92 65%, #f7f7b6)!important;
}

@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
  }
}
.stars {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  perspective-origin: 50% 100%;
  left: 50%;
  animation: rotate 90s infinite linear;
  bottom: 0;
}
.star {
  width: 2px;
  height: 2px;
  background: #f7f7b8;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
}
</style>
