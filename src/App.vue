<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="wrapper">
    <InputField
      @newTodo="addTest"
      size="1"
      :value="value"
      color="1"
      typeField="text"
    />

    <AddButton @addTodo="addSomething" />
  </div>
  <div>
    <ul v-for="{ description, id } of todos" :key="id">
      <li><CheckBox @checking="doTest" />{{ description }}</li>
    </ul>
  </div>
</template>

<script>
import InputField from "./components/InputField.vue";
export default {
  name: "App",
  components: { InputField },
  data() {
    return {
      value: "",
      addTodos: { description: "", done: false, id: undefined },
      todos: [
        {
          description: "first todo",
          done: false,
          id: 1,
        },
      ],
    };
  },
  methods: {
    addSomething() {
      this.todos.push(this.addTodos);
      this.value = "";
      this.addTodos = { description: "", done: false, id: undefined };
    },
    addTest(typedText) {
      if (typedText.length > 0) {
        this.value = typedText;
        this.addTodos.description = typedText;
      }
    },
    checking(event) {
      console.log(event);
    },
    doTest(event) {
      let checkedTodo = event.path[1].innerText;
      let checkedStatus = event.target.checked;
      this.todos.forEach((todo) => {
        if (todo.description === checkedTodo) {
          todo.done = checkedStatus;
        }
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: rgb(24, 22, 28);
}
</style>
