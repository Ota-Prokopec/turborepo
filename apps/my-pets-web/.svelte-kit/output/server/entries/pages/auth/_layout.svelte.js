import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { A as Avatar_1 } from "../../../chunks/Avatar.js";
import { C as Center } from "../../../chunks/Center.js";
import { P as Padding } from "../../../chunks/Padding.js";
import { H as Heading } from "../../../chunks/Heading.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Padding, "Padding").$$render($$result, { class: "h-full w-full", padding: "4px" }, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render($$result, { class: "text-3xl text-center", tag: "h1" }, {}, {
        default: () => {
          return `My pets`;
        }
      })} ${validate_component(Center, "Center").$$render($$result, { class: "p-10" }, {}, {
        default: () => {
          return `${validate_component(Avatar_1, "Avatar").$$render($$result, { class: "", size: "xl", src: "/icon.png" }, {}, {})}`;
        }
      })} ${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
