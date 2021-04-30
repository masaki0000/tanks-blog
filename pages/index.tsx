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
  // 新着欄表示用
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

export default function Home({ allPostsData, totalCount, newCardData }: Props) {

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
              string: "TOP",
              path: "/"
            },
            {
              string: '',
              path: ''
            }
          ]}
        />

        <h2 className={utilStyles.util_container_name}>TOP</h2>
        
        <div className={utilStyles.util_container}>
          {/* {allPostsData.map(( postCardData ) => (
            <BlogCard postCardData={ postCardData } />
          ))} */}
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