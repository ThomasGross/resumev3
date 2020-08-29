<template>
  <div class="text-image-section grid">
    <div class="col-desk-1 col-tab-0 col-mob-0" />
    <div class="col-desk-5 col-tab-8 col-mob-4">
      <h1 data-aos="fade-right" data-aos-duration="500">
        {{ $t("profile.title") }}
      </h1>
      <div
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
.text-image-section {
  p {
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

<style lang="scss" scoped></style>
