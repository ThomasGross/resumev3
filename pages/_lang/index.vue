<template>
  <div class="index">
    <Header />
    <kinesis-container class="index">
      <section class="section">
        <Hero />
      </section>
    </kinesis-container>
    <text-image-section></text-image-section>
    <list-section></list-section>
    <education-section></education-section>
    <tech-section></tech-section>
    <projects-section></projects-section>
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
    ProjectsSection
  }
};
</script>

<style lang="scss" scoped>
.section {
  min-height: 100vh;
  margin: 100px 0 0;

  &:first-child {
    margin: 0;
  }
}
</style>
