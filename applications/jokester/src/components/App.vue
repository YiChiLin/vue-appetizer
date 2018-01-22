<template>
  <div id="app">
      <h3>Got jokes?</h3>
      <button class="btn btn-primary" @click="initJokes"> Add Ten jokes</button>
      <button class="btn btn-primary" @click="addJoke"> Add A joke</button>
      <br>
      <span v-for="(type, index) in jokeTypes" :key="index">
        <input 
          type="checkbox" 
          :value="type" 
          v-model="checkedTypes"
          checked
        >
        <label>{{type}}</label>&nbsp;
      </span>
      <br>
      <div class="col-md-12">
        <Joke 
         v-for="(joke,index) in $store.state.jokes"
         v-show="checkedTypes.includes(joke.type)"
         v-bind:key="index"
         :joke="joke"
         :index="index"
        />
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './Joke.vue'

export default {
  data(){
    return {
      jokeTypes:['general','kock-knock','programming'],
      checkedTypes:['general','kock-knock','programming']
    }
  },
  methods: mapActions([
    'initJokes',
    'addJoke'
  ]),
  components:{
    Joke
  }
}
</script>
