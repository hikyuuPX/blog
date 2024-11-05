const path = require('path')
const math = require('remark-math');
const katex = require('rehype-katex');
const announcementBarContent = `🎉欢迎浏览hikyuuPX的随笔`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'hikyuuPX的随笔',
  titleDelimiter: '-',
  url: 'https://your-docusaurus-site.example.com', //请填写你的网站
  baseUrl: '/', //建议填写/
  favicon: '/assets/images/social/avatar.ico',
  organizationName: 'hikyuuPX',
  projectName: 'blog',
  tagline: '【道常无为而无不为】',
  onBrokenLinks: 'ignore', //忽略坏链
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: '/assets/images/social/avatar.png',
    announcementBar: {
      id: 'announcementBar-3',
      content: announcementBarContent,
    },
    mermaid: {
      theme: {
        light: 'neutral',
        dark: 'forest'
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      showLinenums: true,
    },
    metadata: [{
      name: 'keywords',
      content: ' 编程爱好者',
    }, ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'hikyuuPX的随笔',
      logo: {
        alt: 'hikyuuPX',
        src: '/assets/images/social/avatar.png',
        srcDark: '/assets/images/social/avatar.png', //记得加上绝对路径/
      },
      hideOnScroll: false,
      items: [{
        label: '博客',
        position: 'left',
        items: [{
          label: '标签',
          to: 'tags',
        }, {
          label: '归档',
          to: 'archive',
        }, {
          label: '随笔',
          to: 'tags/lifestyle',
        }, ],
      }, {
        label: '笔记',
        position: 'left',
        to: 'docs/stack/',
        items: [{
          label: '学习栈',
          to: 'docs/stack/',
        }, ],
      }, {
        label: '导航',
        position: 'left',
        to: 'resource',
      }, {
        label: '项目',
        position: 'left',
        to: 'project',
      }, {
        label: '关于我',
        position: 'left',
        to: 'about',
      }, {
        type: 'localeDropdown',
        position: 'right',
      }, ],
    },
    footer: {
      style: 'dark',
      copyright: `版权所有 © ${new Date().getFullYear()} hikyuuPX, 此网站使用 <a href="https://docusaurus.io/zh-CN/" target="_blank">Docusaurus</a> 搭建
      <span id="runtime_span"></span>
      <script type="text/javascript">function show_runtime(){window.setTimeout("show_runtime()",1000);X=new 
      Date("11/05/2024 12:00:00");
      Y=new Date();T=(Y.getTime()-X.getTime());M=24*60*60*1000;
      a=T/M;A=Math.floor(a);b=(a-A)*24;B=Math.floor(b);c=(b-B)*60;C=Math.floor((b-B)*60);D=Math.floor((c-C)*60);
      runtime_span.innerHTML="<br>本站已运行: "+A+"天"+B+"小时"+C+"分"+D+"秒"}show_runtime();</script>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php', 'rust', 'toml'],
      defaultLanguage: 'javascript',
      magicComments: [{
        className: 'theme-code-block-highlighted-line',
        line: 'highlight-next-line',
        block: {
          start: 'highlight-start',
          end: 'highlight-end'
        },
      }, {
        className: 'code-block-error-line',
        line: 'This will error',
      }, ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: '#eef9fd',
        dark: 'rgb(50, 50, 50)',
      },
      config: {
        magin: 10,
        scrollOffset: 0,
      },
    },
    giscus: {
      repo: 'wrm244/hikyuuPX',
      repoId: 'R_kgDOJZ-VIA',
      category: 'General',
      categoryId: 'DIC_kwDOJZ-VIM4CV95r',
      loading: "lazy",
      lang: "zh-CN",
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: { // 社交网站链接
      github: 'https://github.com/hikyuuPX',
      csdn: 'https://blog.csdn.net/Eternally_Time',
      zhihu: 'https://www.zhihu.com/people/zuo-you-36-87-74',
    },
  },
  headTags: [{
    tagName: 'meta',
    attributes: {
      name: 'description',
      content: 'hikyuuPX的随笔',
    },
  }, ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      }),
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    // 'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'), {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({
            locale,
            blogDirPath,
            blogPath,
            permalink
          }) =>
          `https://github.com/hikyuuPX/blog/master/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: 'hikyuuPX的随笔',
        blogSidebarCount: 10,
        blogSidebarTitle: '最近更新',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({
            content,
            frontMatter,
            defaultReadingTime
          }) =>
          defaultReadingTime({
            content,
            options: {
              wordsPerMinute: 300
            }
          }),
        feedOptions: {
          type: 'all',
          title: 'hikyuuPX的随笔',
          copyright: `Copyright © ${new Date().getFullYear()} hikyuuPX Built with Docusaurus. class="footer_lin">`,
        },
      },
    ],
    [
      '@docusaurus/plugin-ideal-image', {
        quality: 80,
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa', {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [{
          tagName: 'link',
          rel: 'icon',
          href: 'assets/images/social/avatar.png',
        }, {
          tagName: 'link',
          rel: 'manifest',
          href: '/manifest.json',
        }, {

          tagName: 'meta',
          name: 'theme-color',
          content: 'rgb(51 139 255)',
        }, ],
      },
    ],
  ],
  stylesheets: [{
    href: 'https://jsd.onmicrosoft.cn/npm/katex@0.13.24/dist/katex.min.css',
    type: 'text/css',
    integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
    crossorigin: 'anonymous',
  }, ],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ["en", "zh"],
        indexBlog: true,
        indexPages: true,
        indexDocs: true,
      }),
    ],
  ],
}

module.exports = config