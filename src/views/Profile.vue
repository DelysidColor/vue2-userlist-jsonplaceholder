<template>
  <div class="profile" v-if="currentUserPosts && currentUserAlbums">
    <div class="user-card">
      <UserCard />
    </div>
    <div class="user-data">
      <div v-if="pageType === 'posts' || pageType === undefined">
        <h2>Posts:</h2>
        <Post v-for="post in currentUserPosts" :key="post.id" :post="post" />
      </div>
      <div
        v-if="pageType === 'albums' || pageType === undefined"
        class="profile-albums">
        <h2>Albums:</h2>
        <Album
          v-for="album in currentUserAlbums"
          :key="album.id"
          :album="album" />
      </div>
    </div>
  </div>
  <div class="loader" v-else>Loading...</div>
</template>

<script>
import Album from "@/components/Album.vue";
import UserCard from "@/components/UserCard.vue";
import Post from "@/components/Post.vue";

export default {
  components: {
    Album,
    UserCard,
    Post,
  },
  methods: {
    async loadData(userId) {
      await this.$store.dispatch("loadData", userId);
    },
  },
  computed: {
    currentUserPosts() {
      return this.$store.state.currentUserPosts;
    },
    currentUserAlbums() {
      return this.$store.state.currentUserAlbums;
    },
    userId() {
      return Number(this.$route.params.id);
    },
    pageType() {
      return this.$route.query.type;
    },
  },
  async created() {
    await this.loadData(this.userId);
  },
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 20px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;

  .user-data {
    display: flex;
    justify-content: center;
    div {
      width: auto;
      margin: 10px;
    }
  }

  h2 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
.loader {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
</style>
