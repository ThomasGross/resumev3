<template>
  <div class="text-image grid">
    <div class="col-desk-7 text-container">
      <div class="title-contianer">
        <h1 class="title" data-aos="fade-right" data-aos-duration="500">
          The
          <span :class="[isShow ? 'show' : '', 'title__span']">ultimate</span>
          modern battery for any motorcycle
        </h1>
      </div>
      <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="500">
        <div class="text">
          <p>
            Whether you’re running a vintage, building your perfect café racer
            or just making your daily motorcycle as reliable as it can be.
          </p>
          <p>
            We got you covered from
            <span>€99</span>
          </p>
        </div>
        <Button>Preorder</Button>
      </div>
    </div>

    <div class="col-desk-4 parallax" v-parallax="0.1">
      <div
        class="text-image__img-container"
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="500"
      >
        <img class="img" src="img/motorcycle.png" alt />

        <DoodleHeatRight
          :class="[
            isShake ? 'shake' : '',
            'text-image__img-container__shake-icon',
            'doodle-right'
          ]"
        />
        <DoodleHeatLeft
          :class="[
            isShake ? 'shake' : '',
            'text-image__img-container__shake-icon',
            'doodle-left'
          ]"
        />
        <DoodleLight
          :class="[
            isShake ? 'shake' : '',
            'text-image__img-container__shake-icon',
            'doodle-light'
          ]"
        />
      </div>
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
    Parallax,
  },
  data() {
    return {
      isShow: false,
      isShake: false,
    };
  },
  created: function () {
    setTimeout(() => {
      this.isShow = true;
    }, 1500);
    setTimeout(() => {
      this.isShake = true;
    }, 1800);
  },
};
</script>

<style lang="scss" scoped>
.text-image {
  position: relative;

  $hover: "";

  &__img-container {
    position: absolute;
    width: 50vw;
    right: calc(-1 * (100vw - 250%) / 2);

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

    &:hover {
      $hover: &;
    }

    &__shake-icon {
      // #{$hover} & {
      //   animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      //   transform: translate3d(0, 0, 0);
      //   backface-visibility: hidden;
      //   perspective: 1000px;
      // }

      &.shake {
        animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
      }
    }

    @keyframes shake {
      10%,
      90% {
        transform: translate3d(-1px, 0, 0);
      }

      20%,
      80% {
        transform: translate3d(2px, 0, 0);
      }

      30%,
      50%,
      70% {
        transform: translate3d(-3px, 0, 0);
      }

      40%,
      60% {
        transform: translate3d(3px, 0, 0);
      }
    }

    .img {
      width: 100%;
    }

    .doodle-light {
      position: absolute;
      top: -10%;
      right: 52%;
      width: 6vw;
    }

    .doodle-right {
      position: absolute;
      top: 28%;
      right: 20%;
      width: 6vw;
    }

    .doodle-left {
      position: absolute;
      top: 41%;
      right: 52%;
      width: 6vw;
    }
  }

  .text-container {
    position: relative;
    z-index: 99999999;

    .title-contianer {
      width: 100%;
      margin-bottom: 65px;

      .title {
        // margin-right: 80px;
        font-size: 4.8vw;
        line-height: 1.2;

        $hover: "";

        &__span {
          position: relative;
          font-family: $font-soul-craft;

          &.show::after {
            width: 100%;
          }

          &::after {
            position: absolute;
            content: "";
            z-index: -1;
            left: 0;
            bottom: 0;
            width: 0;
            height: 30%;
            background: $color-red;
            transform: skew(20deg);
            transition: width 0.3s ease-in-out;
          }
        }
      }
    }

    .text {
      width: 70%;
      font-family: $font-secondary;

      p {
        margin-bottom: 32px;

        &:last-child {
          margin-bottom: 65px;
        }
      }

      span {
        font-family: $font-primary;
      }
    }
  }
}
</style>
