<template>
  <div class="container">
    <div class="grid" v-show="isActive">
      <div class="col-desk-1 col-mob-1 col-tab-1"></div>
      <div class="col-desk-1 col-mob-1 col-tab-1"></div>
      <div class="col-desk-1 col-mob-1 col-tab-1"></div>
      <div class="col-desk-1 col-mob-1 col-tab-1"></div>
      <div class="col-desk-1 col-mob-1 col-tab-1"></div>
      <div class="col-desk-1 col-mob-1 col-tab-1"></div>
      <div class="col-desk-1 col-mob-1 col-tab-1"></div>
      <div class="col-desk-1 col-mob-1 col-tab-1"></div>
      <div class="col-desk-1 col-mob-1 col-tab-1"></div>
      <div class="col-desk-1 col-mob-1 col-tab-1"></div>
      <div class="col-desk-1 col-mob-1 col-tab-1"></div>
      <div class="col-desk-1 col-mob-1 col-tab-1"></div>
    </div>
    <div class="grid-button" v-on:click="isActive = !isActive">G</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999999;

  .grid {
    background: rgba($color: blue, $alpha: 0.2);
    height: 100%;
  }

  .col-desk-1 {
    background: rgba($color: red, $alpha: 0.2);
    height: 100%;
  }

  .grid-button {
    width: 30px;
    height: 30px;
    text-align: center;
    background: rgba($color: green, $alpha: 0.2);
    pointer-events: all;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
    line-height: 30px;
  }
}
</style>
