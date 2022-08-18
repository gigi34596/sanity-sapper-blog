export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '62fe0ca86a244b0a0585de65',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-4pwksfqz',
                  apiId: 'd6ada8aa-0fcd-4547-9f4b-436b834e65f9'
                },
                {
                  buildHookId: '62fe0ca97fe8f7045d64d0b1',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-ebp6fzyr',
                  apiId: 'a956c83a-e498-4b16-9a83-f9f3d60a7881'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gigi34596/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-ebp6fzyr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
