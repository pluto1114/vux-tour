<template>
  <div id="app" style="height:100%;">
    <transition :name="'fade'">
      <keep-alive>
      <router-view class="router-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed:{
    
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background-color: #ffffff;
}
@media only screen{
  html,body{
    max-width:480px;
  }
}
.c-gray {
  color: gray;
}

.sub-title {
  font-size: 0.9em;
  color: gray;
}

.bar {
  height: 10px;
  background-color: #eee;
}
.header {
    position: fixed!important;
    width: 100%;
    z-index: 999;
}
.content{
  margin-top: 46px;
}
.weui-media-box_appmsg .weui-media-box__hd {
  width: 100px!important;
  height: 60px!important;
}
</style>
<style lang="less">

.fade-enter-active{
  transition: opacity .8s ease;
}

.fade-enter{
  opacity: 0
}
</style>

