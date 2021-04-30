import {GetStaticProps} from 'next'
import Head from 'next/head'
import Layout, { siteTitle, perPage } from '../../../components/layout'
import utilStyles from '../../../styles/utils.module.scss'
import { getSortedPostsData, filterData, getNewData } from '../../../lib/posts'
import BlogCard from '../../../components/parts/blog_card'
import BreadCrumbs from "../../../components/parts/breadcrumbs"
import { Pagination } from '../../../components/parts/pagination'


export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  const filterPostsData = filterData(
    {selectCategory:'other', postsData:allPostsData})
  const totalCount = filterPostsData.length
  const newCardData = getNewData({allPostsData})
  
  return {
    props: {
      totalCount,
      newCardData,
      filterPostsData
    }
  }
}

// 型定義
type Props = {
  filterPostsData: {
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

export default function Other({ filterPostsData, totalCount, newCardData }: Props) {
  return (
    <Layout 
      home
      newCardData={newCardData}
    >
      <Head>
        <title>Other | {siteTitle}</title>
      </Head>

      <section className={`${utilStyles.util_cnt_wrap}`}>
        <BreadCrumbs 
          lists={[
            {
              string: 'TOP',
              path: '/'
            },
            {
              string: 'OTHER',
              path: ''
            }
          ]}
        />
        <h2 className={utilStyles.util_container_name}>OTHER</h2>

        <div className={utilStyles.util_container}>

          {filterPostsData.map(( postCardData, i ) => (
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
          dirName={'other'}
          nowPage={1}
          totalCount={totalCount} 
        />
      </section>
    </Layout>
  )
}