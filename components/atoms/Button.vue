<template>
  <div class="button-group">
    <div class="button-group__button">
      <slot></slot>
    </div>
    <ArrowIcon class="button-group__arrow" />
  </div>
</template>

<script>
import ArrowIcon from "assets/svg/doodle_arrow.svg";

export default {
  components: {
    ArrowIcon,
  },
};
</script>

<style lang="scss" scoped>
.button-group {
  display: inline-flex;
  position: relative;

  $hover: "";

  &:hover {
    $hover: &;
  }

  &__arrow {
    position: absolute;
    bottom: 0;
    left: calc(100% + 30px);
    pointer-events: none;
    transition: transform 0.15s ease-in;
    transform: rotate(0deg);
    transform-origin: top left;

    #{$hover} & {
      transform: rotate(3deg);
      backface-visibility: hidden;
      perspective: 1000px;
    }
  }

  &__button {
    font-family: $font-primary;
    letter-spacing: 1px;
    display: inline-block;
    background: rgba($color-red, 0.1);
    color: $color-red;
    height: 48px;
    min-width: 180px;
    padding: 0 30px;
    border-radius: 25px;
    transition: background 0.3s, color 0.3s;
    text-transform: uppercase;
    text-align: center;
    line-height: 48px;
    cursor: pointer;
    overflow: hidden;
    word-break: break-all;
    transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out,
      color 0.3s ease-in-out;

    &:hover {
      background: rgba($color-red, 0.8);
      color: $color-white;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    &:active {
      background: rgba($color-red, 0.5);
      color: $color-white;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
