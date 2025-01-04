import { hasVue, hasReact, hasSolid, hasAstro } from "./env";
import {
  ignores,
  javascript,
  prettier,
  typescript,
  react,
  solid,
  vue,
  astro,
  astroFormat
} from "./configs";
import type { Linter } from "eslint";

export const presetJavaScript = [...ignores, ...javascript];
export const presetBasic = [...presetJavaScript, ...typescript];

/**
 *
 * @param config
 * @param features
 * @returns
 */
export function renovamen(
  config: Linter.Config | Linter.Config[] = [],
  {
    prettier: enablePrettier = true,
    vue: enableVue = hasVue,
    react: enableReact = hasReact,
    solid: enableSolid = hasSolid,
    astro: enableAstro = hasAstro
  }: Partial<{
    /** Vue support. Auto-enable. */
    vue: boolean;
    /** React support. Auto-enable. */
    react: boolean;
    /** Solid support. Auto-enable. */
    solid: boolean;
    /** Astro support. Auto-enable. */
    astro: boolean;
    /** Prettier support. Default: true */
    prettier: boolean;
  }> = {}
): Linter.Config[] {
  const configs = [...presetBasic];

  if (enablePrettier) configs.push(...prettier);

  if (enableAstro) {
    configs.push(...astroFormat);
    configs.push(...astro);
  }

  if (enableVue) configs.push(...vue);
  if (enableReact) configs.push(...react);
  if (enableSolid) configs.push(...solid);

  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]));
  }

  return configs;
}
