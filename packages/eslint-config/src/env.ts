import process from "node:process";
import { isPackageExists } from "local-pkg";

export const isInEditor = !!(
  (process.env.VSCODE_PID ||
    process.env.VSCODE_CWD ||
    process.env.JETBRAINS_IDE ||
    process.env.VIM) &&
  !process.env.CI
);

export const hasTypeScript = isPackageExists("typescript");

export const hasVue =
  isPackageExists("vue") || isPackageExists("nuxt") || isPackageExists("vitepress");

export const hasReact = isPackageExists("react") || isPackageExists("next");

export const hasSolid = isPackageExists("solid-js") || isPackageExists("@solidjs/start");

export const hasAstro = isPackageExists("astro");
