<template>
  <div class="user-info" v-if="currentUser">
    <h3>{{ currentUser.name }}</h3>
    <div class="information">
      <p>
        <span class="info-title">City:</span> {{ currentUser.address.city }}
      </p>
      <p><span class="info-title">E-mail:</span>{{ currentUser.email }}</p>
      <p><span class="info-title">Website:</span> {{ currentUser.website }}</p>
      <p>
        <span class="info-title">Company:</span>
        {{ currentUser.company.name }}
      </p>
    </div>
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

<style lang="scss" scoped>
.user-info {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid black;
  box-shadow: 0 0 10px lightgrey;
  text-align: center;

  .information {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  .info-title {
    font-weight: 600;
    margin-right: 10px;
  }
}
</style>
