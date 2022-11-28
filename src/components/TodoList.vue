<template>
  <div>
    <AddTodo @addTodo="addTodo" />
    <TodoItem
      v-for="todo in todos"
      :id="todo.id"
      :text="todo.text"
      :checked="todo.checked"
      :key="todo.id"
    />
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo.vue";
import TodoItem from "@/components/TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    AddTodo,
    TodoItem
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(text) {
      this.todos.push({
        id: this.todos.length + 1,
        text: text,
        checked: false
      });
    }
  }
};
</script>
