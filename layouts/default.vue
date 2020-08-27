<template>
  <div>
    <!-- <ul>
      <li
        v-for="color of colors"
        :key="color"
        @click="$colorMode.preference = color"
      >
        {{ color }}
      </li>
    </ul> -->
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
      colors: ["system", "light", "dark", "sepia", "black", "helena"]
    };
  },
  components: { LogoIcon, Grid },
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

<style lang="scss"></style>
