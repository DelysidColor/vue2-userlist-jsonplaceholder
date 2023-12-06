<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/userslist">Users List</router-link>
      <router-link
        v-if="currentUser"
        :to="{ name: 'profile', params: { id: currentUser.id } }"
        >Current User Profile</router-link
      >
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
  },
};
</script>

<style lang="scss">
* {
  font-family: "Rubik", sans-serif;
  padding: 0;
  margin: 0;
}

nav {
  display: flex;
  justify-content: center;
  padding: 4px;
  height: 30px;
  border-bottom: 1px solid rgb(239, 239, 239);

  a {
    color: black;
    margin-right: 5px;
    padding: 5px 8px;
    border: 1px solid black;
    border-radius: 6px;
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    background-color: lightgrey;
  }
}

.active {
  color: white;
  background-color: grey;
}
</style>
