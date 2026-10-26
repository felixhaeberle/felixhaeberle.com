import a11yImage from './documents/a11yImage'
import author from './documents/author'
import blockContent from './array/blockContent'
import category from './documents/category'
import columnText from './documents/columnText'
import cv from './documents/cv'
import cvItem from './documents/cvItem'
// We import object and document schemas
import link from './documents/link.js'
import page from './documents/page'
import project from './documents/project'
import siteSettings from './documents/siteSettings'
import study from './documents/study'
import textCard from './documents/textCard'
import textCards from './documents/textCards'
import tweet from './documents/tweet'
import writings from './documents/writings'

export const schemaTypes = [
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
]
