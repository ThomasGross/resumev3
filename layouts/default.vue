<template>
  <div ref="styles">
    <!-- <ul>
      <li
        v-for="color of colors"
        :key="color"
        @click="$colorMode.preference = color"
      >
        {{ color }}
      </li>
    </ul> -->
    <Nuxt />
  </div>
</template>

<script>
import LogoIcon from "assets/svg/logo.svg";

export default {
  data() {
    return {
      colors: ["system", "light", "dark", "sepia", "black"]
    };
  },
  components: { LogoIcon },
  methods: {
    changeColor() {
      const container = this.$refs.styles;

      // if (this.getColorMode === "dark") {
      //   container.style.background = "#0000";
      // } else {
      //   container.style.background = "#ffff";
      // }
    }
  },
  computed: {
    getColorMode() {
      return this.$store.state.activeColorMode;
    }
  }
};
</script>

<style lang="scss">
.styles {
  font-family: $font-secondary;
  word-spacing: 1px;
  box-sizing: border-box;
  // background: $color-primary;
  // color: $color-secondary;
  transition: background 0.3s ease;
}
</style>
