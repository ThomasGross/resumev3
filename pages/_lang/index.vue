<template>
  <div class="index">
    <Header />
    <kinesis-container class="index">
      <section class="section">
        <Hero />
      </section>
    </kinesis-container>
    <section class="section">
      <text-image-section></text-image-section>
    </section>
    <section class="section">
      <list-section></list-section>
    </section>
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
    ListSection
  }
};
</script>

<style lang="scss" scoped>
.section {
  margin: 50px 0 0;

  &:first-child {
    margin: 0;
  }
}
</style>
