<template>
  <div>
    <div class="layout-buttons">
      <div class="color-button" v-on:click="changeColor">C</div>
      <Grid />
    </div>
    <Nuxt />
  </div>
</template>

<script>
import LogoIcon from "assets/svg/logo.svg";
import Grid from "~/components/molecules/Grid";

export default {
  data() {
    return {
      colors: ["light", "dark", "sepia", "black", "helena"],
      count: 0,
    };
  },
  components: { LogoIcon, Grid },
  methods: {
    changeColor() {
      this.count++;
      if (this.count >= this.colors.length) {
        this.count = 0;
      }
      this.$colorMode.preference = this.colors[this.count];
    },
  },
  computed: {
    getColorMode() {
      return this.$store.state.activeColorMode;
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-buttons {
  position: fixed;
  bottom: 30px;
  left: 0;
  z-index: 999999999;

  .color-button {
    width: 30px;
    height: 30px;
    background: rgba($color: purple, $alpha: 0.2);
    pointer-events: all;
    text-align: center;
    cursor: pointer;
    line-height: 30px;
  }
}
</style>
