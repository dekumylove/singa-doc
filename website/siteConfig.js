/**
Configuration file: The website/siteConfig.js file 
is the main configuration file used by Docusaurus.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const repoUrl = 'https://github.com/apache/singa'

const siteConfig = {
  title: 'Apache SINGA', // Title for your website.
  tagline: 'Distributed deep learning system',
  url: 'https://singa.apache.org/', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // display an edit button for docs markdowns
  // TODO: change the path after merging with main repo
  editUrl: `${repoUrl}/blob/master/docs/`,

  // Used for publishing and more
  projectName: 'singa', // cd to /website/build/singa/ to serve
  organizationName: 'apache',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'installation', label: 'Docs'},
    {doc: 'source-repository', label: 'Community'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'News'},
    {href: repoUrl, label: 'GitHub'},
    //{search: true},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/singa-logo.png',
  footerIcon: 'img/singa-logo-square.png',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    // primaryColor: "#1A2B34",
    primaryColor: "#0058ae",
    secondaryColor: "#808080" // 2nd layer of toolbar in smaller screen
  },

  /* Blog setting */
  blogSidebarCount: "ALL", // int N or string "ALL"
  blogSidebarTitle: { default: 'Recent News', all: 'All News' },

  /* Twitter share at bottom of Blog/News */
  twitter: true,
  twitterUsername: 'ApacheSINGA',
  twitterImage: 'img/singa-logo.png',

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Apache SINGA`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'atom-one-dark',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  scrollToTop: true,
};

module.exports = siteConfig;
