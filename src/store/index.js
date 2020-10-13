import Vue from 'vue'
import Vuex from 'vuex'
import user from "./user";

import { auth } from "../firebase";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    checkAuth({ commit }){
      auth.onAuthStateChanged(function (user){
        if (user){
          commit("setUser",{
            uid: user.uid,     // << Just the bits we need
            email: user.email,
            displayName: user.displayName,
          });
        }else{
          commit("setUser", null);

        }

      })
    }
  },
  modules: {
    user
  }
})

export default store;

store.dispatch("checkAuth");
