export default {
  widgets: [
    {
      name: 'project-info',
      layout: {
        width: 'medium'
      }
    },
    {
      name: 'document-list',
      layout: {
        width: 'small'
      },
      options: {
        title: 'Last released projects', 
        order: 'releasedAt desc', 
        types: ['project']
      }
    },
    {
      name: 'document-list',
      options: {
        title: 'Last published studies', 
        order: 'publishedAt desc', 
        types: ['study']
      }
    },
    {
      name: 'document-list', 
      options: {
        title: 'Last edited pages', 
        order: '_updatedAt desc', 
        types: ['page']
      }
    },
    {
      name: 'project-users'
    }
    // {
    //   name: 'vercel',
    //   options: {
    //     deployLimit: 1,
    //     deployHook: 'https://api.vercel.com/v1/integrations/deploy/prj_okria7LcXIaOvTw8dLZjjMY4uUMi/FEk4YG0g7r', // optional
    //     forceSmallLayout: false, // optional
    //     projectId: '32kc4e2s',
    //     token: '174lAc4kkpZngwjVdcLPzISO',
    //   },
    //   layout: {
    //     width: 'medium',
    //   },
    // },
  ],
}