<template>
  <div id="app">
    <transition name="fade">
      <router-view class="router-view"/>
    </transition>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta > from.meta) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
        
      }
    }
  }
};
</script>
<style>
@import url("./common/css/common.css");
@import url("./common/css/common.styl");
</style>

