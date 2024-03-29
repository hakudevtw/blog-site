import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind.plugin";

const config: Config = {
  title: "Haku's Notebook",
  tagline: "Haku's daily notes...",
  favicon: "img/favicon.ico",

  url: "https://hakudevtw.github.io",
  baseUrl: "/blog-site/",

  organizationName: "hakudevtw",
  projectName: "blog-site",
  trailingSlash: false,

  plugins: [tailwindPlugin],

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "zh-TW",
    locales: ["zh-TW"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          showLastUpdateTime: true,
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/hakudevtw/blog-site/tree/main/",
          remarkPlugins: [[require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }]],
        },
        pages: { remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")] },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/hakudevtw/blog-site/tree/main/",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { converters: ["pnpm"] }],
          ],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    docs: {
      sidebar: { hideable: true, autoCollapseCategories: true },
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
          label: "Dev",
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
    algolia: {
      appId: "C74ZUN28PL",
      apiKey: "335c0f36e083f10627dc948dc88a4c00",
      indexName: "hakudevtwio",
      searchParameters: {},
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
