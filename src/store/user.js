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
    async doLogin({commit},{email, password}){
      await auth.signInWithEmailAndPassword(email, password);
      console.log(auth.currentUser);
      commit("setUser", {
        "uid": auth.currentUser.uid,     // << Just the bits we need
        "email": auth.currentUser.email,
        "displayName": auth.currentUser.displayName,
      });
    },
    async doRegister({commit}, {name, email, password}){
      await auth.createUserWithEmailAndPassword(email, password);
      const user = auth.currentUser;
      await user.updateProfile({
        displayName: name
      })
      commit("setUser", {
        "uid": auth.currentUser.uid,     // << Just the bits we need
        "email": auth.currentUser.email,
        "displayName": auth.currentUser.displayName,
      });
    },
    async doLogout({commit}){
      await auth.signOut();
      commit("setUser", null);
    }
  },
  modules: {
  }
};
