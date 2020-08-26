<template>
  <div class="header" ref="header">
    <div class="header__container">
      <div class="logo-contianer">
        <nuxt-link to="/">
          <div class="link">Thomas</div>
          <div class="link">Gross</div>
          <div class="link">Rasmussen</div>
        </nuxt-link>
      </div>
      <div class="nav-menu">
        <div class="nav-menu__item">
          <nuxt-link :to="$i18n.path('about')">
            <div class="link">{{ $t("header.profile") }} <span></span></div>
          </nuxt-link>
        </div>
        <div class="nav-menu__item">
          <nuxt-link :to="$i18n.path('about')">
            <div class="link">{{ $t("header.work") }}</div>
          </nuxt-link>
        </div>
        <div class="nav-menu__item">
          <nuxt-link to="/education">
            <div class="link">{{ $t("header.education") }}</div>
          </nuxt-link>
        </div>
        <div class="nav-menu__item">
          <nuxt-link to="/tech">
            <div class="link">{{ $t("header.tech") }}</div>
          </nuxt-link>
        </div>
        <div class="nav-menu__item">
          <nuxt-link to="/projects">
            <div class="link">{{ $t("header.projects") }}</div>
          </nuxt-link>
        </div>
        <div class="nav-menu__item">
          <nuxt-link to="/contact">
            <div class="link">{{ $t("header.contact") }}</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoIcon from "assets/svg/logo.svg";

export default {
  components: { LogoIcon }
};
</script>

<style lang="scss" scoped>
.header {
  top: 0;
  width: 100vw;
  z-index: 99999;
  position: fixed;
  pointer-events: none;

  &__container {
    display: flex;
    flex: 1;
    padding: 32px 0 0;
    justify-content: space-between;

    .logo-contianer {
      position: relative;
      margin-left: 32px;

      .link {
        color: white;
        pointer-events: all;
      }
    }

    .nav-menu {
      position: relative;
      margin-right: 32px;

      &__item {
        margin-left: 20px;
      }

      .link {
        pointer-events: all;
        color: $color-secondary;
        text-align: right;
        transition: all 0.3s ease;

        &:hover {
          transform: skewX(20deg) translateX(-30px);
        }

        &--bold-red {
          margin-left: 60px;
          color: $color-red;
          font-family: $font-primary;
        }
      }
    }
  }
}
</style>
