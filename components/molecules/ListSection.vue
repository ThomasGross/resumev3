<template>
  <div class="list-section grid" id="work">
    <div class="col-desk-5 col-tab-0 col-mob-0" />
    <div class="col-desk-6 col-tab-8 col-mob-4">
      <h1 data-aos="fade-right" data-aos-duration="500">
        {{ $t("work.title") }}
      </h1>
      <div data-aos="fade-right" data-aos-duration="500" class="experience">
        <div class="experience__item">
          <h3 class="experience__item__title">
            {{ $t("work.job0.title") }}
            <span>{{ $t("work.job0.year") }}</span>
          </h3>
          <h3>
            <span>{{ $t("work.job0.workplace") }}</span>
          </h3>
          <p>{{ $t("work.job0.description") }}</p>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="500" class="experience">
        <div class="experience__item">
          <h3 class="experience__item__title">
            {{ $t("work.job1.title") }}
            <span>{{ $t("work.job1.year") }}</span>
          </h3>
          <h3>
            <span>{{ $t("work.job1.workplace") }}</span>
          </h3>
          <p>{{ $t("work.job1.description") }}</p>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="500" class="experience">
        <div class="experience__item">
          <h3 class="experience__item__title">
            {{ $t("work.job2.title") }}
            <span>{{ $t("work.job2.year") }}</span>
          </h3>
          <h3>
            <span>{{ $t("work.job2.workplace") }}</span>
          </h3>
          <p>{{ $t("work.job2.description") }}</p>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="500" class="experience">
        <div class="experience__item">
          <h3 class="experience__item__title">
            {{ $t("work.job3.title") }}
            <span>{{ $t("work.job3.year") }}</span>
          </h3>
          <h3>
            <span>{{ $t("work.job3.workplace") }}</span>
          </h3>
          <p>{{ $t("work.job3.description") }}</p>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="500" class="experience">
        <div class="experience__item">
          <h3 class="experience__item__title">
            {{ $t("work.job4.title") }}
            <span>{{ $t("work.job4.year") }}</span>
          </h3>
          <h3>
            <span>{{ $t("work.job4.workplace") }}</span>
          </h3>
          <p>{{ $t("work.job4.description") }}</p>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="500" class="experience">
        <div class="experience__item">
          <h3 class="experience__item__title">
            {{ $t("work.job5.title") }}
            <span>{{ $t("work.job5.year") }}</span>
          </h3>
          <h3>
            <span>{{ $t("work.job5.workplace") }}</span>
          </h3>
          <p>{{ $t("work.job5.description") }}</p>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="500" class="experience">
        <div class="experience__item">
          <h3 class="experience__item__title">
            {{ $t("work.job6.title") }}
            <span>{{ $t("work.job6.year") }}</span>
          </h3>
          <h3>
            <span>{{ $t("work.job6.workplace") }}</span>
          </h3>
          <p>{{ $t("work.job6.description") }}</p>
        </div>
      </div>
    </div>
    <!-- <div class="watermark col-desk-6 col-tab-8 col-mob-4">
      <SvgCoding />
    </div>-->
  </div>
</template>

<script>
import Parallax from "vue-parallax-js";

import SvgCoding from "assets/svg/coding.svg";
import DoodleHeatRight from "assets/svg/doodle_heat_right.svg";
import DoodleLight from "assets/svg/doodle_light.svg";

export default {
  components: {
    SvgCoding,
  },
};
</script>

<style lang="scss" scoped>
.list-section {
  position: relative;

  .watermark {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    svg {
      opacity: 10%;
    }
  }
  .experience {
    font-size: 14px;

    span {
      color: var(--color-darken);
      white-space: nowrap;
      margin-left: auto;
    }

    &__item {
      margin-bottom: 30px;

      &:last-child {
        margin-bottom: 0;
      }

      &__title {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
