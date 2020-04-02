export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events2-studio-tpmrufi4',
                  apiId: 'cf63857e-d5b6-44f8-9581-7cb3e59e028f'
                },
                {
                  buildHookId: '5e85f610e8abfd6d6c3a2245',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events2-web-dqi7u3jw',
                  apiId: 'fd21fd4f-d207-4b2f-89f6-3f46ddd0cc57'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/freshyill/sanity-nuxt-events2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events2-web-dqi7u3jw.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
