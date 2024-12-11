/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_FORMSPREE_FORM_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}