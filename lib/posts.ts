import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark, { stringify } from 'remark'
import Layout, { perPage } from '../components/layout'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

// topタブ(全カテゴリ)のブログ取得
export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as {
          date: string;
          title: string;
          category: string;
      })
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



// 新着記事の取得
type gNDProps = {
  allPostsData: {
    id: string
    title: string
    date: string
    category: string
  }[]
}
export function getNewData ({allPostsData}: gNDProps) {

  const newCardData = allPostsData.filter (
    ((data, index) => index < 3)
  )

  return (
    newCardData
  )
}



// ブログ詳細ページ用パス取得
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
        // id: ["contents","test"]
      }
    }
  })
}



// ブログ詳細ページ用データ取得
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as {
        date: string;
        title: string;
        category: string;
        image?: string;
    })
  }
}



// 動的ルーティング(2ページ以降)のpath取得
export function getPagePaths (selectCategory: string){
  let postsData = getSortedPostsData()

  if (selectCategory === 'top') {
  } else {
    postsData = filterData(
      {selectCategory:selectCategory, postsData:postsData}
    )
  }
  
  const totalCount = postsData.length
  const pageCount = Math.ceil(totalCount / perPage)
  const fileNames: string[] = [];
  for (let i = 2; i <= pageCount; i++) {
    fileNames.push(String(i));
  }

  return (
    fileNames.map(fileName => {
      return {
        params: {
          id: fileName
        }
      }
    })
  )
}



// 動的ルーティング(ページ遷移)のファイル内容取得
type fDProps = {
  selectCategory: string,
  postsData: {
    id: string
    title: string
    date: string
    category: string
    image?: string
  }[]
}
export function filterData({selectCategory, postsData}: fDProps) {
  
  // 指定したカテゴリにフィルタ
  const filterData = postsData.filter(
    (postsData => postsData.category === selectCategory)
  )
  return ( 
    filterData
  )
}




// 未使用
// 動的ルーティング(2ページ以降)のpath取得
// type gProps = {
//   postsData: {
//     id: string
//     title: string
//     date: string
//     category: string
//     image?: string
//   }[]
// }
// export function getPagePathsTest ({postsData}: gProps){
  
//   const totalCount = postsData.length
//   const pageCount = Math.ceil(totalCount / perPage)
//   const fileNames: string[] = []
//   for (let i = 2; i <= pageCount; i++) {
//     fileNames.push(String(i))
//   }

//   return (
//     fileNames.map(fileName => {
//       return {
//         params: {
//           id: fileName
//         }
//       }
//     })
//   )
// }
