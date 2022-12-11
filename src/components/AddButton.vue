<template>
  <button @click="trigger" class="styling">{{ text }}</button>
</template>
<script>
export default {
  name: "button-add",
  props: {
    text: {
      default: "Add",
    },
  },
  methods: {
    trigger() {
      this.$emit("addTodo");
    },
  },
};
</script>

<style scoped>
.styling {
  margin-inline: 20px;
  width: 6rem;
  height: 2rem;
  color: darkblue;
  font-size: 20px;
}
</style>
