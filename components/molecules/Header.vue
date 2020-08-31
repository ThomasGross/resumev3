<template>
  <div class="header" ref="header">
    <div class="container">
      <a
        class="logo-contianer"
        href="#"
        v-scroll-to="{ el: '#hero', offset: 0, easing: 'ease-in-out' }"
      >
        <div class="logo-contianer__link">Thomas</div>
        <div class="logo-contianer__link">Gross</div>
        <div class="logo-contianer__link">Rasmussen</div>
      </a>
      <div class="nav-menu">
        <div class="nav-menu__item">
          <a
            href="#"
            v-scroll-to="{
              el: '#profile',
              offset: -100,
              easing: 'ease-in-out'
            }"
          >
            <div class="link">
              {{ $t("header.profile") }}
              <span></span>
            </div>
          </a>
        </div>
        <div class="nav-menu__item">
          <a href="#" v-scroll-to="{ el: '#work', offset: -100, easing: 'ease-in-out' }">
            <div class="link">{{ $t("header.work") }}</div>
          </a>
        </div>
        <div class="nav-menu__item">
          <a
            href="#"
            v-scroll-to="{
              el: '#education',
              offset: -100,
              easing: 'ease-in-out'
            }"
          >
            <div class="link">{{ $t("header.education") }}</div>
          </a>
        </div>
        <div class="nav-menu__item">
          <a href="#" v-scroll-to="{ el: '#tech', offset: -100, easing: 'ease-in-out' }">
            <div class="link">{{ $t("header.tech") }}</div>
          </a>
        </div>
        <div class="nav-menu__item">
          <a
            href="#"
            v-scroll-to="{
              el: '#projects',
              offset: -100,
              easing: 'ease-in-out'
            }"
          >
            <div class="link">{{ $t("header.projects") }}</div>
          </a>
        </div>
        <div class="nav-menu__item">
          <a
            href="#"
            v-scroll-to="{
              el: '#contact',
              offset: -100,
              easing: 'ease-in-out'
            }"
          >
            <div class="link">{{ $t("header.contact") }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoIcon from "assets/svg/logo.svg";

export default {
  components: { LogoIcon },
  methods: {},
};
</script>

<style lang="scss" scoped>
.header {
  top: 0;
  left: 0;
  width: $desk-grid-width-gutter;
  left: 50%;
  z-index: 99999;
  position: fixed;
  pointer-events: none;
  transform: translateX(-50%);
  padding-top: 30px;

  @include media($bp-tablet) {
    width: $tab-grid-width-gutter;
  }

  @include media($bp-mobile) {
    width: $mob-grid-width-gutter;
  }
}

.logo-contianer {
  position: relative;

  $hover: "";

  &:hover {
    $hover: &;
  }

  &__link {
    position: relative;
    color: var(--color);
    pointer-events: all;
    transition: all 0.3s ease-in-out;

    @include media($bp-tablet) {
      font-size: 14px;
    }

    #{$hover} & {
      transform: skewX(20deg) translateX(5px);
    }
  }
}

.container {
  display: flex;
  flex: 1;
  justify-content: space-between;

  .nav-menu {
    position: relative;

    &__item {
      margin-left: 20px;
    }

    .link {
      pointer-events: all;
      color: var(--color);
      text-align: right;
      transition: all 0.3s ease;

      word-break: break-all;
      /* Non standard for WebKit */
      word-break: break-word;
      hyphens: auto;

      @include media($bp-tablet) {
        font-size: 14px;
      }

      &:hover {
        padding-right: 30px;
        transform: skewX(20deg);
      }
    }
  }
}
</style>
