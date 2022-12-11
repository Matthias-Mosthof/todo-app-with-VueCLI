<template><input @change="trigger" :type="type" /></template>

<script>
export default {
  name: "check-box",
  props: {
    type: {
      default: "checkbox",
    },
  },
  methods: {
    trigger(event) {
      this.$emit("checking", event);
    },
  },
};
</script>

<style scoped></style>
