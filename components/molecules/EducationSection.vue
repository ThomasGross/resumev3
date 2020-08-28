<template>
  <div class="list-section grid">
    <div class="col-desk-1 col-tab-0" />
    <div class="col-desk-5 col-tab-5">
      <h1 data-aos="fade-right" data-aos-duration="500">
        {{ $t("education.title") }}
      </h1>
      <div data-aos="fade-right" data-aos-duration="500" class="experience">
        <div class="experience__item">
          <h3 class="experience__item__title">
            {{ $t("education.item1.title") }}
            <span>{{ $t("education.item1.year") }}</span>
          </h3>
          <h3>
            <span>{{ $t("education.item1.workplace") }}</span>
          </h3>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="500" class="experience">
        <div class="experience__item">
          <h3 class="experience__item__title">
            {{ $t("education.item2.title") }}
            <span>{{ $t("education.item2.year") }}</span>
          </h3>
          <h3>
            <span>{{ $t("education.item2.workplace") }}</span>
          </h3>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="500" class="experience">
        <div class="experience__item">
          <h3 class="experience__item__title">
            {{ $t("education.item3.title") }}
            <span>{{ $t("education.item3.year") }}</span>
          </h3>
          <h3>
            <span>{{ $t("education.item3.workplace") }}</span>
          </h3>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="500" class="experience">
        <div class="experience__item">
          <h3 class="experience__item__title">
            {{ $t("education.item4.title") }}
            <span>{{ $t("education.item4.year") }}</span>
          </h3>
          <h3>
            <span>{{ $t("education.item4.workplace") }}</span>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from "vue-parallax-js";

export default {
  components: {}
};
</script>

<style lang="scss">
.list-section {
  .experience {
    font-size: 14px;

    span {
      color: var(--color-darken);
      white-space: nowrap;
      margin-left: auto;
    }

    &__item {
      margin-bottom: 30px;

      &__title {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
