import protal from "../../.portal.json";
import setting from "../../config/settings";

export const ENV = process.env.NODE_ENV === "development";
const PORTAL_NAME = process.env.PORTAL_NAME;

let nowEnv = "";
if (ENV) {
  nowEnv = "dev";
}
if (PORTAL_NAME) {
  nowEnv = PORTAL_NAME;
}
const hostname = window.location.hostname;
if (hostname.startsWith("platform") || hostname.startsWith("venus")) {
  const arr = hostname.split(".");
  if (["dev", "uat", "prod"].includes(arr[1])) {
    nowEnv = arr[1];
  }
}

export const CLOSE_GATEWAY = window?.__BIZSEER_ALERTSEER__?.close_gateway || "false";

export const PORTAL_ORIGIN =
  window?.__BIZSEER_ALERTSEER__?.portal_origin || (nowEnv && protal?.[nowEnv]?.portal_origin);
export const BASE_URL = window?.__BIZSEER_ALERTSEER__?.base_url || (nowEnv && protal?.[nowEnv]?.base_url);

export const FOREST_BACKEND_URL = window?.__BIZSEER_ALERTSEER__?.third_analysis_forest_backend || "";

export const FOREST_FRONTEND_URL = window?.__BIZSEER_ALERTSEER__?.third_analysis_forest_frontend || "";
export const FOREST_TOKEN = window?.__BIZSEER_ALERTSEER__?.third_analysis_forest_token || "";

export const ENTITY = window?.__BIZSEER_ALERTSEER__?.entity || "告警";

export const SALT = "alertAalt";

export function changeIcon(url) {
  let link = document.querySelector("link[rel*='icon']") || document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = BASE_URL + url;
  document.getElementsByTagName("head")[0].appendChild(link);
}

export function replaceEntity(routes) {
  const routeExtra = require("@config/routeExtra").default;
  const reg = new RegExp(setting.entity, "g");
  for (let n in routes) {
    if (routes.hasOwnProperty(n)) {
      if (routes[n].name) {
        routes[n].name = routes[n].name.replace(reg, ENTITY);
      }
      if (routes[n].getName) {
        routes[n].getName = new Function(...routes[n].getName.args, routes[n].getName.expression.replace(reg, ENTITY));
      }
      if (routeExtra[routes[n].path]) {
        Object.assign(routes[n], routeExtra[routes[n].path]);
      }
    }
  }
  return routes;
}
