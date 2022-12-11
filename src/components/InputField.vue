<template>
  <input
    @input="safeInput"
    :class="[styleSize, styleColor]"
    :type="typeField"
    :value="value"
    :checked="checked"
  />
  <label>{{ text }}</label>
</template>

<script>
export default {
  name: "input-field",
  emits: ["newTodo"],
  props: {
    text: {
      default: "Add your Todo",
      type: String,
    },
    typeField: {
      default: "radio",
    },
    color: {
      type: String,
      default: "1",
    },
    size: {
      type: String,
      default: "1",
    },
    value: {
      type: String,
    },
    checked: {
      default: false,
    },
  },

  computed: {
    styleColor() {
      return `field-color-${this.color}`;
    },
    styleSize() {
      return `field-size-${this.size}`;
    },
  },
  methods: {
    safeInput(event) {
      let typedText = event.target.value;
      this.$emit("newTodo", typedText);
    },
  },
};
</script>

<style scoped>
.field-color-1 {
  border: 3px solid red;
  margin: 8px;
}

.field-color-2 {
  border: 3px solid blue;
  margin: 8px;
}

.field-color-3 {
  border: 3px solid green;
  margin: 8px;
}
.field-size-1 {
  padding: 2px;
}
.field-size-2 {
  padding: 15px;
}
.field-size-3 {
  padding: 30px;
}
.field-size-4 {
  padding: 50px;
}
</style>
