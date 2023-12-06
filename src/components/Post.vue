<template>
  <div class="posts">
    <div>
      <p><span>Title:</span> {{ post.title }}</p>
      <p><span>Body:</span> {{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.posts {
  margin-top: 5px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 5px 8px;
  text-align: center;
  max-width: 450px;

  span {
    font-weight: 600;
  }

  p {
    margin-bottom: 5px;
  }
}
</style>
