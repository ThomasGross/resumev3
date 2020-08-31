<template>
  <div class="tech-section grid" id="tech">
    <div class="col-desk-5 col-tab-0 col-mob-0" />
    <div class="col-desk-5 col-tab-8 col-mob-4">
      <h1 data-aos="fade-right" data-aos-duration="500">{{ $t("tech.title") }}</h1>
    </div>
    <div class="col-desk-5 col-tab-0" />
    <div
      class="list__item col-desk-2 col-tab-4 col-mob-2"
      data-aos="fade-right"
      data-aos-duration="500"
    >
      <h3>
        <span>
          {{ $t("tech.lang") }}
          <i class="fa fa-code"></i>
        </span>
      </h3>
      <h3>HTML</h3>
      <h3>CSS</h3>
      <h3>SASS</h3>
      <h3>Javascript</h3>
      <h3>PHP</h3>
      <h3>Swift</h3>
      <h3>C#</h3>
      <h3>UML</h3>
      <h3>SQL</h3>
      <h3>{{ $t("tech.danish") }}</h3>
      <h3>{{ $t("tech.english") }}</h3>
    </div>
    <div
      class="list__item col-desk-2 col-tab-4 col-mob-2"
      data-aos="fade-right"
      data-aos-duration="500"
    >
      <h3>
        <span>
          Frameworks
          <i class="fa fa-bolt"></i>
        </span>
      </h3>
      <h3>Vue</h3>
      <h3>Nuxt</h3>
      <h3>Angular</h3>
      <h3>React</h3>
      <h3>jQuery</h3>
      <h3>Bootstrap</h3>
      <h3>ASP.NET</h3>
      <h3>SQL</h3>
      <h3>Entity Framework</h3>
      <h3>Umbraco</h3>
      <h3>Wordpress</h3>
    </div>
    <div
      class="list__item col-desk-2 col-tab-4 col-mob-2"
      data-aos="fade-right"
      data-aos-duration="500"
    >
      <h3>
        <span>
          Software & tools
          <i class="fa fa-laptop"></i>
        </span>
      </h3>
      <h3>OS X</h3>
      <h3>GIT</h3>
      <h3>MongoDB</h3>
      <h3>node.js</h3>
      <h3>npm</h3>
      <h3>yarn</h3>
      <h3>Adobe Xd</h3>
      <h3>Sketch</h3>
      <h3>InVision</h3>
      <h3>Jira</h3>
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
.tech-section {
  .list {
    &__item {
      margin-bottom: 30px;
    }
  }

  h3 {
    span {
      color: var(--color-darken);
    }
  }
}
</style>
