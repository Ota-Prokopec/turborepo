import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_object, d as escape_attribute_value, f as subscribe, g as escape, v as validate_component, s as setContext, o as onDestroy, h as add_attribute } from "../../chunks/ssr.js";
import { n as navigating } from "../../chunks/stores.js";
import { w as writable } from "../../chunks/index.js";
import * as lodash from "lodash";
import { twMerge } from "tailwind-merge";
import { i as is_void, T as Text, I as Icon } from "../../chunks/Icon.js";
var getFallbackProxy = () => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new Proxy(Object.assign(() => "", {}), {
    get: (_target, key) => key === "length" ? 0 : getFallbackProxy()
  })
);
var removeEmptyValues = (object) => Object.fromEntries(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Object.entries(object).map(([key, value]) => key !== "i" && value && value != "0" && [key, value]).filter(Boolean)
);
var trimAllValues = (part) => Object.fromEntries(
  Object.keys(part).map((key) => {
    const val = part[key];
    return [
      key,
      Array.isArray(val) ? val.map((v) => v?.trim()) : val === !!val ? val : val?.trim()
    ];
  })
);
var parseArgumentPart = (text) => {
  const [keyPart = "", ...formatterKeys] = text.split("|");
  const [keyWithoutType = "", type] = keyPart.split(":");
  const [key, isOptional] = keyWithoutType.split("?");
  return { k: key, i: type, n: isOptional === "", f: formatterKeys };
};
var isBasicPluralPart = (part) => !!(part.o || part.r);
var parsePluralPart = (content, lastAccessor) => {
  let [key, values] = content.split(":");
  if (!values) {
    values = key;
    key = lastAccessor;
  }
  const entries = values.split("|");
  const [zero, one, two, few, many, rest] = entries;
  const nrOfEntries = entries.filter((entry) => entry !== void 0).length;
  if (nrOfEntries === 1) {
    return { k: key, r: zero };
  }
  if (nrOfEntries === 2) {
    return { k: key, o: zero, r: one };
  }
  if (nrOfEntries === 3) {
    return { k: key, z: zero, o: one, r: two };
  }
  return { k: key, z: zero, o: one, t: two, f: few, m: many, r: rest };
};
var REGEX_SWITCH_CASE = /^\{.*\}$/;
var parseCases = (text) => Object.fromEntries(
  removeOuterBrackets(text).split(",").map((part) => part.split(":")).reduce(
    (accumulator, entry) => {
      if (entry.length === 2) {
        return [...accumulator, entry.map((entry2) => entry2.trim())];
      }
      accumulator[accumulator.length - 1][1] += "," + entry[0];
      return accumulator;
    },
    []
  )
);
var REGEX_BRACKETS_SPLIT = /(\{(?:[^{}]+|\{(?:[^{}]+)*\})*\})/g;
var removeOuterBrackets = (text) => text.substring(1, text.length - 1);
var parseRawText = (rawText, optimize = true, firstKey = "", lastKey = "") => rawText.split(REGEX_BRACKETS_SPLIT).map((part) => {
  if (!part.match(REGEX_BRACKETS_SPLIT)) {
    return part;
  }
  const content = removeOuterBrackets(part);
  if (content.startsWith("{")) {
    return parsePluralPart(removeOuterBrackets(content), lastKey);
  }
  const parsedPart = parseArgumentPart(content);
  lastKey = parsedPart.k || lastKey;
  !firstKey && (firstKey = lastKey);
  return parsedPart;
}).map((part) => {
  if (typeof part === "string")
    return part;
  if (!part.k)
    part.k = firstKey || "0";
  const trimmed = trimAllValues(part);
  return optimize ? removeEmptyValues(trimmed) : trimmed;
});
var applyFormatters = (formatters, formatterKeys, initialValue) => formatterKeys.reduce(
  (value, formatterKey) => (formatterKey.match(REGEX_SWITCH_CASE) ? ((cases) => cases[value] ?? cases["*"])(parseCases(formatterKey)) : formatters[formatterKey]?.(value)) ?? value,
  initialValue
);
var getPlural = (pluralRules, { z, o, t, f, m, r }, value) => {
  switch (z && value == 0 ? "zero" : pluralRules.select(value)) {
    case "zero":
      return z;
    case "one":
      return o;
    case "two":
      return t;
    case "few":
      return f ?? r;
    case "many":
      return m ?? r;
    default:
      return r;
  }
};
var REGEX_PLURAL_VALUE_INJECTION = /\?\?/g;
var applyArguments = (textParts, pluralRules, formatters, args) => textParts.map((part) => {
  if (typeof part === "string") {
    return part;
  }
  const { k: key = "0", f: formatterKeys = [] } = part;
  const value = args[key];
  if (isBasicPluralPart(part)) {
    return ((typeof value === "boolean" ? value ? part.o : part.r : getPlural(pluralRules, part, value)) || "").replace(REGEX_PLURAL_VALUE_INJECTION, value);
  }
  const formattedValue = formatterKeys.length ? applyFormatters(formatters, formatterKeys, value) : value;
  return ("" + (formattedValue ?? "")).trim();
}).join("");
var translate = (textParts, pluralRules, formatters, args) => {
  const firstArg = args[0];
  const isObject = firstArg && typeof firstArg === "object" && firstArg.constructor === Object;
  const transformedArgs = args.length === 1 && isObject ? firstArg : args;
  return applyArguments(textParts, pluralRules, formatters, transformedArgs);
};
var getPartsFromString = (cache, text) => cache[text] || (cache[text] = parseRawText(text));
var getTranslateInstance = (locale2, formatters) => {
  const cache = {};
  const pluralRules = new Intl.PluralRules(locale2);
  return (text, ...args) => translate(getPartsFromString(cache, text), pluralRules, formatters, args);
};
function i18nObject(locale2, translations, formatters = {}) {
  return createProxy(translations, getTranslateInstance(locale2, formatters));
}
var wrap = (proxyObject = {}, translateFn) => typeof proxyObject === "string" ? translateFn.bind(null, proxyObject) : Object.assign(
  Object.defineProperty(() => "", "name", { writable: true }),
  proxyObject
);
var createProxy = (proxyObject, translateFn) => new Proxy(wrap(proxyObject, translateFn), {
  get: (target, key) => {
    if (key === Symbol.iterator)
      return [][Symbol.iterator].bind(Object.values(target).map((entry) => wrap(entry, translateFn)));
    return createProxy(target[key], translateFn);
  }
});
var initI18nSvelte = (translations, formatters = {}) => {
  const _locale = writable();
  const _LL = writable(getFallbackProxy());
  const locale2 = readonly(_locale);
  const LL2 = new Proxy({}, {
    get: (_target, key) => key === "subscribe" ? _LL.subscribe : _LL[key]
  });
  const setLocale2 = (newLocale) => {
    _locale.set(newLocale);
    _LL.set(i18nObject(newLocale, translations[newLocale], formatters[newLocale]));
  };
  return {
    locale: locale2,
    LL: LL2,
    setLocale: setLocale2
  };
};
function readonly(store) {
  return {
    // @ts-ignore
    subscribe: store.subscribe.bind(store)
  };
}
const loadedLocales = {};
const loadedFormatters = {};
const { locale, LL, setLocale } = initI18nSvelte(loadedLocales, loadedFormatters);
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "color", "customSize"]);
  let { tag = "h1" } = $$props;
  let { color = "text-gray-900 dark:text-white" } = $$props;
  let { customSize = "" } = $$props;
  const textSizes = {
    h1: "text-5xl font-extrabold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-bold",
    h4: "text-2xl font-bold",
    h5: "text-xl font-bold",
    h6: "text-lg font-bold"
  };
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.customSize === void 0 && $$bindings.customSize && customSize !== void 0)
    $$bindings.customSize(customSize);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object($$restProps),
        {
          class: escape_attribute_value(twMerge(customSize ? customSize : textSizes[tag], color, "w-full", $$props.class))
        }
      ],
      {}
    )}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)} `;
});
const parseLocalStorageValue = (value) => {
  if (value === "undefined")
    return void 0;
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
};
const data = {};
const lsStore = writable(data);
lsStore.subscribe((storeValue) => {
  return;
});
new Proxy(data, {
  get: (target, prop, receiver) => {
    const item = localStorage.getItem(prop.toString());
    const res = item ? parseLocalStorageValue(item) : item;
    return res;
  },
  set: (target, prop, value, receiver) => {
    lsStore.update((currentData) => ({ ...currentData, [prop.toString()]: value }));
    return true;
  },
  deleteProperty: (target, propKey) => {
    Reflect.deleteProperty(target, propKey.toString());
    lsStore.update((currentData) => ({ ...lodash.omit(currentData, propKey.toString()) }));
    return false;
  }
});
const CookiesAlert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_LL;
  $$unsubscribe_LL = subscribe(LL, (value) => value);
  $$unsubscribe_LL();
  return `${``}`;
});
const css = {
  code: ".wrapper.svelte-7wj78d{width:var(--size);height:var(--size);display:flex;justify-content:center;align-items:center;line-height:0;box-sizing:border-box}.inner.svelte-7wj78d{transform:scale(calc(var(--floatSize) / 52))}.ball-container.svelte-7wj78d{animation:svelte-7wj78d-ballTwo var(--duration) infinite;width:44px;height:44px;flex-shrink:0;position:relative}.single-ball.svelte-7wj78d{width:44px;height:44px;position:absolute}.ball.svelte-7wj78d{width:20px;height:20px;border-radius:50%;position:absolute;animation:svelte-7wj78d-ballOne var(--duration) infinite ease}.pause-animation.svelte-7wj78d{animation-play-state:paused}.ball-top-left.svelte-7wj78d{background-color:var(--ballTopLeftColor);top:0;left:0}.ball-top-right.svelte-7wj78d{background-color:var(--ballTopRightColor);top:0;left:24px}.ball-bottom-left.svelte-7wj78d{background-color:var(--ballBottomLeftColor);top:24px;left:0}.ball-bottom-right.svelte-7wj78d{background-color:var(--ballBottomRightColor);top:24px;left:24px}@keyframes svelte-7wj78d-ballOne{0%{position:absolute}50%{top:12px;left:12px;position:absolute;opacity:0.5}100%{position:absolute}}@keyframes svelte-7wj78d-ballTwo{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(360deg) scale(1.3)}100%{transform:rotate(720deg) scale(1)}}",
  map: null
};
const Circle3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "60" } = $$props;
  let { unit = "px" } = $$props;
  let { pause = false } = $$props;
  let { ballTopLeft = "#FF3E00" } = $$props;
  let { ballTopRight = "#F8B334" } = $$props;
  let { ballBottomLeft = "#40B3FF" } = $$props;
  let { ballBottomRight = "#676778" } = $$props;
  let { duration = "1.5s" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  if ($$props.ballTopLeft === void 0 && $$bindings.ballTopLeft && ballTopLeft !== void 0)
    $$bindings.ballTopLeft(ballTopLeft);
  if ($$props.ballTopRight === void 0 && $$bindings.ballTopRight && ballTopRight !== void 0)
    $$bindings.ballTopRight(ballTopRight);
  if ($$props.ballBottomLeft === void 0 && $$bindings.ballBottomLeft && ballBottomLeft !== void 0)
    $$bindings.ballBottomLeft(ballBottomLeft);
  if ($$props.ballBottomRight === void 0 && $$bindings.ballBottomRight && ballBottomRight !== void 0)
    $$bindings.ballBottomRight(ballBottomRight);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  $$result.css.add(css);
  return `<div class="wrapper svelte-7wj78d" style="${"--size: " + escape(size, true) + escape(unit, true) + "; --floatSize: " + escape(size, true) + "; --ballTopLeftColor: " + escape(ballTopLeft, true) + "; --ballTopRightColor: " + escape(ballTopRight, true) + "; --ballBottomLeftColor: " + escape(ballBottomLeft, true) + "; --ballBottomRightColor: " + escape(ballBottomRight, true) + "; --duration: " + escape(duration, true) + ";"}"><div class="inner svelte-7wj78d"><div class="${["ball-container svelte-7wj78d", pause ? "pause-animation" : ""].join(" ").trim()}"><div class="single-ball svelte-7wj78d"><div class="${["ball ball-top-left svelte-7wj78d", pause ? "pause-animation" : ""].join(" ").trim()}" data-svelte-h="svelte-srzctx"> </div></div> <div class="contener_mixte"><div class="${["ball ball-top-right svelte-7wj78d", pause ? "pause-animation" : ""].join(" ").trim()}" data-svelte-h="svelte-6iyjws"> </div></div> <div class="contener_mixte"><div class="${["ball ball-bottom-left svelte-7wj78d", pause ? "pause-animation" : ""].join(" ").trim()}" data-svelte-h="svelte-9h2qed"> </div></div> <div class="contener_mixte"><div class="${["ball ball-bottom-right svelte-7wj78d", pause ? "pause-animation" : ""].join(" ").trim()}" data-svelte-h="svelte-yk0z5u"> </div></div></div></div> </div>`;
});
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "basic" } = $$props;
  let { class: className = "text-blue-600" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${type === "basic" ? `<div class="${escape(className, true) + " animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent rounded-full"}" role="status" aria-label="loading"><span class="sr-only" data-svelte-h="svelte-1wtojot">Loading...</span></div>` : `${type === "circle3" ? `${validate_component(Circle3, "Circle3").$$render($$result, {}, {}, {})}` : ``}`}`;
});
const FullPageLoading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="fixed w-full h-full flex items-center justify-center">${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}</div>`;
});
class Subscribable {
  constructor() {
    this.listeners = [];
  }
  subscribe(listener) {
    const callback = listener || (() => void 0);
    this.listeners.push(callback);
    this.onSubscribe();
    return () => {
      this.listeners = this.listeners.filter((x) => x !== callback);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.length > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}
const isServer = typeof window === "undefined";
function noop() {
  return void 0;
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
function ensureQueryKeyArray(value) {
  return Array.isArray(value) ? value : [value];
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function parseQueryArgs(arg1, arg2, arg3) {
  if (!isQueryKey(arg1)) {
    return arg1;
  }
  if (typeof arg2 === "function") {
    return Object.assign(Object.assign({}, arg3), { queryKey: arg1, queryFn: arg2 });
  }
  return Object.assign(Object.assign({}, arg2), { queryKey: arg1 });
}
function parseFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [Object.assign(Object.assign({}, arg2), { queryKey: arg1 }), arg3] : [arg1 || {}, arg2];
}
function mapQueryStatusFilter(active, inactive) {
  if (active === true && inactive === true || active == null && inactive == null) {
    return "all";
  } else if (active === false && inactive === false) {
    return "none";
  } else {
    const isActive = active !== null && active !== void 0 ? active : !inactive;
    return isActive ? "active" : "inactive";
  }
}
function matchQuery(filters, query) {
  const { active, exact, fetching, inactive, predicate, queryKey, stale } = filters;
  if (isQueryKey(queryKey)) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }
  const queryStatusFilter = mapQueryStatusFilter(active, inactive);
  if (queryStatusFilter === "none") {
    return false;
  } else if (queryStatusFilter !== "all") {
    const isActive = query.isActive();
    if (queryStatusFilter === "active" && !isActive) {
      return false;
    }
    if (queryStatusFilter === "inactive" && isActive) {
      return false;
    }
  }
  if (typeof stale === "boolean" && query.isStale() !== stale) {
    return false;
  }
  if (typeof fetching === "boolean" && query.isFetching() !== fetching) {
    return false;
  }
  if (predicate && !predicate(query)) {
    return false;
  }
  return true;
}
function matchMutation(filters, mutation) {
  const { exact, fetching, predicate, mutationKey } = filters;
  if (isQueryKey(mutationKey)) {
    if (!mutation.options.mutationKey) {
      return false;
    }
    if (exact) {
      if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }
  if (typeof fetching === "boolean" && mutation.state.status === "loading" !== fetching) {
    return false;
  }
  if (predicate && !predicate(mutation)) {
    return false;
  }
  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  const hashFn = (options === null || options === void 0 ? void 0 : options.queryKeyHashFn) || hashQueryKey;
  return hashFn(queryKey);
}
function hashQueryKey(queryKey) {
  const asArray = ensureQueryKeyArray(queryKey);
  return stableValueHash(asArray);
}
function stableValueHash(value) {
  return JSON.stringify(value, (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
    result[key] = val[key];
    return result;
  }, {}) : val);
}
function partialMatchKey(a, b) {
  return partialDeepEqual(ensureQueryKeyArray(a), ensureQueryKeyArray(b));
}
function partialDeepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    return !Object.keys(b).some((key) => !partialDeepEqual(a[key], b[key]));
  }
  return false;
}
function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }
  const array = Array.isArray(a) && Array.isArray(b);
  if (array || isPlainObject(a) && isPlainObject(b)) {
    const aSize = array ? a.length : Object.keys(a).length;
    const bItems = array ? b : Object.keys(b);
    const bSize = bItems.length;
    const copy = array ? [] : {};
    let equalItems = 0;
    for (let i = 0; i < bSize; i++) {
      const key = array ? i : bItems[i];
      copy[key] = replaceEqualDeep(a[key], b[key]);
      if (copy[key] === a[key]) {
        equalItems++;
      }
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
  }
  return b;
}
function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (typeof ctor === "undefined") {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function isQueryKey(value) {
  return typeof value === "string" || Array.isArray(value);
}
function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
function scheduleMicrotask(callback) {
  Promise.resolve().then(callback).catch((error) => setTimeout(() => {
    throw error;
  }));
}
function getAbortController() {
  if (typeof AbortController === "function") {
    return new AbortController();
  }
}
class FocusManager extends Subscribable {
  constructor() {
    super();
    this.setup = (onFocus) => {
      if (!isServer && (window === null || window === void 0 ? void 0 : window.addEventListener)) {
        const listener = () => onFocus();
        window.addEventListener("visibilitychange", listener, false);
        window.addEventListener("focus", listener, false);
        return () => {
          window.removeEventListener("visibilitychange", listener);
          window.removeEventListener("focus", listener);
        };
      }
    };
  }
  onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  }
  onUnsubscribe() {
    var _a;
    if (!this.hasListeners()) {
      (_a = this.cleanup) === null || _a === void 0 ? void 0 : _a.call(this);
      this.cleanup = void 0;
    }
  }
  setEventListener(setup) {
    var _a;
    this.setup = setup;
    (_a = this.cleanup) === null || _a === void 0 ? void 0 : _a.call(this);
    this.cleanup = setup((focused) => {
      if (typeof focused === "boolean") {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    });
  }
  setFocused(focused) {
    this.focused = focused;
    if (focused) {
      this.onFocus();
    }
  }
  onFocus() {
    this.listeners.forEach((listener) => {
      listener();
    });
  }
  isFocused() {
    if (typeof this.focused === "boolean") {
      return this.focused;
    }
    if (typeof document === "undefined") {
      return true;
    }
    return [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const focusManager = new FocusManager();
class OnlineManager extends Subscribable {
  constructor() {
    super();
    this.setup = (onOnline) => {
      if (!isServer && (window === null || window === void 0 ? void 0 : window.addEventListener)) {
        const listener = () => onOnline();
        window.addEventListener("online", listener, false);
        window.addEventListener("offline", listener, false);
        return () => {
          window.removeEventListener("online", listener);
          window.removeEventListener("offline", listener);
        };
      }
    };
  }
  onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  }
  onUnsubscribe() {
    var _a;
    if (!this.hasListeners()) {
      (_a = this.cleanup) === null || _a === void 0 ? void 0 : _a.call(this);
      this.cleanup = void 0;
    }
  }
  setEventListener(setup) {
    var _a;
    this.setup = setup;
    (_a = this.cleanup) === null || _a === void 0 ? void 0 : _a.call(this);
    this.cleanup = setup((online) => {
      if (typeof online === "boolean") {
        this.setOnline(online);
      } else {
        this.onOnline();
      }
    });
  }
  setOnline(online) {
    this.online = online;
    if (online) {
      this.onOnline();
    }
  }
  onOnline() {
    this.listeners.forEach((listener) => {
      listener();
    });
  }
  isOnline() {
    if (typeof this.online === "boolean") {
      return this.online;
    }
    if (typeof navigator === "undefined" || typeof navigator.onLine === "undefined") {
      return true;
    }
    return navigator.onLine;
  }
}
const onlineManager = new OnlineManager();
function defaultRetryDelay(failureCount) {
  return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function isCancelable(value) {
  return typeof (value === null || value === void 0 ? void 0 : value.cancel) === "function";
}
class CancelledError {
  constructor(options) {
    this.revert = options === null || options === void 0 ? void 0 : options.revert;
    this.silent = options === null || options === void 0 ? void 0 : options.silent;
  }
}
function isCancelledError(value) {
  return value instanceof CancelledError;
}
class Retryer {
  constructor(config) {
    let cancelRetry = false;
    let cancelFn;
    let continueFn;
    let promiseResolve;
    let promiseReject;
    this.abort = config.abort;
    this.cancel = (cancelOptions) => cancelFn === null || cancelFn === void 0 ? void 0 : cancelFn(cancelOptions);
    this.cancelRetry = () => {
      cancelRetry = true;
    };
    this.continueRetry = () => {
      cancelRetry = false;
    };
    this.continue = () => continueFn === null || continueFn === void 0 ? void 0 : continueFn();
    this.failureCount = 0;
    this.isPaused = false;
    this.isResolved = false;
    this.isTransportCancelable = false;
    this.promise = new Promise((outerResolve, outerReject) => {
      promiseResolve = outerResolve;
      promiseReject = outerReject;
    });
    const resolve = (value) => {
      var _a;
      if (!this.isResolved) {
        this.isResolved = true;
        (_a = config.onSuccess) === null || _a === void 0 ? void 0 : _a.call(config, value);
        continueFn === null || continueFn === void 0 ? void 0 : continueFn();
        promiseResolve(value);
      }
    };
    const reject = (value) => {
      var _a;
      if (!this.isResolved) {
        this.isResolved = true;
        (_a = config.onError) === null || _a === void 0 ? void 0 : _a.call(config, value);
        continueFn === null || continueFn === void 0 ? void 0 : continueFn();
        promiseReject(value);
      }
    };
    const pause = () => {
      return new Promise((continueResolve) => {
        var _a;
        continueFn = continueResolve;
        this.isPaused = true;
        (_a = config.onPause) === null || _a === void 0 ? void 0 : _a.call(config);
      }).then(() => {
        var _a;
        continueFn = void 0;
        this.isPaused = false;
        (_a = config.onContinue) === null || _a === void 0 ? void 0 : _a.call(config);
      });
    };
    const run = () => {
      if (this.isResolved) {
        return;
      }
      let promiseOrValue;
      try {
        promiseOrValue = config.fn();
      } catch (error) {
        promiseOrValue = Promise.reject(error);
      }
      cancelFn = (cancelOptions) => {
        var _a;
        if (!this.isResolved) {
          reject(new CancelledError(cancelOptions));
          (_a = this.abort) === null || _a === void 0 ? void 0 : _a.call(this);
          if (isCancelable(promiseOrValue)) {
            try {
              promiseOrValue.cancel();
            } catch (_b) {
            }
          }
        }
      };
      this.isTransportCancelable = isCancelable(promiseOrValue);
      Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
        var _a, _b, _c;
        if (this.isResolved) {
          return;
        }
        const retry = (_a = config.retry) !== null && _a !== void 0 ? _a : 3;
        const retryDelay = (_b = config.retryDelay) !== null && _b !== void 0 ? _b : defaultRetryDelay;
        const delay = typeof retryDelay === "function" ? retryDelay(this.failureCount, error) : retryDelay;
        const shouldRetry = retry === true || typeof retry === "number" && this.failureCount < retry || typeof retry === "function" && retry(this.failureCount, error);
        if (cancelRetry || !shouldRetry) {
          reject(error);
          return;
        }
        this.failureCount++;
        (_c = config.onFail) === null || _c === void 0 ? void 0 : _c.call(config, this.failureCount, error);
        sleep(delay).then(() => {
          if (!focusManager.isFocused() || !onlineManager.isOnline()) {
            return pause();
          }
        }).then(() => {
          if (cancelRetry) {
            reject(error);
          } else {
            run();
          }
        });
      });
    };
    run();
  }
}
class NotifyManager {
  constructor() {
    this.queue = [];
    this.transactions = 0;
    this.notifyFn = (callback) => {
      callback();
    };
    this.batchNotifyFn = (callback) => {
      callback();
    };
  }
  batch(callback) {
    let result;
    this.transactions++;
    try {
      result = callback();
    } finally {
      this.transactions--;
      if (!this.transactions) {
        this.flush();
      }
    }
    return result;
  }
  schedule(callback) {
    if (this.transactions) {
      this.queue.push(callback);
    } else {
      scheduleMicrotask(() => {
        this.notifyFn(callback);
      });
    }
  }
  /**
   * All calls to the wrapped function will be batched.
   */
  batchCalls(callback) {
    return (...args) => {
      this.schedule(() => {
        callback(...args);
      });
    };
  }
  flush() {
    const queue = this.queue;
    this.queue = [];
    if (queue.length) {
      scheduleMicrotask(() => {
        this.batchNotifyFn(() => {
          queue.forEach((callback) => {
            this.notifyFn(callback);
          });
        });
      });
    }
  }
  /**
   * Use this method to set a custom notify function.
   * This can be used to for example wrap notifications with `React.act` while running tests.
   */
  setNotifyFunction(fn) {
    this.notifyFn = fn;
  }
  /**
   * Use this method to set a custom function to batch notifications together into a single tick.
   * By default React Query will use the batch function provided by ReactDOM or React Native.
   */
  setBatchNotifyFunction(fn) {
    this.batchNotifyFn = fn;
  }
}
const notifyManager = new NotifyManager();
let logger = console;
function getLogger() {
  return logger;
}
class Query {
  constructor(config) {
    this.abortSignalConsumed = false;
    this.hadObservers = false;
    this.defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.cache = config.cache;
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.initialState = config.state || this.getDefaultState(this.options);
    this.state = this.initialState;
    this.meta = config.meta;
    this.scheduleGc();
  }
  setOptions(options) {
    var _a;
    this.options = Object.assign(Object.assign({}, this.defaultOptions), options);
    this.meta = options === null || options === void 0 ? void 0 : options.meta;
    this.cacheTime = Math.max(this.cacheTime || 0, (_a = this.options.cacheTime) !== null && _a !== void 0 ? _a : 5 * 60 * 1e3);
  }
  setDefaultOptions(options) {
    this.defaultOptions = options;
  }
  scheduleGc() {
    this.clearGcTimeout();
    if (isValidTimeout(this.cacheTime)) {
      this.gcTimeout = setTimeout(() => {
        this.optionalRemove();
      }, this.cacheTime);
    }
  }
  clearGcTimeout() {
    clearTimeout(this.gcTimeout);
    this.gcTimeout = void 0;
  }
  optionalRemove() {
    if (!this.observers.length) {
      if (this.state.isFetching) {
        if (this.hadObservers) {
          this.scheduleGc();
        }
      } else {
        this.cache.remove(this);
      }
    }
  }
  setData(updater, options) {
    var _a, _b;
    const prevData = this.state.data;
    let data2 = functionalUpdate(updater, prevData);
    if ((_b = (_a = this.options).isDataEqual) === null || _b === void 0 ? void 0 : _b.call(_a, prevData, data2)) {
      data2 = prevData;
    } else if (this.options.structuralSharing !== false) {
      data2 = replaceEqualDeep(prevData, data2);
    }
    this.dispatch({
      data: data2,
      type: "success",
      dataUpdatedAt: options === null || options === void 0 ? void 0 : options.updatedAt
    });
    return data2;
  }
  setState(state, setStateOptions) {
    this.dispatch({ type: "setState", state, setStateOptions });
  }
  cancel(options) {
    var _a;
    const promise = this.promise;
    (_a = this.retryer) === null || _a === void 0 ? void 0 : _a.cancel(options);
    return promise ? promise.then(noop).catch(noop) : Promise.resolve();
  }
  destroy() {
    this.clearGcTimeout();
    this.cancel({ silent: true });
  }
  reset() {
    this.destroy();
    this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((observer) => observer.options.enabled !== false);
  }
  isFetching() {
    return this.state.isFetching;
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((observer) => observer.getCurrentResult().isStale);
  }
  isStaleByTime(staleTime = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !timeUntilStale(this.state.dataUpdatedAt, staleTime);
  }
  onFocus() {
    var _a;
    const observer = this.observers.find((x) => x.shouldFetchOnWindowFocus());
    if (observer) {
      observer.refetch();
    }
    (_a = this.retryer) === null || _a === void 0 ? void 0 : _a.continue();
  }
  onOnline() {
    var _a;
    const observer = this.observers.find((x) => x.shouldFetchOnReconnect());
    if (observer) {
      observer.refetch();
    }
    (_a = this.retryer) === null || _a === void 0 ? void 0 : _a.continue();
  }
  addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
      this.hadObservers = true;
      this.clearGcTimeout();
      this.cache.notify({ type: "observerAdded", query: this, observer });
    }
  }
  removeObserver(observer) {
    if (this.observers.indexOf(observer) !== -1) {
      this.observers = this.observers.filter((x) => x !== observer);
      if (!this.observers.length) {
        if (this.retryer) {
          if (this.retryer.isTransportCancelable || this.abortSignalConsumed) {
            this.retryer.cancel({ revert: true });
          } else {
            this.retryer.cancelRetry();
          }
        }
        if (this.cacheTime) {
          this.scheduleGc();
        } else {
          this.cache.remove(this);
        }
      }
      this.cache.notify({ type: "observerRemoved", query: this, observer });
    }
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    if (!this.state.isInvalidated) {
      this.dispatch({ type: "invalidate" });
    }
  }
  fetch(options, fetchOptions) {
    var _a, _b, _c, _d, _e, _f;
    if (this.state.isFetching) {
      if (this.state.dataUpdatedAt && (fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.cancelRefetch)) {
        this.cancel({ silent: true });
      } else if (this.promise) {
        (_a = this.retryer) === null || _a === void 0 ? void 0 : _a.continueRetry();
        return this.promise;
      }
    }
    if (options) {
      this.setOptions(options);
    }
    if (!this.options.queryFn) {
      const observer = this.observers.find((x) => x.options.queryFn);
      if (observer) {
        this.setOptions(observer.options);
      }
    }
    const queryKey = ensureQueryKeyArray(this.queryKey);
    const abortController = getAbortController();
    const queryFnContext = {
      queryKey,
      pageParam: void 0,
      meta: this.meta
    };
    Object.defineProperty(queryFnContext, "signal", {
      enumerable: true,
      get: () => {
        if (abortController) {
          this.abortSignalConsumed = true;
          return abortController.signal;
        }
        return void 0;
      }
    });
    const fetchFn = () => {
      if (!this.options.queryFn) {
        return Promise.reject("Missing queryFn");
      }
      this.abortSignalConsumed = false;
      return this.options.queryFn(queryFnContext);
    };
    const context = {
      fetchOptions,
      options: this.options,
      queryKey,
      state: this.state,
      fetchFn,
      meta: this.meta
    };
    if ((_b = this.options.behavior) === null || _b === void 0 ? void 0 : _b.onFetch) {
      (_c = this.options.behavior) === null || _c === void 0 ? void 0 : _c.onFetch(context);
    }
    this.revertState = this.state;
    if (!this.state.isFetching || this.state.fetchMeta !== ((_d = context.fetchOptions) === null || _d === void 0 ? void 0 : _d.meta)) {
      this.dispatch({ type: "fetch", meta: (_e = context.fetchOptions) === null || _e === void 0 ? void 0 : _e.meta });
    }
    this.retryer = new Retryer({
      fn: context.fetchFn,
      abort: (_f = abortController === null || abortController === void 0 ? void 0 : abortController.abort) === null || _f === void 0 ? void 0 : _f.bind(abortController),
      onSuccess: (data2) => {
        var _a2, _b2;
        this.setData(data2);
        (_b2 = (_a2 = this.cache.config).onSuccess) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, data2, this);
        if (this.cacheTime === 0) {
          this.optionalRemove();
        }
      },
      onError: (error) => {
        var _a2, _b2;
        if (!(isCancelledError(error) && error.silent)) {
          this.dispatch({
            type: "error",
            error
          });
        }
        if (!isCancelledError(error)) {
          (_b2 = (_a2 = this.cache.config).onError) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, error, this);
          getLogger().error(error);
        }
        if (this.cacheTime === 0) {
          this.optionalRemove();
        }
      },
      onFail: () => {
        this.dispatch({ type: "failed" });
      },
      onPause: () => {
        this.dispatch({ type: "pause" });
      },
      onContinue: () => {
        this.dispatch({ type: "continue" });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay
    });
    this.promise = this.retryer.promise;
    return this.promise;
  }
  dispatch(action) {
    this.state = this.reducer(this.state, action);
    notifyManager.batch(() => {
      this.observers.forEach((observer) => {
        observer.onQueryUpdate(action);
      });
      this.cache.notify({ query: this, type: "queryUpdated", action });
    });
  }
  getDefaultState(options) {
    const data2 = typeof options.initialData === "function" ? options.initialData() : options.initialData;
    const hasInitialData = typeof options.initialData !== "undefined";
    const initialDataUpdatedAt = hasInitialData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    const hasData = typeof data2 !== "undefined";
    return {
      data: data2,
      dataUpdateCount: 0,
      dataUpdatedAt: hasData ? initialDataUpdatedAt !== null && initialDataUpdatedAt !== void 0 ? initialDataUpdatedAt : Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchMeta: null,
      isFetching: false,
      isInvalidated: false,
      isPaused: false,
      status: hasData ? "success" : "idle"
    };
  }
  reducer(state, action) {
    var _a, _b;
    switch (action.type) {
      case "failed":
        return Object.assign(Object.assign({}, state), { fetchFailureCount: state.fetchFailureCount + 1 });
      case "pause":
        return Object.assign(Object.assign({}, state), { isPaused: true });
      case "continue":
        return Object.assign(Object.assign({}, state), { isPaused: false });
      case "fetch":
        return Object.assign(Object.assign(Object.assign({}, state), { fetchFailureCount: 0, fetchMeta: (_a = action.meta) !== null && _a !== void 0 ? _a : null, isFetching: true, isPaused: false }), !state.dataUpdatedAt && {
          error: null,
          status: "loading"
        });
      case "success":
        return Object.assign(Object.assign({}, state), { data: action.data, dataUpdateCount: state.dataUpdateCount + 1, dataUpdatedAt: (_b = action.dataUpdatedAt) !== null && _b !== void 0 ? _b : Date.now(), error: null, fetchFailureCount: 0, isFetching: false, isInvalidated: false, isPaused: false, status: "success" });
      case "error":
        const error = action.error;
        if (isCancelledError(error) && error.revert && this.revertState) {
          return Object.assign({}, this.revertState);
        }
        return Object.assign(Object.assign({}, state), { error, errorUpdateCount: state.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: state.fetchFailureCount + 1, isFetching: false, isPaused: false, status: "error" });
      case "invalidate":
        return Object.assign(Object.assign({}, state), { isInvalidated: true });
      case "setState":
        return Object.assign(Object.assign({}, state), action.state);
      default:
        return state;
    }
  }
}
class QueryCache extends Subscribable {
  constructor(config) {
    super();
    this.config = config || {};
    this.queries = [];
    this.queriesMap = {};
  }
  build(client, options, state) {
    var _a;
    const queryKey = options.queryKey;
    const queryHash = (_a = options.queryHash) !== null && _a !== void 0 ? _a : hashQueryKeyByOptions(queryKey, options);
    let query = this.get(queryHash);
    if (!query) {
      query = new Query({
        cache: this,
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey),
        meta: options.meta
      });
      this.add(query);
    }
    return query;
  }
  add(query) {
    if (!this.queriesMap[query.queryHash]) {
      this.queriesMap[query.queryHash] = query;
      this.queries.push(query);
      this.notify({
        type: "queryAdded",
        query
      });
    }
  }
  remove(query) {
    const queryInMap = this.queriesMap[query.queryHash];
    if (queryInMap) {
      query.destroy();
      this.queries = this.queries.filter((x) => x !== query);
      if (queryInMap === query) {
        delete this.queriesMap[query.queryHash];
      }
      this.notify({ type: "queryRemoved", query });
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.queries.forEach((query) => {
        this.remove(query);
      });
    });
  }
  get(queryHash) {
    return this.queriesMap[queryHash];
  }
  getAll() {
    return this.queries;
  }
  find(arg1, arg2) {
    const [filters] = parseFilterArgs(arg1, arg2);
    if (typeof filters.exact === "undefined") {
      filters.exact = true;
    }
    return this.queries.find((query) => matchQuery(filters, query));
  }
  findAll(arg1, arg2) {
    const [filters] = parseFilterArgs(arg1, arg2);
    return Object.keys(filters).length > 0 ? this.queries.filter((query) => matchQuery(filters, query)) : this.queries;
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  onFocus() {
    notifyManager.batch(() => {
      this.queries.forEach((query) => {
        query.onFocus();
      });
    });
  }
  onOnline() {
    notifyManager.batch(() => {
      this.queries.forEach((query) => {
        query.onOnline();
      });
    });
  }
}
class Mutation {
  constructor(config) {
    this.options = Object.assign(Object.assign({}, config.defaultOptions), config.options);
    this.mutationId = config.mutationId;
    this.mutationCache = config.mutationCache;
    this.observers = [];
    this.state = config.state || getDefaultState();
    this.meta = config.meta;
  }
  setState(state) {
    this.dispatch({ type: "setState", state });
  }
  addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
    }
  }
  removeObserver(observer) {
    this.observers = this.observers.filter((x) => x !== observer);
  }
  cancel() {
    if (this.retryer) {
      this.retryer.cancel();
      return this.retryer.promise.then(noop).catch(noop);
    }
    return Promise.resolve();
  }
  continue() {
    if (this.retryer) {
      this.retryer.continue();
      return this.retryer.promise;
    }
    return this.execute();
  }
  execute() {
    let data2;
    const restored = this.state.status === "loading";
    let promise = Promise.resolve();
    if (!restored) {
      this.dispatch({ type: "loading", variables: this.options.variables });
      promise = promise.then(() => {
        var _a, _b;
        (_b = (_a = this.mutationCache.config).onMutate) === null || _b === void 0 ? void 0 : _b.call(_a, this.state.variables, this);
      }).then(() => {
        var _a, _b;
        return (_b = (_a = this.options).onMutate) === null || _b === void 0 ? void 0 : _b.call(_a, this.state.variables);
      }).then((context) => {
        if (context !== this.state.context) {
          this.dispatch({
            type: "loading",
            context,
            variables: this.state.variables
          });
        }
      });
    }
    return promise.then(() => this.executeMutation()).then((result) => {
      var _a, _b;
      data2 = result;
      (_b = (_a = this.mutationCache.config).onSuccess) === null || _b === void 0 ? void 0 : _b.call(_a, data2, this.state.variables, this.state.context, this);
    }).then(() => {
      var _a, _b;
      return (_b = (_a = this.options).onSuccess) === null || _b === void 0 ? void 0 : _b.call(_a, data2, this.state.variables, this.state.context);
    }).then(() => {
      var _a, _b;
      return (_b = (_a = this.options).onSettled) === null || _b === void 0 ? void 0 : _b.call(_a, data2, null, this.state.variables, this.state.context);
    }).then(() => {
      this.dispatch({ type: "success", data: data2 });
      return data2;
    }).catch((error) => {
      var _a, _b;
      (_b = (_a = this.mutationCache.config).onError) === null || _b === void 0 ? void 0 : _b.call(_a, error, this.state.variables, this.state.context, this);
      getLogger().error(error);
      return Promise.resolve().then(() => {
        var _a2, _b2;
        return (_b2 = (_a2 = this.options).onError) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, error, this.state.variables, this.state.context);
      }).then(() => {
        var _a2, _b2;
        return (_b2 = (_a2 = this.options).onSettled) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, void 0, error, this.state.variables, this.state.context);
      }).then(() => {
        this.dispatch({ type: "error", error });
        throw error;
      });
    });
  }
  executeMutation() {
    var _a;
    this.retryer = new Retryer({
      fn: () => {
        if (!this.options.mutationFn) {
          return Promise.reject("No mutationFn found");
        }
        return this.options.mutationFn(this.state.variables);
      },
      onFail: () => {
        this.dispatch({ type: "failed" });
      },
      onPause: () => {
        this.dispatch({ type: "pause" });
      },
      onContinue: () => {
        this.dispatch({ type: "continue" });
      },
      retry: (_a = this.options.retry) !== null && _a !== void 0 ? _a : 0,
      retryDelay: this.options.retryDelay
    });
    return this.retryer.promise;
  }
  dispatch(action) {
    this.state = reducer(this.state, action);
    notifyManager.batch(() => {
      this.observers.forEach((observer) => {
        observer.onMutationUpdate(action);
      });
      this.mutationCache.notify(this);
    });
  }
}
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: false,
    status: "idle",
    variables: void 0
  };
}
function reducer(state, action) {
  switch (action.type) {
    case "failed":
      return Object.assign(Object.assign({}, state), { failureCount: state.failureCount + 1 });
    case "pause":
      return Object.assign(Object.assign({}, state), { isPaused: true });
    case "continue":
      return Object.assign(Object.assign({}, state), { isPaused: false });
    case "loading":
      return Object.assign(Object.assign({}, state), { context: action.context, data: void 0, error: null, isPaused: false, status: "loading", variables: action.variables });
    case "success":
      return Object.assign(Object.assign({}, state), { data: action.data, error: null, status: "success", isPaused: false });
    case "error":
      return Object.assign(Object.assign({}, state), { data: void 0, error: action.error, failureCount: state.failureCount + 1, isPaused: false, status: "error" });
    case "setState":
      return Object.assign(Object.assign({}, state), action.state);
    default:
      return state;
  }
}
class MutationCache extends Subscribable {
  constructor(config) {
    super();
    this.config = config || {};
    this.mutations = [];
    this.mutationId = 0;
  }
  build(client, options, state) {
    const mutation = new Mutation({
      mutationCache: this,
      mutationId: ++this.mutationId,
      options: client.defaultMutationOptions(options),
      state,
      defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : void 0,
      meta: options.meta
    });
    this.add(mutation);
    return mutation;
  }
  add(mutation) {
    this.mutations.push(mutation);
    this.notify(mutation);
  }
  remove(mutation) {
    this.mutations = this.mutations.filter((x) => x !== mutation);
    mutation.cancel();
    this.notify(mutation);
  }
  clear() {
    notifyManager.batch(() => {
      this.mutations.forEach((mutation) => {
        this.remove(mutation);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(filters) {
    if (typeof filters.exact === "undefined") {
      filters.exact = true;
    }
    return this.mutations.find((mutation) => matchMutation(filters, mutation));
  }
  findAll(filters) {
    return this.mutations.filter((mutation) => matchMutation(filters, mutation));
  }
  notify(mutation) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(mutation);
      });
    });
  }
  onFocus() {
    this.resumePausedMutations();
  }
  onOnline() {
    this.resumePausedMutations();
  }
  resumePausedMutations() {
    const pausedMutations = this.mutations.filter((x) => x.state.isPaused);
    return notifyManager.batch(() => pausedMutations.reduce((promise, mutation) => promise.then(() => mutation.continue().catch(noop)), Promise.resolve()));
  }
}
function infiniteQueryBehavior() {
  return {
    onFetch: (context) => {
      context.fetchFn = () => {
        var _a, _b, _c, _d, _e, _f;
        const refetchPage = (_b = (_a = context.fetchOptions) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.refetchPage;
        const fetchMore = (_d = (_c = context.fetchOptions) === null || _c === void 0 ? void 0 : _c.meta) === null || _d === void 0 ? void 0 : _d.fetchMore;
        const pageParam = fetchMore === null || fetchMore === void 0 ? void 0 : fetchMore.pageParam;
        const isFetchingNextPage = (fetchMore === null || fetchMore === void 0 ? void 0 : fetchMore.direction) === "forward";
        const isFetchingPreviousPage = (fetchMore === null || fetchMore === void 0 ? void 0 : fetchMore.direction) === "backward";
        const oldPages = ((_e = context.state.data) === null || _e === void 0 ? void 0 : _e.pages) || [];
        const oldPageParams = ((_f = context.state.data) === null || _f === void 0 ? void 0 : _f.pageParams) || [];
        const abortController = getAbortController();
        const abortSignal = abortController === null || abortController === void 0 ? void 0 : abortController.signal;
        let newPageParams = oldPageParams;
        let cancelled = false;
        const queryFn = context.options.queryFn || (() => Promise.reject("Missing queryFn"));
        const buildNewPages = (pages, param, page, previous) => {
          newPageParams = previous ? [param, ...newPageParams] : [...newPageParams, param];
          return previous ? [page, ...pages] : [...pages, page];
        };
        const fetchPage = (pages, manual, param, previous) => {
          if (cancelled) {
            return Promise.reject("Cancelled");
          }
          if (typeof param === "undefined" && !manual && pages.length) {
            return Promise.resolve(pages);
          }
          const queryFnContext = {
            queryKey: context.queryKey,
            signal: abortSignal,
            pageParam: param,
            meta: context.meta
          };
          const queryFnResult = queryFn(queryFnContext);
          const promise2 = Promise.resolve(queryFnResult).then((page) => buildNewPages(pages, param, page, previous));
          if (isCancelable(queryFnResult)) {
            const promiseAsAny = promise2;
            promiseAsAny.cancel = queryFnResult.cancel;
          }
          return promise2;
        };
        let promise;
        if (!oldPages.length) {
          promise = fetchPage([]);
        } else if (isFetchingNextPage) {
          const manual = typeof pageParam !== "undefined";
          const param = manual ? pageParam : getNextPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, manual, param);
        } else if (isFetchingPreviousPage) {
          const manual = typeof pageParam !== "undefined";
          const param = manual ? pageParam : getPreviousPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, manual, param, true);
        } else {
          newPageParams = [];
          const manual = typeof context.options.getNextPageParam === "undefined";
          const shouldFetchFirstPage = refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true;
          promise = shouldFetchFirstPage ? fetchPage([], manual, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0]));
          for (let i = 1; i < oldPages.length; i++) {
            promise = promise.then((pages) => {
              const shouldFetchNextPage = refetchPage && oldPages[i] ? refetchPage(oldPages[i], i, oldPages) : true;
              if (shouldFetchNextPage) {
                const param = manual ? oldPageParams[i] : getNextPageParam(context.options, pages);
                return fetchPage(pages, manual, param);
              }
              return Promise.resolve(buildNewPages(pages, oldPageParams[i], oldPages[i]));
            });
          }
        }
        const finalPromise = promise.then((pages) => ({
          pages,
          pageParams: newPageParams
        }));
        const finalPromiseAsAny = finalPromise;
        finalPromiseAsAny.cancel = () => {
          cancelled = true;
          abortController === null || abortController === void 0 ? void 0 : abortController.abort();
          if (isCancelable(promise)) {
            promise.cancel();
          }
        };
        return finalPromise;
      };
    }
  };
}
function getNextPageParam(options, pages) {
  var _a;
  return (_a = options.getNextPageParam) === null || _a === void 0 ? void 0 : _a.call(options, pages[pages.length - 1], pages);
}
function getPreviousPageParam(options, pages) {
  var _a;
  return (_a = options.getPreviousPageParam) === null || _a === void 0 ? void 0 : _a.call(options, pages[0], pages);
}
class QueryClient {
  constructor(config = {}) {
    this.queryCache = config.queryCache || new QueryCache();
    this.mutationCache = config.mutationCache || new MutationCache();
    this.defaultOptions = config.defaultOptions || {};
    this.queryDefaults = [];
    this.mutationDefaults = [];
  }
  mount() {
    this.unsubscribeFocus = focusManager.subscribe(() => {
      if (focusManager.isFocused() && onlineManager.isOnline()) {
        this.mutationCache.onFocus();
        this.queryCache.onFocus();
      }
    });
    this.unsubscribeOnline = onlineManager.subscribe(() => {
      if (focusManager.isFocused() && onlineManager.isOnline()) {
        this.mutationCache.onOnline();
        this.queryCache.onOnline();
      }
    });
  }
  unmount() {
    var _a, _b;
    (_a = this.unsubscribeFocus) === null || _a === void 0 ? void 0 : _a.call(this);
    (_b = this.unsubscribeOnline) === null || _b === void 0 ? void 0 : _b.call(this);
  }
  isFetching(arg1, arg2) {
    const [filters] = parseFilterArgs(arg1, arg2);
    filters.fetching = true;
    return this.queryCache.findAll(filters).length;
  }
  isMutating(filters) {
    return this.mutationCache.findAll(Object.assign(Object.assign({}, filters), { fetching: true })).length;
  }
  getQueryData(queryKey, filters) {
    var _a;
    return (_a = this.queryCache.find(queryKey, filters)) === null || _a === void 0 ? void 0 : _a.state.data;
  }
  getQueriesData(queryKeyOrFilters) {
    return this.getQueryCache().findAll(queryKeyOrFilters).map(({ queryKey, state }) => {
      const data2 = state.data;
      return [queryKey, data2];
    });
  }
  setQueryData(queryKey, updater, options) {
    const parsedOptions = parseQueryArgs(queryKey);
    const defaultedOptions = this.defaultQueryOptions(parsedOptions);
    return this.queryCache.build(this, defaultedOptions).setData(updater, options);
  }
  setQueriesData(queryKeyOrFilters, updater, options) {
    return notifyManager.batch(() => this.getQueryCache().findAll(queryKeyOrFilters).map(({ queryKey }) => [
      queryKey,
      this.setQueryData(queryKey, updater, options)
    ]));
  }
  getQueryState(queryKey, filters) {
    var _a;
    return (_a = this.queryCache.find(queryKey, filters)) === null || _a === void 0 ? void 0 : _a.state;
  }
  removeQueries(arg1, arg2) {
    const [filters] = parseFilterArgs(arg1, arg2);
    const queryCache = this.queryCache;
    notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        queryCache.remove(query);
      });
    });
  }
  resetQueries(arg1, arg2, arg3) {
    const [filters, options] = parseFilterArgs(arg1, arg2, arg3);
    const queryCache = this.queryCache;
    const refetchFilters = Object.assign(Object.assign({}, filters), { active: true });
    return notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        query.reset();
      });
      return this.refetchQueries(refetchFilters, options);
    });
  }
  cancelQueries(arg1, arg2, arg3) {
    const [filters, cancelOptions = {}] = parseFilterArgs(arg1, arg2, arg3);
    if (typeof cancelOptions.revert === "undefined") {
      cancelOptions.revert = true;
    }
    const promises = notifyManager.batch(() => this.queryCache.findAll(filters).map((query) => query.cancel(cancelOptions)));
    return Promise.all(promises).then(noop).catch(noop);
  }
  invalidateQueries(arg1, arg2, arg3) {
    var _a, _b, _c;
    const [filters, options] = parseFilterArgs(arg1, arg2, arg3);
    const refetchFilters = Object.assign(Object.assign({}, filters), {
      // if filters.refetchActive is not provided and filters.active is explicitly false,
      // e.g. invalidateQueries({ active: false }), we don't want to refetch active queries
      active: (_b = (_a = filters.refetchActive) !== null && _a !== void 0 ? _a : filters.active) !== null && _b !== void 0 ? _b : true,
      inactive: (_c = filters.refetchInactive) !== null && _c !== void 0 ? _c : false
    });
    return notifyManager.batch(() => {
      this.queryCache.findAll(filters).forEach((query) => {
        query.invalidate();
      });
      return this.refetchQueries(refetchFilters, options);
    });
  }
  refetchQueries(arg1, arg2, arg3) {
    const [filters, options] = parseFilterArgs(arg1, arg2, arg3);
    const promises = notifyManager.batch(() => this.queryCache.findAll(filters).map((query) => query.fetch(void 0, Object.assign(Object.assign({}, options), { meta: { refetchPage: filters === null || filters === void 0 ? void 0 : filters.refetchPage } }))));
    let promise = Promise.all(promises).then(noop);
    if (!(options === null || options === void 0 ? void 0 : options.throwOnError)) {
      promise = promise.catch(noop);
    }
    return promise;
  }
  fetchQuery(arg1, arg2, arg3) {
    const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    const defaultedOptions = this.defaultQueryOptions(parsedOptions);
    if (typeof defaultedOptions.retry === "undefined") {
      defaultedOptions.retry = false;
    }
    const query = this.queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  }
  prefetchQuery(arg1, arg2, arg3) {
    return this.fetchQuery(arg1, arg2, arg3).then(noop).catch(noop);
  }
  fetchInfiniteQuery(arg1, arg2, arg3) {
    const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    parsedOptions.behavior = infiniteQueryBehavior();
    return this.fetchQuery(parsedOptions);
  }
  prefetchInfiniteQuery(arg1, arg2, arg3) {
    return this.fetchInfiniteQuery(arg1, arg2, arg3).then(noop).catch(noop);
  }
  cancelMutations() {
    const promises = notifyManager.batch(() => this.mutationCache.getAll().map((mutation) => mutation.cancel()));
    return Promise.all(promises).then(noop).catch(noop);
  }
  resumePausedMutations() {
    return this.getMutationCache().resumePausedMutations();
  }
  executeMutation(options) {
    return this.mutationCache.build(this, options).execute();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(options) {
    this.defaultOptions = options;
  }
  setQueryDefaults(queryKey, options) {
    const result = this.queryDefaults.find((x) => hashQueryKey(queryKey) === hashQueryKey(x.queryKey));
    if (result) {
      result.defaultOptions = options;
    } else {
      this.queryDefaults.push({ queryKey, defaultOptions: options });
    }
  }
  getQueryDefaults(queryKey) {
    var _a;
    return queryKey ? (_a = this.queryDefaults.find((x) => partialMatchKey(queryKey, x.queryKey))) === null || _a === void 0 ? void 0 : _a.defaultOptions : void 0;
  }
  setMutationDefaults(mutationKey, options) {
    const result = this.mutationDefaults.find((x) => hashQueryKey(mutationKey) === hashQueryKey(x.mutationKey));
    if (result) {
      result.defaultOptions = options;
    } else {
      this.mutationDefaults.push({ mutationKey, defaultOptions: options });
    }
  }
  getMutationDefaults(mutationKey) {
    var _a;
    return mutationKey ? (_a = this.mutationDefaults.find((x) => partialMatchKey(mutationKey, x.mutationKey))) === null || _a === void 0 ? void 0 : _a.defaultOptions : void 0;
  }
  defaultQueryOptions(options) {
    if (options === null || options === void 0 ? void 0 : options._defaulted) {
      return options;
    }
    const defaultedOptions = Object.assign(Object.assign(Object.assign(Object.assign({}, this.defaultOptions.queries), this.getQueryDefaults(options === null || options === void 0 ? void 0 : options.queryKey)), options), { _defaulted: true });
    if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
      defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
    }
    return defaultedOptions;
  }
  defaultQueryObserverOptions(options) {
    return this.defaultQueryOptions(options);
  }
  defaultMutationOptions(options) {
    if (options === null || options === void 0 ? void 0 : options._defaulted) {
      return options;
    }
    return Object.assign(Object.assign(Object.assign(Object.assign({}, this.defaultOptions.mutations), this.getMutationDefaults(options === null || options === void 0 ? void 0 : options.mutationKey)), options), { _defaulted: true });
  }
  clear() {
    this.queryCache.clear();
    this.mutationCache.clear();
  }
}
const QueryClientProvider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { queryCache = new QueryCache() } = $$props;
  let { mutationCache = new MutationCache() } = $$props;
  let { defaultOptions = {} } = $$props;
  let { client = new QueryClient({
    queryCache,
    mutationCache,
    defaultOptions
  }) } = $$props;
  setContext("queryClient", client);
  onDestroy(() => {
    client.unmount();
  });
  if ($$props.queryCache === void 0 && $$bindings.queryCache && queryCache !== void 0)
    $$bindings.queryCache(queryCache);
  if ($$props.mutationCache === void 0 && $$bindings.mutationCache && mutationCache !== void 0)
    $$bindings.mutationCache(mutationCache);
  if ($$props.defaultOptions === void 0 && $$bindings.defaultOptions && defaultOptions !== void 0)
    $$bindings.defaultOptions(defaultOptions);
  if ($$props.client === void 0 && $$bindings.client && client !== void 0)
    $$bindings.client(client);
  return `${slots.default ? slots.default({}) : ``}`;
});
const Center = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${add_attribute("class", twMerge("w-full flex items-center justify-center", className), 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const IconNoWifi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wifi-off"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`;
});
const OfflinePage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Center, "Center").$$render(
    $$result,
    {
      class: "flex flex-wrap flex-col gap-16 justify-center items-center h-full w-full p-2"
    },
    {},
    {
      default: () => {
        return `${validate_component(Heading, "Heading").$$render(
          $$result,
          {
            tag: "h1",
            class: "font-bold w-auto h-auto"
          },
          {},
          {
            default: () => {
              return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                default: () => {
                  return `Offline`;
                }
              })}`;
            }
          }
        )} ${validate_component(Icon, "Icon").$$render($$result, { class: "child:w-16 child:h-16" }, {}, {
          default: () => {
            return `${validate_component(IconNoWifi, "IconNoWifi").$$render($$result, {}, {}, {})}`;
          }
        })}`;
      }
    }
  )}`;
});
const isOnline = writable("ssr");
if (typeof window !== "undefined")
  isOnline.set(navigator.onLine ? "online" : "offline");
if (typeof window !== "undefined")
  window?.addEventListener("online", () => isOnline.set("online"));
if (typeof window !== "undefined")
  window?.addEventListener("offline", () => isOnline.set("offline"));
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  let $isOnline, $$unsubscribe_isOnline;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_isOnline = subscribe(isOnline, (value) => $isOnline = value);
  const queryClient = new QueryClient();
  $$unsubscribe_navigating();
  $$unsubscribe_isOnline();
  return `${validate_component(CookiesAlert, "CookiesAlert").$$render($$result, {}, {}, {})} <div></div> ${validate_component(QueryClientProvider, "QueryClientProvider").$$render($$result, { client: queryClient }, {}, {
    default: () => {
      return `${$navigating ? `${validate_component(FullPageLoading, "FullPageLoading").$$render($$result, {}, {}, {})}` : `<div class="w-full h-full bg-white dark:bg-black overflow-auto">${$isOnline === "offline" ? `${validate_component(OfflinePage, "OfflinePage").$$render($$result, {}, {}, {})}` : `${slots.default ? slots.default({}) : ``}`}</div>`}`;
    }
  })}`;
});
export {
  Layout as default
};
