// @ts-nocheck

export type InteropDefault<T> = T extends { default: infer U } ? U : T;

/* #__NO_SIDE_EFFECTS__ */
function interopDefault<T>(m: T): InteropDefault<T> {
  return (m as any).default || m;
}

import tseslint from "typescript-eslint";
export { tseslint };

import * as _pluginVue from "eslint-plugin-vue";
export const pluginVue = interopDefault(_pluginVue);

import * as _pluginReact from "eslint-plugin-react";
export const pluginReact = interopDefault(_pluginReact);

import * as _pluginSolid from "eslint-plugin-solid/configs/typescript.js";
export const pluginSolid = interopDefault(_pluginSolid);

import * as _pluginPrettier from "eslint-plugin-prettier";
export const pluginPrettier = interopDefault(_pluginPrettier);

import * as _configPrettier from "eslint-config-prettier";
export const configPrettier = interopDefault(_configPrettier);

export * as parserVue from "vue-eslint-parser";
