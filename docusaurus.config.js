// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const beian = 'CC BY-NC 4.0'

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'hikyuuPX的随笔',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.jpg',
  tagline: '【道常无为而无不为】',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/logo.png',
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      logo: {
        alt: 'hikyuuPX的随笔',
        src: 'img/favicon.webp',
      },
      hideOnScroll: true,
      items: [ //顶部菜单栏
        {
          label: '博客',
          position: 'right',
          items: [{
            label: 'C语言',
            to: 'docs/Blogs/C',
          }, {
            label: 'Linux',
            to: 'docs/Blogs/linux',
          }, ],
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
          to: "/docs",
        },
      ],
    },
    footer: { //页面底部菜单栏
      style: 'dark',
      copyright: `本站所有内容遵循<a href="https://creativecommons.org/licenses/by/4.0/deed.zh" >${beian}</a>开源协议，仅限非商业性使用，转载请注明出处</p>
                    <p>Copyright © ${new Date().getFullYear()} - PRESENT hikyuuPX, Inc. Built with Docusaurus.</p>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};
module.exports = config;