import { c as create_ssr_component, h as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
const Padding = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { padding } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${add_attribute("style", `padding: ${padding}`, 0)}${add_attribute("class", className, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Padding, "Padding").$$render($$result, { padding: "4px" }, {}, {})}`;
});
export {
  Layout as default
};
