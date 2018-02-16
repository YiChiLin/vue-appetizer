<template>
    <div class="">
        <h3>Sign Up</h3>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="email" v-model="email">
            <input type="password" class="form-control" placeholder="password" v-model="password">
            <button class="btn btn-primary" @click="signUp">Sign Up</button>
             <br>
            <br>
            <p>{{error.message}}</p>
        </div>
        <router-link to="/signin">Already a user? Sign In</router-link>
    </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
  data(){
      return {
          email:'',
          password:'',
          error:{
              message:''
          }
      }
  },
  methods:{
      signUp(){
          firebaseApp.auth().createUserWithEmailAndPassword(this.email,this.password)
          .catch( error => {
              this.error = error
          })
      }
  }
}
</script>
