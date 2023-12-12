import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

const config = defineConfig({
  name: 'Arena',
  title: 'Arena Apartments',
  apiVersion: "2023-03-25",
  projectId: 'xc3et9jd',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})

export default config;