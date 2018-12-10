import Vue from "vue";
import Hello from "./components/Hello.vue";

new Vue({
  el: "#app",
  template: `
    <div>
        <div>Hello {{name}}!</div>
        <Hello :name="name" :initialEnthusiasm="5" />
    </div>`,
  data: {
    name: "World",
    age: "20"
  },
  components: {
    Hello
  }
});
