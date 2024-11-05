/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  blog: [
    'Blogs/introduction', {
      label: 'C 语言',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'Blogs/C/C_Basic/C_brief_introduction',
        'Blogs/C/C_Basic/C_environment_settings',
        'Blogs/C/C_Basic/C_program_structure',
        'Blogs/C/C_Basic/C_basic_syntax',
        'Blogs/C/C_Basic/C_keyword',
        'Blogs/C/C_Basic/C_datetype',
        'Blogs/C/C_Basic/C_variable_constant',
        'Blogs/C/C_Basic/C_operator',
        'Blogs/C/C_Basic/C_control_flow',
        'Blogs/C/C_Basic/C_function',
        'Blogs/C/C_Basic/C_array', {
          label: 'C 指针',
          type: 'category',
          link: {
            type: 'generated-index',
          },
          items: [
            'Blogs/C/C_Basic/C_pointer',
            'Blogs/C/C_Basic/C_two_pointer',
            'Blogs/C/C_Basic/C_pointer_and_array',
            'Blogs/C/C_Basic/C_pointer_array_and_pointer_array',
          ]
        },
        'Blogs/C/C_Basic/C_character_string',
        'Blogs/C/C_Basic/C_function_order',
        'Blogs/C/C_Basic/C_pointer_High_level_issues', {
          label: 'C 复杂类型',
          type: 'category',
          link: {
            type: 'generated-index',
          },
          items: [
            'Blogs/C/C_Basic/C_typedef',
            'Blogs/C/C_Basic/C_struct',
            'Blogs/C/C_Basic/C_union_enum',
            'Blogs/C/C_Basic/C_struct_size',
          ]
        },
        'Blogs/C/C_Basic/C_memory',
        'Blogs/C/C_Basic/C_scope',
        'Blogs/C/C_Basic/C_pretreatment',
      ],
    }, {
      label: 'Linux',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'Blogs/linux/Linux_introduction',
        'Blogs/linux/Linux_shell',
      ],
    },
  ]
};

module.exports = sidebars;