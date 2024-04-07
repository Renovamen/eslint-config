import { hasVue, hasReact, hasSolid } from "./env";
import { ignores, javascript, prettier, solid, typescript, vue } from "./configs";
import type { FlatESLintConfigItem } from "eslint-define-config";
import { react } from "./configs/react";

export const presetJavaScript = [...ignores, ...javascript];
export const presetBasic = [...presetJavaScript, ...typescript];

/**
 *
 * @param config
 * @param features
 * @returns
 */
export function renovamen(
  config: FlatESLintConfigItem | FlatESLintConfigItem[] = [],
  {
    prettier: enablePrettier = true,
    vue: enableVue = hasVue,
    react: enableReact = hasReact,
    solid: enableSolid = hasSolid
  }: Partial<{
    /** Vue support. Auto-enable. */
    vue: boolean;
    /** React support. Auto-enable. */
    react: boolean;
    /** Solid support. Auto-enable. */
    solid: boolean;
    /** Prettier support. Default: true */
    prettier: boolean;
  }> = {}
): FlatESLintConfigItem[] {
  const configs = [...presetBasic];

  if (enableVue) configs.push(...vue);
  if (enableReact) configs.push(...react);
  if (enableSolid) configs.push(...solid);
  if (enablePrettier) configs.push(...prettier);

  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]));
  }
  return configs;
}
