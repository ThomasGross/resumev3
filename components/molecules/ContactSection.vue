<template>
  <div class="contact grid" id="contact">
    <div class="list col-desk-1 col-tab-0" />
    <h1
      data-aos="fade-right"
      data-aos-duration="500"
      class="col-desk-11 col-tab-8 col-mob-4"
    >{{ $t("contact.title") }}</h1>
    <div class="list col-desk-1 col-tab-0" />
    <div class="list col-desk-11 col-tab-8 col-mob-4">
      <div data-aos="fade-right" data-aos-duration="500">
        <div class="list__item">
          <i class="fa fa-phone"></i>
          <h3 class="list__item phone">
            <a href="tel:+4551886807">+45 51 88 68 07</a>
          </h3>
        </div>

        <h3 class="list__item mail">
          <i class="fa fa-envelope"></i>
          <a href="mailto:thomasgrossrasmussen@gmail.com">thomasgrossrasmussen@gmail.com</a>
        </h3>
        <h3 class="list__item dob">
          <i class="fa fa-calendar"></i>
          <span>{{ $t("contact.date") }}</span>
        </h3>
        <h3 class="list__item place">
          <i class="fa fa-map-marker"></i>
          <span>{{ $t("contact.city") }}</span>
        </h3>
        <h3 class="list__item github">
          <i class="fa fa-github"></i>
          <a href="http://github.com/ThomasGross" target="_blank">github.com/thomasgross</a>
        </h3>
        <h3 class="list__item linkedin">
          <i class="fa fa-linkedin"></i>
          <a
            href="https://dk.linkedin.com/in/thomas-gross-rasmussen-42796a120"
            target="_blank"
          >linkedin.com/in/thomasgrossrasmussen</a>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.list {
  &__item {
    display: flex;
    position: relative;
    align-items: baseline;

    i {
      width: 15px;
    }

    a,
    span {
      font-family: $font-secondary;
      margin-left: 30px;
      word-break: break-all;
      word-break: break-word;
      hyphens: auto;

      @include media($bp-tablet) {
        margin-left: 20px;
      }

      @include media($bp-mobile) {
        margin-left: 10px;
      }
    }

    a {
      color: var(--color-darken);

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
