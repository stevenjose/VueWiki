<template>
  <div class="home">
    <section class="section">
      <div class="container has-text-centered">
        <button v-if="!user" @click="doLogin" class="button">Login with Google</button>
        <template v-else>
          <h1 class="title has-text-text-centered"> Hi {{ user.displayName }} </h1>
          <button @click="doLogout" class="button">Logout with Google</button>
        </template>
      </div>
    </section>
  </div>
</template>

<script>

import {fb, auth } from "../firebase";

export default {
  name: 'Home',
  data(){
    return {
       user: null
    };
  },
  components: {
  },
  methods: {
    async doLogin(){
      try{
        const provider = new fb.auth.GoogleAuthProvider();
        const user = await auth.signInWithPopup(provider);
        this.user = user.user;
      }catch(err){
        console.error(err.message);
      }
    },
    async doLogout(){
      try{
        const logout = await auth.signOut();
        this.user = null;
        console.log(logout);
      }catch(err){
        console.log(err.message);
      }
    }
  }
}
</script>
