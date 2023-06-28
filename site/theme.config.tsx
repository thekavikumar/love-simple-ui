import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import "./components/logo.module.css";

const config: DocsThemeConfig = {
  logo: <h1 className="logo">love simple ui </h1>,
  project: {
    link: "https://github.com/thekavikumar/love-simple-ui",
  },
  chat: {
    link: "https://discord.com",
  },
  footer: {
    text: "love-simple-ui Docs",
  },
};

export default config;
