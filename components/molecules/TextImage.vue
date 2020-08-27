<template>
  <div class="text-image grid">
    <div class="col-desk-1" />
    <div class="text-container col-desk-5">
      <h1
        class="text-container__title"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        {{ $t("profile.title") }}
      </h1>
      <div
        class="text-container__block"
        data-aos="fade-right"
        data-aos-duration="500"
        v-html="$t('profile.block')"
      ></div>
    </div>
  </div>
</template>

<script>
import DoodleHeatLeft from "assets/svg/doodle_heat_left.svg";
import DoodleHeatRight from "assets/svg/doodle_heat_right.svg";
import DoodleLight from "assets/svg/doodle_light.svg";

import Parallax from "vue-parallax-js";

export default {
  components: {
    DoodleHeatRight,
    DoodleHeatLeft,
    DoodleLight,
    Parallax
  },
  data() {
    return {
      isShow: false,
      isShake: false
    };
  }
};
</script>

<style lang="scss">
p {
  font-size: 16px;
  margin-bottom: 30px;
}
</style>

<style lang="scss" scoped>
.text-image {
}

.text-container {
  &__title {
  }
}
</style>
