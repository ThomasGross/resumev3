<template>
  <div>
    <Header />
    <kinesis-container class="index">
      <section class="section">
        <Hero />
      </section>
    </kinesis-container>
    <section class="section">
      <text-image></text-image>
    </section>
    <Footer />
  </div>
</template>

<script>
import Hero from "~/components/molecules/Hero";
import Header from "~/components/molecules/Header";
import Footer from "~/components/molecules/Footer";
import Profile from "~/components/molecules/Profile";
import ImageTextSection from "~/components/molecules/ImageTextSection";
import TextImage from "~/components/molecules/TextImage";

export default {
  head() {
    return { title: this.$t("home.title") };
  },
  components: {
    Hero,
    Header,
    Profile,
    Footer,
    ImageTextSection,
    TextImage,
  },
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
