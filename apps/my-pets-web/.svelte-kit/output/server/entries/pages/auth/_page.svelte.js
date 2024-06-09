import { s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, i as add_attribute, v as validate_component, a as each, m as missing_component, e as escape } from "../../../chunks/ssr.js";
import { R as Row, C as Column } from "../../../chunks/Row.js";
import { L as LL } from "../../../chunks/i18n-svelte.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { Permission, Role, Teams, Functions, Locale as Locale$1, Avatars, Graphql, Account, Query, ID, Databases, Client } from "appwrite";
import { w as writable } from "../../../chunks/index2.js";
import lodash__default from "lodash";
import "node-appwrite";
import { a as PUBLIC_APPWRITE_ENDPOINT, b as PUBLIC_APPWRITE_PROJECT_ID } from "../../../chunks/public.js";
import { F as FullPageLoading } from "../../../chunks/FullPageLoading.js";
import { I as Icon } from "../../../chunks/Icon.js";
/* empty css                                                     */import "../../../chunks/index6.js";
import { twMerge } from "tailwind-merge";
import { P as Padding } from "../../../chunks/Padding.js";
const owner = (...userIds) => userIds.flatMap((userId) => [
  Permission.read(Role.user(userId)),
  Permission.write(Role.user(userId)),
  Permission.update(Role.user(userId)),
  Permission.delete(Role.user(userId))
]);
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var createAuthDispatcher = (account) => {
  const client2 = account.client;
  return class Auth extends Account {
    constructor() {
      super(client2);
      this.userStore = writable(null);
      this.subscribe = this.userStore.subscribe;
      this.isLoadingStore = writable(true);
      this.isLoading = { subscribe: this.isLoadingStore.subscribe };
      this.userId = Math.random().toString().substring(2, 7);
      try {
        this.__get().then(() => this.isLoadingStore.set(false));
        client2.subscribe("account", (response) => {
          if (response.events.includes("users.*.update")) {
            return this.__get();
          }
          if (response.events.includes("users.*.delete")) {
            this.deleteSessions();
            return this.userStore.set(null);
          }
        });
      } catch (error) {
      }
    }
    createEmailSession(email, password) {
      return __awaiter(this, void 0, void 0, function* () {
        const session = yield account.createEmailSession(email, password);
        yield this.__get();
        return session;
      });
    }
    createPhoneSession(phone_1) {
      return __awaiter(this, arguments, void 0, function* (phone, userId = this.userId) {
        const token = yield account.createPhoneSession(userId, phone);
        return token;
      });
    }
    updatePhoneSession(secret_1) {
      return __awaiter(this, arguments, void 0, function* (secret, userId = this.userId) {
        const session = yield account.updatePhoneSession(userId, secret);
        yield this.__get();
        return session;
      });
    }
    deleteSession(sessionId) {
      return __awaiter(this, void 0, void 0, function* () {
        const session = yield account.deleteSession(sessionId);
        this.userStore.set(null);
        return session;
      });
    }
    deleteSessions() {
      return __awaiter(this, void 0, void 0, function* () {
        const session = yield account.deleteSessions();
        this.userStore.set(null);
        return session;
      });
    }
    createAccount(email, password, name) {
      return __awaiter(this, void 0, void 0, function* () {
        return yield account.create(ID.unique(), email, password, name);
      });
    }
    addPreferences(prefs) {
      return __awaiter(this, void 0, void 0, function* () {
        const currentPrefs = yield account.getPrefs();
        return yield account.updatePrefs(lodash__default.merge(currentPrefs, prefs));
      });
    }
    __get() {
      return __awaiter(this, void 0, void 0, function* () {
        try {
          const user = yield account.get();
          this.userStore.set(user);
          return user;
        } catch (e) {
          this.userStore.set(null);
          return null;
        }
      });
    }
    getUser() {
      return this.__get();
    }
    getPreferences() {
      return account.getPrefs();
    }
  };
};
const isArrayString = (permissions) => {
  return permissions.every((permission) => typeof permission === "string");
};
const convertObjectInfoArray = (data) => {
  return Object.values(data);
};
var database = (client2) => {
  const databases = new Databases(client2);
  return class Collection {
    constructor(databaseId, collectionId) {
      this.databaseId = databaseId;
      this.collectionId = collectionId;
      this.databaseId = databaseId;
      this.collectionId = collectionId;
    }
    createDocument(data, permissions = void 0, id = ID.unique()) {
      try {
        if (permissions && isArrayString(permissions) || !permissions) {
          return databases.createDocument(
            this.databaseId,
            this.collectionId,
            id,
            //@ts-ignore
            data,
            permissions
          );
        } else
          return databases.createDocument(
            this.databaseId,
            this.collectionId,
            id,
            //@ts-ignore
            data,
            owner(...permissions.map((user) => user.$id))
          );
      } catch (error) {
        console.log(`Error:${error} databaseId: ${this.databaseId} collectionId: ${this.collectionId}`);
        throw error;
      }
    }
    updateDocument(param_1, data_1) {
      return __awaiter(this, arguments, void 0, function* (param, data, permissions = void 0) {
        if (!Array.isArray(permissions) && permissions)
          permissions = convertObjectInfoArray(permissions);
        return databases.updateDocument(this.databaseId, this.collectionId, typeof param === "string" ? param : param.$id, data !== null && data !== void 0 ? data : {}, permissions);
      });
    }
    updatePermissions(documentId, permissions = void 0) {
      if (!Array.isArray(permissions) && permissions)
        permissions = convertObjectInfoArray(permissions);
      return databases.updateDocument(this.databaseId, this.collectionId, typeof documentId === "string" ? documentId : documentId.$id, {}, permissions);
    }
    deleteDocument(param) {
      return __awaiter(this, void 0, void 0, function* () {
        if (typeof param === "string") {
          return databases.deleteDocument(this.databaseId, this.collectionId, param);
        } else if (Array.isArray(param) && isArrayString(param)) {
          const document = yield this.getDocument(param);
          if (!document)
            throw new Error("document that is requeste was not found, check permissions first");
          return yield this.deleteDocument(document.$id);
        }
        return databases.deleteDocument(this.databaseId, this.collectionId, param.$id);
      });
    }
    //delete documents with node-appwrite
    deleteDocuments(filters) {
      return __awaiter(this, void 0, void 0, function* () {
        const { documents } = yield this.listDocuments(filters);
        if (documents.length === 0)
          throw new TypeError("No document found to delete");
        return yield Promise.all(documents.map((document) => this.deleteDocument(document.$id)));
      });
    }
    getDocument(params) {
      return __awaiter(this, void 0, void 0, function* () {
        let data;
        if (typeof params === "string") {
          try {
            data = yield databases.getDocument(this.databaseId, this.collectionId, params);
          } catch (error) {
            data = null;
          }
        } else {
          const list = yield this.listDocuments(params);
          if (list.total > 1)
            throw new Error("Multiple documents found, use listDocuments instead or try to be more specific in your query");
          data = list.documents[0] || null;
        }
        if (typeof (data === null || data === void 0 ? void 0 : data.$permissions) === "object" && !Array.isArray(data === null || data === void 0 ? void 0 : data.$permissions))
          data.$permissions = convertObjectInfoArray(data.$permissions);
        return data;
      });
    }
    //list documents with node-appwrite
    listDocuments() {
      return __awaiter(this, arguments, void 0, function* (filters = [], offset = 0, limit = -1, orderType = null) {
        if (Number.isInteger(offset) === false)
          throw new TypeError("offset must be a non-negative integer");
        if (offset < 0)
          throw new TypeError("limit must be a non-negative integer");
        if (Number.isInteger(limit) === false)
          throw new TypeError("limit must be a non-negative integer or -1");
        if (limit < -1)
          throw new TypeError("limit must be a non-negative integer or -1");
        if (filters.some((filter) => filter.includes("[]") ? true : false)) {
          throw new TypeError("filters must include least one item in Query");
        }
        const queries = [...filters];
        if (offset > 0)
          queries.push(Query.offset(offset));
        if (limit !== -1)
          queries.push(Query.limit(limit));
        if (orderType !== null)
          queries.push(orderType === "ASC" ? Query.orderAsc("") : Query.orderDesc(""));
        const data = yield databases.listDocuments(this.databaseId, this.collectionId, queries);
        data.documents = data.documents.map((document) => Object.assign(Object.assign({}, document), { $pemissions: Array.isArray(document.$permissions) ? document.$permissions : convertObjectInfoArray(document.$permissions) }));
        return data;
      });
    }
    subscribeDocument(documentId, callback) {
      client2.subscribe(`databases.${this.databaseId}.collections.${this.collectionId}.documents.${documentId}`, (response) => {
        callback(response);
      });
    }
    listenUpdate(documentId, callback) {
      this.subscribeDocument(documentId, (response) => {
        if (response.events.includes(`databases.${this.databaseId}.collections.${this.collectionId}.documents.${documentId}.update`)) {
          callback(response.payload);
        }
      });
    }
  };
};
var connection = (client2) => {
  const teams = new Teams(client2);
  const functions = new Functions(client2);
  const locale = new Locale$1(client2);
  const avatars = new Avatars(client2);
  const graphql = new Graphql(client2);
  const account = new Account(client2);
  const Auth = createAuthDispatcher(account);
  const Collection = database(client2);
  const user = new Auth();
  return {
    client: client2,
    teams,
    functions,
    locale,
    avatars,
    graphql,
    account,
    database,
    user,
    Collection,
    Query,
    Role,
    Permission,
    ID
  };
};
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
const myCollections = (Collection) => {
  return {
    pet: new Collection("my-pets", "pet"),
    petDescriptionCustomField: new Collection("my-pets", "PetDescriptionCustomFields")
  };
};
const client = connection(
  new Client().setEndpoint(PUBLIC_APPWRITE_ENDPOINT).setProject(PUBLIC_APPWRITE_PROJECT_ID)
);
myCollections(client.Collection);
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
        })} ${validate_component(SignUpViaSocialMedia, "SignUpViaSocialMedia").$$render($$result, {}, {}, {})}`;
      }
    }
  )}`;
});
export {
  Page as default
};
