<template>
  <div>
    <input type="checkbox" :checked="checked" @click="toggleChecked" />
    <span class="item">
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    id: {
      type: Number,
      require: true
    },
    text: {
      type: String,
      require: true
    },
    checked: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    toggleChecked() {
      this.$emit("toggleChecked", this.id);
    }
  }
};
</script>
