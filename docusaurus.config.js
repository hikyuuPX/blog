// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
      (navbar: {
          title: 'hikyuuPX',
          hideOnScroll: true,
          logo: {
            alt: 'hikyuuPX的随笔',
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
          copyright: `本站所有内容遵循<a href="https://creativecommons.org/licenses/by/4.0/deed.zh" >${beian}</a>开源协议，仅限非商业性使用，转载请注明出处</p>
                    <p>Copyright © ${new Date().getFullYear()} - PRESENT hikyuuPX, Inc. Built with Docusaurus.</p>
                    <span id="runtime_span"></span>
                    <script type="text/javascript">function show_runtime(){window.setTimeout("show_runtime()",1000);X=new 
                    Date("11/05/2024 12:00:00");
                    Y=new Date();T=(Y.getTime()-X.getTime());M=24*60*60*1000;
                    a=T/M;A=Math.floor(a);b=(a-A)*24;B=Math.floor(b);c=(b-B)*60;C=Math.floor((b-B)*60);D=Math.floor((c-C)*60);
                    runtime_span.innerHTML="<br>本站已运行: "+A+"天"+B+"小时"+C+"分"+D+"秒"}show_runtime();</script>`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
};
module.exports = config;