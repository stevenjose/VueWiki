import { auth } from "../firebase.js";
export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, user){
      state.user = user;
    }
  },
  actions: {
    async doLogin({commit}, {email, password}){
      await auth.signInWithEmailAndPassword(email, password);
      commit("setUset", auth.currentUser);
    },
    async doRegister({commit}, {name, email, password}){
      await auth.createUserWithEmailAndPassword(email, password);
      const user = auth.currentUser;
      await user.updateProfile({
        displayName: name
      })
      commit("setUser", user);
    },
    async doLogout({commit}){
      await auth.signOut();
      commit("setUser", null);
    }
  },
  modules: {
  }
};
