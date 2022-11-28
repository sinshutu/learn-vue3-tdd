import { shallowMount } from "@vue/test-utils";
import AddTodo from "@/components/AddTodo.vue";
import TodoList from "@/components/TodoList.vue";

describe("TodoList.vue", () => {
  it("TodoAddを持っている", () => {
    const wrapper = shallowMount(TodoList);
    expect(wrapper.findComponent(AddTodo).exists()).toBe(true);
  });
  it("Todoを追加する", () => {
    const localThis = {
      todos: []
    };
    TodoList.methods.addTodo.call(localThis, "todo");
    TodoList.methods.addTodo.call(localThis, "todo2");
    expect(localThis.todos[0]).toEqual({
      id: 1,
      text: "todo",
      checked: false
    });
    expect(localThis.todos[1]).toEqual({
      id: 2,
      text: "todo2",
      checked: false
    });
  });
});
