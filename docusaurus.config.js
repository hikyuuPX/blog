// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const beian = 'CC BY-NC 4.0'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'hikyuuPX的随笔',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.jpg',
  tagline: '【道常无为而无不为】',

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
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
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
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'hikyuuPX的随笔',
      logo: {
        alt: 'hikyuuPX的随笔',
        src: 'img/favicon.jpg',
      },
      hideOnScroll: true,
    },
    footer: {
      style: 'dark',
      copyright: `本站所有内容遵循<a href="https://creativecommons.org/licenses/by/4.0/deed.zh" >${beian}</a>开源协议，仅限非商业性使用，转载请注明出处</p>
                    <p>Copyright © ${new Date().getFullYear()} - PRESENT hikyuuPX, Inc. Built with Docusaurus.</p>`,
    },
  },
};
module.exports = config;