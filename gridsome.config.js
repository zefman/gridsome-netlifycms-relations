// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome + NetlifyCMS - Relations',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },

  plugins: [
    { 
      use: '@gridsome/source-filesystem',
      options: { 
        path: 'content/authors/*.md',
        typeName: 'Author',
      } 
    },
    { 
      use: '@gridsome/source-filesystem',
      options: { 
        path: 'content/blog/*.md',
        typeName: 'BlogPost',
        route: '/blog/:year/:month/:day/:slug',
        refs: { 
          author: 'Author', 
        } 
      } 
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: `src/admin/index.js` // This is important and allows us to register our own widget
      }
    },
  ]
}
