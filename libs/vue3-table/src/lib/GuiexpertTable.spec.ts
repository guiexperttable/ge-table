import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import GuiexpertTable from "./GuiexpertTable.vue";

test("shows text", () => {
  expect(GuiexpertTable).toBeTruthy();
  const wrapper = mount(GuiexpertTable);
  expect(wrapper.text()).toContain("GuiexpertTable");
});
