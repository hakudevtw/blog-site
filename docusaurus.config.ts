import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind.plugin";

const config: Config = {
  title: "Haku's Notebook",
  tagline: "Haku's daily notes...",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  plugins: [tailwindPlugin],

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "zh-TW",
    locales: ["en", "zh-TW", "ja"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/hakudevtw/blog-site/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/hakudevtw/blog-site/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    docs: {
      sidebar: { hideable: true },
    },
    navbar: {
      title: "Haku's Notebook",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      hideOnScroll: true,
      items: [
        {
          type: "docSidebar",
          sidebarId: "dev",
          position: "left",
          label: "Dev Notes",
        },
        {
          type: "docSidebar",
          sidebarId: "others",
          position: "left",
          label: "Others",
        },
        { to: "/blog", label: "Blog", position: "left" },
        // {
        //   type: "localeDropdown",
        //   position: "right",
        // },
        {
          href: "https://github.com/hakudevtw",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
