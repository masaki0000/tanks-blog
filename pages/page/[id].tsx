import Head from 'next/head'
import Layout, { siteTitle, perPage } from '../../components/layout'
import { useRouter } from 'next/router';
import utilStyles from '../../styles/utils.module.scss'
import { getPagePaths, getSortedPostsData, getNewData } from '../../lib/posts'
import { GetStaticProps, GetStaticPaths } from 'next'
import BlogCard from '../../components/parts/blog_card'
import BreadCrumbs from "../../components/parts/breadcrumbs"
import { Pagination } from '../../components/parts/pagination'


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPagePaths('top')
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  const totalCount = allPostsData.length
  const newCardData = getNewData({allPostsData})
  return {
    props: {
      allPostsData,
      totalCount,
      newCardData
    }
  }
}
// 現在のファイル名を取得
export const getFileName = () => {
  const router = useRouter()
  const pathText = router.asPath
  const temp = pathText.split('/')
  const fileName = temp[temp.length - 1]
  return (
    fileName
  )
}
// 型定義
type Props = {
  allPostsData: {
    id: string
    title: string
    date: string
    category: string
    image?: string
  }[],
  totalCount: number,
  newCardData: {
    id: string
    title: string
    date: string
    category: string
    image?: string
  }[],
}

export default function HomePagination({ allPostsData, totalCount, newCardData }: Props) {
  const fileName = Number(getFileName())
  const displayedIndex = (perPage * (fileName - 1) - 1)
  const cardCountIndex = (displayedIndex + perPage + 1)
  return (
    <Layout 
      home
      newCardData={newCardData}
    >
      <Head>
        <title>{siteTitle}</title>
      </Head>
  

      <section className={`${utilStyles.util_cnt_wrap}`}>
        <BreadCrumbs 
          lists={[
            {
              string: 'TOP',
              path: '/',
            },
            {
              string: '',
              path: '',
            }
          ]}
        />
        <h2 className={utilStyles.util_container_name}>TOP</h2>

        <div className={utilStyles.util_container}>
          {allPostsData.map(( postCardData, i ) => (
            (() => {
              if (displayedIndex < i && i < cardCountIndex && i < totalCount) {
                return (
                  <BlogCard 
                    key={i}
                    postCardData={ postCardData } 
                  />
                )
              }
            })()
          ))}
        </div>

        <Pagination
          perPage={perPage}
          dirName={'top'}
          nowPage={fileName}
          totalCount={totalCount} 
        />
      </section>
    </Layout>
  )
}
