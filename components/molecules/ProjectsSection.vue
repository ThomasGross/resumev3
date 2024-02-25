<template>
  <div class="projects grid" id="projects">
    <div class="col-desk-1 col-tab-0"></div>
    <div class="col-desk-11 col-tab-8 col-mob-4">
      <h1 data-aos="fade-right" data-aos-duration="500">
        {{ $t("projects.title") }}
      </h1>
    </div>


    <div class="col-desk-1 col-tab-0"></div>
    <div class="item col-desk-5 col-tab-8 col-mob-4">
      <div data-aos="fade-right" data-aos-duration="500">
        <h3 class="item__title">DanskHåndbold</h3>
        <div class="item__image-container">
          <div class="item__image-container__image">
            <img class="img-responsive" src="~/assets/img/danskhaandbold.png" alt />
          </div>
          <a target="_blank" href="https://danskhaandbold.dk/"></a>
        </div>
      </div>
    </div>
    <div class="item col-desk-5 col-tab-8 col-mob-4">
      <div data-aos="fade-right" data-aos-duration="500">
        <h3 class="item__title">Vestforbrændingen</h3>
        <div class="item__image-container">
          <div class="item__image-container__image">
            <img class="img-responsive" src="~/assets/img/vestfor.png" alt />
          </div>
          <a target="_blank" href="https://vestfor.dk/"></a>
        </div>
      </div>
    </div>
    <div class="col-desk-1 col-tab-0"></div>

    <div class="col-desk-1 col-tab-0"></div>
    <div class="item col-desk-5 col-tab-8 col-mob-4">
      <div data-aos="fade-right" data-aos-duration="500">
        <h3 class="item__title">Designbase + others - Horisont gruppen</h3>
        <div class="item__image-container">
          <div class="item__image-container__image">
            <img class="img-responsive" src="~/assets/img/designbase.png" alt />
          </div>
          <a target="_blank" href="https://www.designbase.dk/"></a>
        </div>
      </div>
    </div>
    <div class="item col-desk-5 col-tab-8 col-mob-4">
      <div data-aos="fade-right" data-aos-duration="500">
        <h3 class="item__title">BIF + others - Divisionsforeningen</h3>
        <div class="item__image-container">
          <div class="item__image-container__image">
            <img class="img-responsive" src="~/assets/img/divi.png" alt />
          </div>
          <a target="_blank" href="https://brondby.com/"></a>
        </div>
      </div>
    </div>
    <div class="col-desk-1 col-tab-0"></div>


    <div class="col-desk-1 col-tab-0"></div>
    <div class="item col-desk-5 col-tab-8 col-mob-4">
      <div data-aos="fade-right" data-aos-duration="500">
        <h3 class="item__title">Oplev app</h3>
        <div class="item__image-container">
          <div class="item__image-container__image">
            <img class="img-responsive" src="~/assets/img/oplev.png" alt />
          </div>
          <a target="_blank" href="https://apps.apple.com/dk/app/oplev/id1518556638"></a>
        </div>
      </div>
    </div>
    <div class="item col-desk-5 col-tab-8 col-mob-4">
      <div data-aos="fade-right" data-aos-duration="500">
        <h3 class="item__title">Accord.dk</h3>
        <div class="item__image-container">
          <div class="item__image-container__image">
            <img class="img-responsive" src="~/assets/img/accord.png" alt />
          </div>
          <a target="_blank" href="https://accord.dk/"></a>
        </div>
      </div>
    </div>
    <div class="col-desk-1 col-tab-0"></div>
    <div class="col-desk-1 col-tab-0"></div>
    <div class="item col-desk-5 col-tab-8 col-mob-4">
      <div data-aos="fade-right" data-aos-duration="500">
        <h3 class="item__title">Scanomat.com</h3>
        <div class="item__image-container">
          <div class="item__image-container__image">
            <img class="img-responsive" src="~/assets/img/scanomat.png" alt />
          </div>
          <a target="_blank" href="https://Scanomat.com/"></a>
        </div>
      </div>
    </div>
    <div class="item col-desk-5 col-tab-8 col-mob-4">
      <div data-aos="fade-right" data-aos-duration="500">
        <h3 class="item__title">Tribetakeaway.com</h3>
        <div class="item__image-container">
          <div class="item__image-container__image">
            <img class="img-responsive" src="~/assets/img/tribe.png" alt />
          </div>
          <a target="_blank" href="https://app.tribetakeaway.com/"></a>
        </div>
      </div>
    </div>
    <div class="col-desk-1 col-tab-0"></div>
    <div class="col-desk-1 col-tab-0"></div>
    <div class="item col-desk-5 col-tab-8 col-mob-4">
      <div data-aos="fade-right" data-aos-duration="500">
        <h3 class="item__title">Kontainer.com</h3>
        <div class="item__image-container">
          <div class="item__image-container__image">
            <img class="img-responsive" src="~/assets/img/kontainer2.png" alt />
          </div>
          <a target="_blank" href="https://www.kontainer.com"></a>
        </div>
      </div>
    </div>
    <div class="item col-desk-5 col-tab-8 col-mob-4">
      <div data-aos="fade-right" data-aos-duration="500">
        <h3 class="item__title">Genbyg.dk</h3>
        <div class="item__image-container">
          <div class="item__image-container__image">
            <img class="img-responsive" src="~/assets/img/genbyg2.png" alt />
          </div>
          <a target="_blank" href="https://www.genbyg.dk"></a>
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
      border-radius: 15px;

      img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        object-position: top;
        inset: 0;
      }
    }
  }

  &__title {
    font-weight: 300;
    opacity: 80%;
    letter-spacing: normal;
    transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;

    #{$hover} & {
      opacity: 0.5;
    }
  }
}
</style>
