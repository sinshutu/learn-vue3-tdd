import { shallowMount } from "@vue/test-utils";
import AddTodo from "@/components/AddTodo.vue";

describe("AddTodo.vue", () => {
  it("input textを持っている", () => {
    // AddTodoをマウントしてwrapperへ渡します
    const wrapper = shallowMount(AddTodo);
    // wrapperの中にaddクラスを持つinputタグを探して、存在するかどうかを確かめます
    expect(wrapper.find("input.add").exists()).toBe(true);
  });
  it("追加ボタンを押してemitする", () => {
    const text = "todo";
    const wrapper = shallowMount(AddTodo);
    // setDataを使うことで、addTodoのdataへ値をセットできます
    wrapper.setData({ text });
    // setDataを使うことで、wrapperでEnterキーを押すイベントを発生させます
    wrapper.find("input.add").trigger("keyup.enter");

    // emitted の配列には
    // emitted("Event Name")[emitが呼ばれた順番][引数]
    // のような内容が入っているので以下のように取り出して、入力したtextと同じ内容が渡されていることを確認します
    expect(wrapper.emitted("addTodo")[0][0]).toBe(text);
  });
  it("emitされたときinputが空になる", () => {
    const text = "todo";
    const wrapper = shallowMount(AddTodo);
    wrapper.setData({ text });
    wrapper.find("input.add").trigger("keyup.enter");
    // wrapperのdataはvmを経由して参照することができます
    expect(wrapper.vm.text).toBe("");
  });
});
