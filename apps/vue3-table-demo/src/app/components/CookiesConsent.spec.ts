import { mount } from "@vue/test-utils";
import { expect, test, vitest } from "vitest";
import CookiesConsent from "./CookiesConsent.vue";

vitest.mock("vue-i18n", () => ({
  useI18n: () => ({
    t: () => "Cookies"
  })
}));

test("shows cookie text", () => {
  expect(CookiesConsent).toBeTruthy();
  const wrapper = mount(CookiesConsent);
  expect(wrapper.text()).toContain("Cookies");
});
