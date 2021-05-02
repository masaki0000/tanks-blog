import {GetStaticProps} from 'next'
import Head from 'next/head'
import Layout, { siteTitle, perPage } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData, getNewData } from '../lib/posts'
import BlogCard from '../components/parts/blog_card'
import BreadCrumbs from "../components/parts/breadcrumbs";
import { Pagination } from '../components/parts/pagination';


export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  const totalCount = allPostsData.length
  // 新着欄表示用のデータを取得
  const newCardData = getNewData({allPostsData})
  return {
    props: {
      allPostsData,
      totalCount,
      newCardData
    }
  }
}

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
  }[]
}


// トップページ(全カテゴリーのブログ一覧)の１ページ目
export default function Home({ allPostsData, totalCount, newCardData }: Props) {
  return (
    // レイアウト汎用コンポーネント
    <Layout
      home 
      newCardData={newCardData}
    >
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.util_cnt_wrap}`}>
        {/* パンくずリスト */}
        <BreadCrumbs 
          lists={[
            {
              string: "TOP",
              path: "/"
            },
            {
              string: '',
              path: ''
            }
          ]}
        />

        {/* カテゴリ名(全カテゴリの為TOP) */}
        <h2 className={utilStyles.util_container_name}>TOP</h2>
        
        {/* ブログ一覧表示 */}
        <div className={utilStyles.util_container}>
          {allPostsData.map(( postCardData, i ) => (
            (() => {
              if (i < perPage && i < totalCount) {
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

        {/* ページング処理 */}
        <Pagination
          perPage={perPage}
          dirName={'top'}
          nowPage={1}
          totalCount={totalCount} 
        />
      </section>
    </Layout>
  )
}