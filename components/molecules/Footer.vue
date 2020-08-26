<template>
  <div class="footer">
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
      >
        DA
      </NuxtLink>
      /
      <NuxtLink
        :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
        :class="[
          'lang-select__link',
          locale === 'en' ? 'lang-select__link--disabled' : ''
        ]"
        active-class="none"
        exact
      >
        EN
      </NuxtLink>
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
  right: 0;
  width: 100vw;
  padding-bottom: 32px;
  display: flex;
  justify-content: space-between;

  .lang-select {
    color: white;
    margin-right: 32px;

    &__link {
      color: white;

      &--disabled {
        color: gray;
        pointer-events: none;
      }
    }
  }
}
</style>
