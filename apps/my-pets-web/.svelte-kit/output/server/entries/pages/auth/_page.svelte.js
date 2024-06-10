import { s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, i as add_attribute, v as validate_component, a as each, m as missing_component, e as escape } from "../../../chunks/ssr.js";
import { C as Column } from "../../../chunks/Column.js";
import { L as LL } from "../../../chunks/i18n-svelte.js";
import { H as Heading } from "../../../chunks/Heading.js";
import "../../../chunks/appwrite.js";
import { F as FullPageLoading } from "../../../chunks/FullPageLoading.js";
import { I as Icon } from "../../../chunks/Icon.js";
/* empty css                                                     */import { R as Row } from "../../../chunks/Row.js";
import "../../../chunks/index4.js";
import { twMerge } from "tailwind-merge";
import { P as Padding } from "../../../chunks/Padding.js";
import { B as Button } from "../../../chunks/Button.js";
const IconDiscord = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${add_attribute("class", className, 0)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"><path fill="#8c9eff" d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path></svg>`;
});
const IconFacebook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${add_attribute("class", className, 0)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path></svg>`;
});
const IconGithub = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${add_attribute("class", className, 0)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 64 64"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path></svg>`;
});
const IconGoogle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${add_attribute("class", className, 0)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>`;
});
const SignUpViaSocialMedia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isLoading = false } = $$props;
  const socials = [
    { key: "facebook", icon: IconFacebook },
    { key: "google", icon: IconGoogle },
    { key: "discord", icon: IconDiscord },
    { key: "github", icon: IconGithub }
  ];
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  return `${isLoading ? `${validate_component(FullPageLoading, "FullPageLoading").$$render($$result, {}, {}, {})}` : `${validate_component(Row, "Row").$$render(
    $$result,
    {
      class: "gap-10 items-center justify-center dark:bg-gray-200 rounded-xl w-auto"
    },
    {},
    {
      default: () => {
        return `${each(socials, ({ icon, key }) => {
          return `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              disableDefaultDarkMode: true,
              class: twMerge("w-14")
            },
            {},
            {
              default: () => {
                return `${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} `;
              }
            }
          )}`;
        })}`;
      }
    }
  )}`}`;
});
const ButtonLinkToDeveloperPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $LL, $$unsubscribe_LL;
  $$unsubscribe_LL = subscribe(LL, (value) => $LL = value);
  $$unsubscribe_LL();
  return `${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "https://otaprokopec.cz",
      color: "green"
    },
    {},
    {
      default: () => {
        return `${escape($LL.component.ButtonLinkToDeveloperPage.label())}`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $LL, $$unsubscribe_LL;
  $$unsubscribe_LL = subscribe(LL, (value) => $LL = value);
  $$unsubscribe_LL();
  return `${validate_component(Column, "Column").$$render(
    $$result,
    {
      class: "flex justify-center items-center w-full h-auto"
    },
    {},
    {
      default: () => {
        return `${validate_component(Padding, "Padding").$$render($$result, { padding: "16px" }, {}, {
          default: () => {
            return `${validate_component(Heading, "Heading").$$render($$result, { class: "text-xl text-center", tag: "h1" }, {}, {
              default: () => {
                return `${escape($LL.page.signIn.welcome())}`;
              }
            })}`;
          }
        })} ${validate_component(SignUpViaSocialMedia, "SignUpViaSocialMedia").$$render($$result, {}, {}, {})} ${validate_component(ButtonLinkToDeveloperPage, "ButtonLinkToDeveloperPage").$$render($$result, {}, {}, {})}`;
      }
    }
  )}`;
});
export {
  Page as default
};
