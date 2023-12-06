import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Users: [],
    Posts: [],
    Albums: [],
    Photos: [],
    currentUser: null,
    currentUserPosts: null,
    currentUserAlbums: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.Users = users;
    },
    setPosts(state, posts) {
      state.Posts = posts;
    },
    setPhotos(state, photos) {
      state.Photos = photos;
    },
    setAlbums(state, albums) {
      state.Albums = albums;

      state.Albums.forEach((album) => {
        album.photos = state.Photos.filter(
          (photo) => photo.albumId === album.id
        );
      });
    },
    setCurrentUserData(state, userId) {
      const user = state.Users.find((u) => u.id === userId);
      state.currentUser = user;
      state.currentUserPosts = state.Posts.filter(
        (post) => post.userId === userId
      );
      state.currentUserAlbums = state.Albums.filter(
        (album) => album.userId === userId
      );
    },
  },
  actions: {
    async getUsers({ commit, state }) {
      if (!state.Users.length) {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          );

          const users = response.data;
          commit("setUsers", users);
        } catch (error) {
          console.log(error);
        }
      }
    },
    async getPosts({ commit, state }) {
      if (!state.Posts.length) {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );

          const posts = response.data;
          commit("setPosts", posts);
        } catch (error) {
          console.log(error);
        }
      }
    },
    async getAlbums({ commit, state }) {
      if (!state.Albums.length) {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/albums"
          );

          const albums = response.data;
          commit("setAlbums", albums);
        } catch (error) {
          console.log(error);
        }
      }
    },
    async getPhotos({ commit, state }) {
      if (!state.Photos.length) {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/photos"
          );

          const photos = response.data;
          commit("setPhotos", photos);
        } catch (error) {
          console.log(error);
        }
      }
    },
    async loadData({ commit, dispatch }, userId) {
      try {
        await dispatch("getUsers");
        await dispatch("getPhotos");
        await dispatch("getPosts");
        await dispatch("getAlbums");

        commit("setCurrentUserData", userId);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
