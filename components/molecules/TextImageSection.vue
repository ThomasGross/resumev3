<template>
  <div class="text-image-section grid" id="profile">
    <div class="col-desk-1 col-tab-0 col-mob-0" />
    <div class="col-desk-5 col-tab-8 col-mob-4">
      <div v-parallax.modifier="0.1">
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
    <div class="col-desk-5 col-tab-8 col-mob-4">
      <div class="image-container">
        <!-- <img class="image-container__image" src="~/assets/img/IMG_7137.jpg" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from "vue-parallax-js";

export default {
  components: {
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
  position: relative;

  p {
    &:last-child {
      margin-bottom: 0;
    }
  }

  .kinesis-element {
    // position: absolute;
    // top: 0;
    // right: 0;
    // bottom: 0;
    height: 100%;
  }

  .image-container {
    // overflow: hidden;
    position: relative;
    height: 100%;

    // box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

    @include media($bp-tablet) {
      margin-top: 100px;
      overflow: hidden;
      height: 0;
      padding-top: 3 / 4 * 100%;
      background: white;
      position: relative;
      width: calc(100vw + #{$grid-tablet-sideMargin * 2});
      left: -#{$grid-tablet-sideMargin + $grid-tablet-gutter};
    }

    &::before {
      position: absolute;
      content: "";
      border-radius: inherit;
      transition: box-shadow 0.3s ease, opacity 0.5s ease 0.5s;
      z-index: -2;
      box-shadow: 0 11px 90px 42px rgba(0, 0, 0, 0.16);
      height: 90%;
      width: 90%;
      top: 50%;
      right: -40%;
      transform: translate(-50%, -50%);
    }

    &__image {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 0;
      right: 0;
      bottom: 0;
      transform: translateY(-50%);
      object-fit: cover;
      object-position: top;
    }
  }
}
</style>

<style lang="scss" scoped></style>
