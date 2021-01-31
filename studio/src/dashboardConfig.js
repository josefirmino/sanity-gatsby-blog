export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6016136413fd1752173eecd9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ear6e5w4',
                  apiId: '5d36d2b2-121e-409b-bde0-c5cbec89e078'
                },
                {
                  buildHookId: '60161364d3430b2af6c875c2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-krb9fp5y',
                  apiId: '3e6ae0f3-22ab-41c4-803f-d1bdcd851e73'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/josefirmino/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-krb9fp5y.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
