<template>
  <article class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
            <template v-if="!isLogin">
                <h1 class="title hast-text-centered">Login</h1>
                <form @submit.prevent="doLogin">
                  <div class="field">
                      <label>Email</label>
                      <div class="control">
                        <input
                          v-model="userData.email"
                          class="input"
                          type="email"
                          placeholder="e.g jlopez@gmail.com"
                          required
                        >
                      </div>
                  </div>
                  <div class="field">
                      <label>Password</label>
                      <div class="control">
                        <input
                          v-model="userData.password"
                          class="input"
                          type="password"
                          required
                        >
                      </div>
                  </div>
                  <div class="field is-grouped is-grouped-centered">
                    <!-- <p class="control">
                      <button
                          v-if="!this.$store.state.user.user"
                          @click="doLogin"
                          class="button">
                          Login with Google
                      </button>
                    </p> -->
                    <p class="control">
                      <button
                        class="button is-link"
                        type="submit"
                        :class="{ 'is-loading': isLoading }"
                      >
                      Login
                    </button>
                    </p>
                  </div>
                  <a href="#" @click="isLogin = true">Don't have an account? </a>
                </form>
                <!-- End form -->
            </template>
            <!-- End template -->
            <template v-if="isLogin">
              <h1 class="title has-text-centered">Register</h1>
              <form @submit.prevent="doRegister">
                <div class="field">
                    <label>Name</label>
                    <div class="control">
                      <input
                        v-model="userData.name"
                        class="input"
                        type="text"
                        placeholder="J López"
                        required
                      >
                    </div>
                  </div>
                  <div class="field">
                      <label>Email</label>
                      <div class="control">
                        <input
                          v-model="userData.email"
                          class="input"
                          type="email"
                          placeholder="e.g jlopez@gmail.com"
                          required
                        >
                      </div>
                  </div>
                  <div class="field">
                      <label>Password</label>
                      <div class="control">
                        <input
                          v-model="userData.password"
                          class="input"
                          type="password"
                          required
                        >
                      </div>
                  </div>
                  <div class="field is-grouped is-grouped-centered">
                    <!--<p class="control">
                      <button
                          v-if="!this.$store.state.user.user"
                          @click="doLogin"
                          class="button">
                          Login with Google
                      </button>
                    </p> -->
                    <p class="control">
                      <button
                        class="button is-link"
                        type="submit"
                        :class="{ 'is-loading': isLoading }"
                      >
                        Register
                      </button>
                    </p>
                  </div>
                  <a href="#" @click="isLogin = false">Want to login? </a>
              </form>
              <!-- End form -->
            </template>
            <!-- End template -->
        </div>
        <!-- End column -->
      </div>
      <!-- End columns -->
    </div>
    <!-- End container -->
  </article>
</template>

<script>

export default {
  name: "AuthView",
  data() {
    return {
      isLoading: false,
      isLogin: false,
      userData: {
        name: "",
        email:"",
        password:""
      }
    }
  },
  methods: {
    async doLogin(){
      this.isLoading = true;
      try{
        await this.$store.dispatch("doLogin",{
          email: this.userData.email,
          password: this.userData.password
        });
        console.log("Logged in");
        this.$toast.success("Logged in");
        this.$router.push({ name: "Home"});
      }catch(error){
        console.log(error.message);
      }
      finally{
        this.isLoading = false;
      }
    },
    async doRegister(){
      this.isLoading = true;
      try{
        await this.$store.dispatch("doRegister",{
          name: this.userData.name,
          email: this.userData.email,
          password: this.userData.password
        });
        console.log("Account created in");
        this.$toast.success("Account created in");
        this.$router.push({ name: "Home"});
      }catch(error){
        console.log(error.message);
      }
      finally{
        this.isLoading = false;
      }
    }
  }
}
</script>
