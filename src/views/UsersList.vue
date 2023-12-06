<template>
  <div v-if="users" class="users-list">
    <ul>
      <li v-for="user in users" :key="user.id">
        <div class="user-list-item">
          <h3>
            {{ user.name }}
          </h3>
          <div class="user-list-buttons">
            <button @click="selectUser(user)">Profile</button>
            <button @click="showPosts(user)">Posts</button>
            <button @click="showAlbums(user)">Albums</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.Users;
    },
  },
  methods: {
    selectUser(user) {
      this.$router.push({
        name: "profile",
        params: { id: Number(user.id) },
      });
    },
    showPosts(user) {
      this.$router.push({
        name: "profile",
        params: { id: Number(user.id) },
        query: { type: "posts" },
      });
    },
    showAlbums(user) {
      this.$router.push({
        name: "profile",
        params: { id: Number(user.id) },
        query: { type: "albums" },
      });
    },
  },
  created() {
    this.$store.dispatch("getUsers");
  },
};
</script>

<style lang="scss" scoped>
.users-list {
  display: flex;
  justify-content: center;
  margin-top: 30px;

  ul {
    list-style: none;
  }

  li {
    padding: 5px 8px;
    margin-bottom: 3px;
    border: 1px solid black;
    border-radius: 8px;
  }

  .user-list-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      margin-bottom: 5px;
    }
  }

  .user-list-buttons {
    button {
      transition: 0.15s;
      margin: 1px 3px;
      padding: 1px 4px;
      border: 1px solid lightgrey;
      border-radius: 5px;
      background-color: rgb(252, 252, 252);
    }

    button:hover {
      transform: scale(1.1);
      background-color: rgb(223, 246, 216);
    }
  }
}
</style>
