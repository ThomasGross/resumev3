<template>
  <div class="companies-section grid">
    <label class="title col-desk-12">As seen in</label>
    <div class="company-list col-desk-12">
      <div class="company-list__item">
        <img class="img" src="img/media_bikeexif.png" alt />
      </div>
      <div class="company-list__item">
        <img class="img" src="img/media_pipeburn.png" alt />
      </div>
      <div class="company-list__item">
        <img class="img" src="img/Greasy.png" alt />
      </div>
      <div class="company-list__item">
        <img class="img" src="img/media_chopcult.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
.companies-section {
  .title {
    color: $color-grey;
    margin-bottom: 37px;
  }

  .company-list {
    display: flex;
    flex-wrap: wrap;

    &__item {
      width: auto;
      margin: 0 0 50px 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &:first-child {
        margin: 0 0 50px 0;
      }

      img {
        height: 32px;
      }
    }
  }
}
</style>
