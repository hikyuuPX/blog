/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  skill: [
    'skill/introduction', {
      label: 'Linux',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'skill/linux/Linux_introduction',
        'skill/linux/Linux_shell',
      ],
    },
  ]
};

module.exports = sidebars;