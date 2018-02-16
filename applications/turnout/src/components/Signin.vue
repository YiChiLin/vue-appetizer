<template>
  <div class="">
    <h3>Sign In</h3>
    <div class="form-group">
      <input type="text" placeholder="email" id="form-control" v-model="email">
      <input type="password" placeholder="password" id="form-control" v-model="password">
      <button class="btn btn-primary">Sign In</button>
      <br>
      <br>
      <p>{{error.message}}</p>
    </div>
    <router-link to="/signup">Not a user? Sign up</router-link>
  </div>
</template>

<script>
  import { firebaseApp } from '../firebaseApp'

  export default {
    data() {
      return {
        email: '',
        password: '',
        error: {
          message: ''
        }
      }
    },
    methods: {
      signIn() {
        firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch(error=>{
            this.error = error;
        })
      }
    }
  }

</script>
