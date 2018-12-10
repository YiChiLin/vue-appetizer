<template>
  <div>
    <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
    <button v-on:click="decrement">-</button>
    <button v-on:click="increment">+</button>
    <p>{{number}}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["name", "initialEnthusiasm"],
  data() {
    return {
      enthusiasm: this.initialEnthusiasm,
      number: 0
    };
  },
  methods: {
    increment() {
      this.enthusiasm++;
      this.number++;
    },
    decrement() {
      if (this.enthusiasm > 1) {
        this.enthusiasm--;
      }
    }
  },
  computed: {
    exclamationMarks(): string {
      return Array(this.enthusiasm + 1).join("!");
    }
  }
});
</script>

<style>
.greeting {
  font-size: 20px;
}
</style>