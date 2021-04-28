import a11yImage from './documents/a11yImage'
import author from './documents/author'
import blockContent from './array/blockContent'
import category from './documents/category'
import columnText from './documents/columnText'
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import cv from './documents/cv'
import cvItem from './documents/cvItem'
// We import object and document schemas
import link from './documents/link.js'
import page from './documents/page'
import project from './documents/project'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import siteSettings from './documents/siteSettings'
import study from './documents/study'
import textCard from './documents/textCard'
import textCards from './documents/textCards'
import tweet from './documents/tweet'
import writings from './documents/writings'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    cv,
    cvItem,
    columnText,
    textCard,
    textCards,
    a11yImage,
    tweet,
    link,
    study,
    project,
    writings,
    page,
    author,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
})
