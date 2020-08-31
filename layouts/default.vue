<template>
  <div>
    <!-- <ul>
      <li v-for="color of colors" :key="color" @click="$colorMode.preference = color">{{ color }}</li>
    </ul>-->
    <div class="color-button" v-on:click="changeColor">C</div>
    <Grid />
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
.color-button {
  z-index: 999999999;
  padding: 10px;
  background: rgba($color: purple, $alpha: 0.2);
  pointer-events: all;
  cursor: pointer;
  position: fixed;
  bottom: 36px;
  left: 0;
}
</style>
