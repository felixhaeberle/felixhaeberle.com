import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

// Get content in directory

export function getSortedData(postsDir) {
  let postsDirectory = path.join(process.cwd(), postsDir)

  // Get file names under /posts
  let fileNames = fs.readdirSync(postsDirectory)
  let allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    let id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    let fullPath = path.join(postsDirectory, fileName)
    let fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    let matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds(postsDir) {
  let fileNames = fs.readdirSync(postsDir)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id, postsDir) {
  let fullPath = path.join(postsDir, `${id}.md`)
  let fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  let matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  let processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  let contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
