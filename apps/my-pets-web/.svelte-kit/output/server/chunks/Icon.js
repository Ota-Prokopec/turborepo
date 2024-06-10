import { b as null_to_empty } from "./utils.js";
import { c as create_ssr_component, e as escape, v as validate_component } from "./ssr.js";
import { twMerge } from "tailwind-merge";
import { A as Avatar } from "./Avatar2.js";
const Icon_svelte_svelte_type_style_lang = "";
const css = {
  code: "i.svelte-v60zul,i.svelte-v60zul::before{font-size:100%;display:flex;align-items:center;justify-content:center}.outlineOnly.svelte-v60zul{color:white;text-shadow:-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000}",
  map: null
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = null } = $$props;
  let { outlineOnly = false } = $$props;
  let { disabled = false } = $$props;
  let { disableDefaultDarkMode = false } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.outlineOnly === void 0 && $$bindings.outlineOnly && outlineOnly !== void 0)
    $$bindings.outlineOnly(outlineOnly);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.disableDefaultDarkMode === void 0 && $$bindings.disableDefaultDarkMode && disableDefaultDarkMode !== void 0)
    $$bindings.disableDefaultDarkMode(disableDefaultDarkMode);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  $$result.css.add(css);
  return ` <button ${disabled ? "disabled" : ""} class="${escape(null_to_empty(twMerge("w-min h-min flex justify-center items-center", !disableDefaultDarkMode && "dark:text-white text-black fill-black dark:fill-white", className)), true) + " svelte-v60zul"}">${typeof icon === "string" && icon.startsWith("http") ? `${validate_component(Avatar, "Avatar").$$render($$result, { src: icon, size: "md" }, {}, {})}` : `${typeof icon === "string" ? `<i class="${[
    escape(null_to_empty(twMerge(icon, "flex justify-self-start")), true) + " svelte-v60zul",
    outlineOnly ? "outlineOnly" : ""
  ].join(" ").trim()}"></i>` : ``}`} ${slots.default ? slots.default({}) : ``} </button>`;
});
export {
  Icon as I
};
