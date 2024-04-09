// @ts-nocheck

import tseslint from "typescript-eslint";
import { interopDefault } from "./utils";

export { tseslint };

import * as _pluginVue from "eslint-plugin-vue";
export const pluginVue = interopDefault(_pluginVue);

import * as _pluginReact from "eslint-plugin-react";
export const pluginReact = interopDefault(_pluginReact);

import * as _pluginSolid from "eslint-plugin-solid/configs/typescript.js";
export const pluginSolid = interopDefault(_pluginSolid);

import * as _pluginAstro from "eslint-plugin-astro";
export const pluginAstro = interopDefault(_pluginAstro);

import * as _pluginPrettier from "eslint-plugin-prettier";
export const pluginPrettier = interopDefault(_pluginPrettier);

import * as _configPrettier from "eslint-config-prettier";
export const configPrettier = interopDefault(_configPrettier);

import * as _pluginFormat from "eslint-plugin-format";
export const pluginFormat = interopDefault(_pluginFormat);

export * as parserVue from "vue-eslint-parser";

export * as parserAstro from "astro-eslint-parser";
