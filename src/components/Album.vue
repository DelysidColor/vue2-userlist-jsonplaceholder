<template>
  <div v-if="album">
    <h4>Title:</h4>
    <p>{{ album.title }}</p>

    <carousel
      :scrollPerPage="true"
      :perPageCustom="[
        [480, 2],
        [768, 3],
      ]">
      <slide v-for="(photo, index) in album.photos.slice(0, 5)" :key="index">
        <img :src="photo.thumbnailUrl" alt="Album Photo" /> </slide
    ></carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style lang="scss" scoped>
.VueCarousel {
  margin-bottom: 30px;

  .VueCarousel-slide {
    margin: 3px;

    img {
      max-width: 120px;
      height: auto;
      border-radius: 8px;
      width: 100%;
    }
  }
}
</style>
