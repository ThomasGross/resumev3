<template>
  <div class="projects grid" id="projects">
    <div class="col-desk-12 col-tab-8 col-mob-4">
      <h1 data-aos="fade-right" data-aos-duration="500">{{ $t("projects.title") }}</h1>
    </div>

    <div class="item col-desk-5 col-tab-8 col-mob-4">
      <h3 class="item__title">Kontainer.dk</h3>
      <div class="item__image-container">
        <div class="item__image-container__image">
          <img class="img-responsive" src="~/assets/img/kontainer2.png" alt />
        </div>
        <a href="https://www.kontainer.dk"></a>
      </div>
    </div>
    <div class="item col-desk-5 col-tab-8 col-mob-4">
      <h3 class="item__title">Genbyg.dk</h3>
      <div class="item__image-container">
        <div class="item__image-container__image">
          <img class="img-responsive" src="~/assets/img/genbyg2.png" alt />
        </div>
        <a href="https://www.genbyg.dk"></a>
      </div>
    </div>
    <div class="item col-desk-5 col-tab-8 col-mob-4">
      <h3 class="item__title">Frivillig.dk</h3>
      <div class="item__image-container">
        <div class="item__image-container__image">
          <img class="img-responsive" src="~/assets/img/frivillig2.png" alt />
        </div>
        <a href="https://www.frivillig.dk"></a>
      </div>
    </div>
    <div class="item col-desk-5 col-tab-8 col-mob-4">
      <h3 class="item__title">Learninginstitute.implement.dk</h3>
      <div class="item__image-container">
        <div class="item__image-container__image">
          <img class="img-responsive" src="~/assets/img/implement.png" alt />
        </div>
        <a href="https://www.learninginstitute.implement.dk"></a>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from "vue-parallax-js";

export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.projects {
  font-size: 14px;

  span {
    opacity: 70%;
  }
}

.item {
  position: relative;
  margin-bottom: 30px;

  $hover: "";

  &:hover {
    $hover: &;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &__image-container {
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;

    &::before {
      position: absolute;
      content: "";
      border-radius: inherit;
      transition: box-shadow 0.3s ease, opacity 0.5s ease 0.5s;
      box-shadow: 0 11px 90px 42px rgba(0, 0, 0, 0.16);
      height: 0;
      padding-bottom: 40%;
      width: 90%;
      top: 50%;
      right: -40%;
      transform: translate(-50%, -50%);

      #{$hover} & {
        box-shadow: 0 5px 45px 21px rgba(0, 0, 0, 0.16);
      }
    }

    &__image {
      width: 100%;
      overflow: hidden;
      padding-bottom: 56.25%;
      position: relative;
      height: 0;

      img {
        width: 100%;
      }
    }
  }

  &__title {
    transition: color 0.3s ease-in-out;

    #{$hover} & {
      color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
