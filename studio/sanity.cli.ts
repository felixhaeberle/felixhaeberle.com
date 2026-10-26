import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '32kc4e2s',
    dataset: 'production',
  },
  studioHost: 'felixhaeberle',
  deployment: {
    appId: 'f92739b097caf34c9005c287',
  },
})
