<template>
  <div class="grid">
    <div class="footer col-desk-12">
      <div class="social"></div>
      <div class="lang-select">
        <NuxtLink
          :to="$i18n.path('da' + $route.fullPath)"
          :class="[
            'lang-select__link',
            locale === 'da' ? 'lang-select__link--disabled' : ''
          ]"
          active-class="none"
          exact
          >DA</NuxtLink
        >
        <span>/</span>
        <NuxtLink
          :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
          :class="[
            'lang-select__link',
            locale === 'en' ? 'lang-select__link--disabled' : ''
          ]"
          active-class="none"
          exact
          >EN</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import LogoIcon from "assets/svg/logo.svg";

export default {
  components: { LogoIcon },
  computed: {
    locale() {
      return this.$store.state.locale;
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  padding-bottom: 32px;
  display: flex;
  justify-content: space-between;
  transform: translateX(-50%);
  width: $desk-grid-width;

  @include media($bp-tablet) {
    width: $tab-grid-width;
  }

  @include media($bp-mobile) {
    width: $mob-grid-width;
  }

  .lang-select {
    display: flex;
    font-family: $font-secondary;
    letter-spacing: 11px;
    font-size: 12px;
    color: var(--color);

    &__link {
      font-family: $font-secondary;
      color: var(--color);

      &--disabled {
        color: gray;
        pointer-events: none;
      }
    }
  }
}
</style>
