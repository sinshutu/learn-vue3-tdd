import { shallowMount } from "@vue/test-utils";
import TodoItem from "@/components/TodoItem.vue";

describe("TodoItem.vue", () => {
  it("Todoを表示する", () => {
    const text = "todo";
    const wrapper = shallowMount(TodoItem, {
      // propsDataを設定することで、TodoItemのpropsへ値を渡せます
      propsData: { id: 1, text, checked: false }
    });
    expect(wrapper.find("span.item").text()).toBe(text);
    // :checked の値が設定できるコンポーネントであることを確かめます
    expect(wrapper.find("input:checked").exists()).toBe(false);
  });
  it("クリックイベントをemitする", () => {
    const id = 1;
    const text = "todo";
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        id: id,
        text,
        checked: false
      }
    });
    // クリックイベントを発生させます
    wrapper.find("input[type='checkbox']").trigger("click");
    expect(wrapper.emitted("toggleChecked")[0][0]).toBe(id);
  });
});
