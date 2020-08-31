<template>
  <div class="index">
    <Header />
    <kinesis-container>
      <div class="section">
        <Hero />
      </div>
    </kinesis-container>
    <div class="section">
      <text-image-section></text-image-section>
    </div>
    <div class="section">
      <list-section></list-section>
    </div>
    <div class="section">
      <education-section></education-section>
    </div>
    <div class="section">
      <tech-section></tech-section>
    </div>
    <div class="section">
      <projects-section></projects-section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Hero from "~/components/molecules/Hero";
import Header from "~/components/molecules/Header";
import Footer from "~/components/molecules/Footer";
import Profile from "~/components/molecules/Profile";
import TextImageSection from "~/components/molecules/TextImageSection";
import ListSection from "~/components/molecules/ListSection";
import EducationSection from "~/components/molecules/EducationSection";
import TechSection from "~/components/molecules/TechSection";
import ProjectsSection from "~/components/molecules/ProjectsSection";

export default {
  head() {
    return { title: this.$t("home.title") };
  },
  components: {
    Hero,
    Header,
    Profile,
    Footer,
    TextImageSection,
    ListSection,
    EducationSection,
    TechSection,
    ProjectsSection,
  },
};
</script>

<style lang="scss" scoped>
.section {
  // min-height: 100vh;
  margin-bottom: 200px;

  @include media($bp-mobile) {
    margin-bottom: 100px;
  }

  &:first-child {
    margin-bottom: 100px;

    @include media($bp-mobile) {
      margin-bottom: 50px;
    }
  }
}
</style>
