<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
    @import 'assets/style/myanimate.scss';
    @import 'assets/style/common.css';
    @import 'assets/FontAwesome-4.7.0/css/font-awesome.min.css';

body, html {
    background: #fff;
}

#app {
    color: #2c3e50;
    background: #fff;
    height: 100%;
    -webkit-overflow-scrolling : touch;
}
.load-more {
    padding: 15px 0;
    text-align: center;
}
.lazyload-image {
  display: block;
}
img.lazyload-image.lg[lazy=loading] {
  width: 50px;
  height: 180px;
  margin: auto;
}
img[lazy=loading] {
  width: 15px;
  height: 60px;
  margin: auto;
}
img[lazy=loaded], img[lazy=error]{
  width: 100%;
  max-width: 100%;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
</style>
