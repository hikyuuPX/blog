// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const announcementBarContent = `<a href="https://firework.kuizuo.cn" target="_blank">2023 新年快乐</a> 🎉`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'hikyuuPX的随笔',
  tagline: '【道常无为而无不为】',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.jpg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hikyuuPX', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  onBrokenLinks: 'ignore',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      /*最顶上的页眉*/
      announcementBar: {
        id: 'announcementBar',
        content: announcementBarContent,
      },
      navbar: {
        title: 'hikyuuPX',
        hideOnScroll: true,
        logo: {
          alt: '🎥啵贝琴',
          src: 'img/src.webp',
        },
        items: [ //顶部菜单栏
          {
            label: '博客',
            position: 'right',
            to: "docs/Blogs/",
          }, {
            label: '笔记',
            position: 'right',
            to: "docs/Notes/",
          }, {
            label: '项目',
            position: 'right',
            to: "docs/Projects/",
          }, {
            label: '关于我',
            position: 'right',
            to: "/blog",
          },
        ],
      },
      footer: { //页面底部菜单栏
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} 啵贝琴, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
module.exports = config;