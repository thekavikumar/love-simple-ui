import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <h1>love simple ui</h1>,
  project: {
    link: "https://github.com/thekavikumar/love-simple-ui",
  },
  chat: {
    link: "https://discord.com",
  },
  footer: {
    text: "love-simple-ui Docs",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - love simple ui",
    };
  },
};

export default config;
