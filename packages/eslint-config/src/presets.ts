import { hasVue, hasReact, hasSolid } from "./env";
import { ignores, javascript, prettier, typescript, react, solid, vue } from "./configs";
import type { FlatESLintConfig } from "eslint-define-config";

export const presetJavaScript = [...ignores, ...javascript];
export const presetBasic = [...presetJavaScript, ...typescript];

/**
 *
 * @param config
 * @param features
 * @returns
 */
export function renovamen(
  config: FlatESLintConfig | FlatESLintConfig[] = [],
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
): FlatESLintConfig[] {
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
