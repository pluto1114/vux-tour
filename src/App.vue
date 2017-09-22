<template>
  <div id="app" style="height:100%;">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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

.weui-media-box_appmsg .weui-media-box__hd {
  width: 100px!important;
  height: 60px!important;
}




</style>
