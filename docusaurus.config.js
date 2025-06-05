import {themes as prismThemes} from 'prism-react-renderer';

const currentYear = new Date().getFullYear();
const org = process.env.ORG_NAME;
const repo = process.env.PROJECT_NAME;

export default {
  title: process.env.SITE_TITLE,
  tagline: 'Docusaurus Tagline',
  url: process.env.SITE_URL,
  baseUrl: process.env.BASE_URL,
  organizationName: process.env.ORG_NAME,
  projectName: process.env.PROJECT_NAME,
  deploymentBranch: 'gh-pages',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          editUrl: `https://github.com/${org}/${repo}/edit/main/`,
        },
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          // blogTitle: 'Blog',
          // blogDescription: 'Thoughts and updates.',
          // blogSidebarTitle: 'Timeline',
          blogSidebarTitle: 'Timeline',
          blogSidebarCount: 'ALL',
          onUntruncatedBlogPosts: 'ignore',
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/styles.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'aboutSidebar',
          position: 'left',
          label: 'About',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/${org}/${repo}',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    prism: {
      theme: prismThemes.github,
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `
        <div class="footer-row">
          <div class="footer-left">
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" style="color: #ebedf0;">CC BY 4.0</a> © ${currentYear} therepos.<br/>
            Made with Docusaurus.
          </div>
          <div class="footer-icons">
            <a href="https://github.com" class="icon icon-github" target="_blank" aria-label="GitHub"></a>
            <a href="https://hub.docker.com" class="icon icon-docker" target="_blank" aria-label="Docker"></a>
          </div>
        </div>
      `,
    },
  },
};

