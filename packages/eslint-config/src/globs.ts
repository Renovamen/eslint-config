export const GLOB_JS = "**/*.?([cm])js";
export const GLOB_JSX = "**/*.?([cm])jsx";

export const GLOB_TS = "**/*.?([cm])ts";
export const GLOB_TSX = "**/*.?([cm])tsx";

export const GLOB_VUE = "**/*.vue";
export const GLOB_ASTRO = "**/*.astro";

export const GLOB_NODE_MODULES = "**/node_modules" as const;
export const GLOB_DIST = "**/dist" as const;
export const GLOB_LOCKFILE = [
  "**/package-lock.json",
  "**/yarn.lock",
  "**/pnpm-lock.yaml",
  "**/bun.lockb"
];
export const GLOB_EXCLUDE = [
  GLOB_NODE_MODULES,
  GLOB_DIST,
  ...GLOB_LOCKFILE,

  "**/output",
  "**/coverage",
  "**/temp",
  "**/fixtures",
  "**/.vitepress/cache",
  "**/.nuxt",
  "**/.vercel",
  "**/.changeset",
  "**/.idea",
  "**/.output",
  "**/.vite-inspect",
  "**/.nitro",
  "**/.vinxi",

  "**/CHANGELOG*.md",
  "**/*.min.*",
  "**/LICENSE*",
  "**/__snapshots__",
  "**/auto-import?(s).d.ts",
  "**/components.d.ts"
];
