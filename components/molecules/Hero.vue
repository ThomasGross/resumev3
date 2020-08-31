<template>
  <div class="hero" id="hero">
    <div class="background">
      <kinesis-element :strength="20">
        <div
          class="background__text background__text--color-reverse"
          :strength="0.5"
        >
          {{ $t("hero.title") }}
        </div>
        <div
          class="background__text background__text--color-reverse"
          :strength="0.5"
        >
          {{ $t("hero.title") }}
        </div>
        <div
          class="background__text background__text--color-reverse"
          :strength="0.5"
        >
          {{ $t("hero.title") }}
        </div>
      </kinesis-element>
    </div>

    <kinesis-element class="container-box" :strength="10">
      <div class="box">
        <!-- <img class="img" src="https://source.unsplash.com/random/1000x1000" alt /> -->

        <div class="box__text-group">
          <kinesis-element class="margin-bot" :strength="5">
            <div class="box__text-group__text">{{ $t("hero.title") }}</div>
          </kinesis-element>
          <kinesis-element :strength="5">
            <div class="box__text-group__text">{{ $t("hero.title") }}</div>
          </kinesis-element>
        </div>

        <div
          class="box__text-group__text title box__text-group__text--color-reverse"
        >
          <p class="gradient-text">{{ $t("hero.title") }}</p>
        </div>
      </div>
    </kinesis-element>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  components: {},
  methods: {},
  computed: {
    locale() {
      return this.$store.state.locale;
    }
  }
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 600px;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  .background {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    transform: translate(-50%, -50%);

    &__text {
      white-space: nowrap;
      font-family: $font-primary;
      line-height: 85px;
      color: var(--color);
      font-size: 120px;
      text-shadow: -1px -1px 0 var(--bg), 1px -1px 0 var(--bg),
        -1px 1px 0 var(--bg), 1px 1px 0 var(--bg);
      transition: color 0.3s;

      &--color-reverse {
        color: var(--bg);
        text-shadow: -1px -1px 0 var(--color), 1px -1px 0 var(--color),
          -1px 1px 0 var(--color), 1px 1px 0 var(--color);
      }
    }
  }

  .container-box {
    height: 100%;
    width: 100%;
  }

  .box {
    width: 50vw;
    height: 200px;
    background: var(--color);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    transition: color 0.3s;

    background: url("https://source.unsplash.com/random/1000x1000") no-repeat
      50%;

    @include media($bp-tablet) {
      width: 75vw;
    }

    @include media($bp-mobile) {
      width: calc(100% + 1px);
    }

    .img {
      z-index: -1;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200%;
      transform: translate(-50%, -50%);
    }

    &__text-group {
      width: 100vw;
      left: -50%;
      top: 50%;
      transform: translate(calc(-1 * (100vw - 50vw) / 2), -27px);
      transition: color 0.3s;

      @include media($bp-tablet) {
        transform: translate(calc(-1 * (100vw - 75vw) / 2), -27px);
      }

      @include media($bp-mobile) {
        transform: translate(calc(-1 * (100vw - 100vw) / 2), -27px);
      }

      .margin-bot {
        margin-bottom: 85px;
      }

      &__text {
        white-space: nowrap;
        font-family: $font-primary;
        line-height: 85px;
        color: var(--bg);
        font-size: 120px;
        transition: color 0.3s;
        // text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
        //   1px 1px 0 white;

        &.title {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          height: 85px;
          white-space: normal;
          text-align: center;
          position: absolute;
          width: 100%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          mix-blend-mode: difference;

          p {
            font-family: $font-primary;
            line-height: 20px;
            color: white;
            letter-spacing: 5px;
            margin: 0 30px;
          }
        }

        &--color-reverse {
          color: var(--bg);
          // text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
          //   1px 1px 0 white;
        }
      }
    }
  }
}
</style>
