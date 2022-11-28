<template>
  <div>
    <input class="add" v-model="text" @keyup.enter="submit" />
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    submit() {
      this.$emit("addTodo", this.text);
      this.text = "";
    }
  }
};
</script>
