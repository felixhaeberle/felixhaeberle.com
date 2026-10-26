import { codeInput } from '@sanity/code-input'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import { structure } from './schemas/deskStructure'
import { schemaTypes } from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'Felix Häberle',
  projectId: '32kc4e2s',
  dataset: 'production',
  plugins: [
    structureTool({ structure }),
    visionTool(),
    codeInput(),
    unsplashImageAsset(),
  ],
  schema: {
    types: schemaTypes,
  },
})
