import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { getAllPostIds, getPostData,getSortedPostsData, getNewData } from '../../lib/posts'
import styles from '../../styles/id.module.scss'
import utilStyles from '../../styles/utils.module.scss'
import { GetStaticProps, GetStaticPaths } from 'next'

import BreadCrumbs from "../../components/parts/breadcrumbs";


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)

  const allPostsData = getSortedPostsData()
  const newCardData = getNewData({allPostsData})
  return {
    props: {
      postData,
      newCardData
    }
  }
}

type Props = {
  postData: {
    title: string
    date: string
    category: string
    image?: string
    contentHtml: string
  },
  newCardData: {
    id: string
    title: string
    date: string
    category: string
    image?: string
  }[]
}

export default function Post({ postData, newCardData }: Props) {
  return (
    <Layout
      newCardData={newCardData}
    >
      <Head>
        <title>{postData.title} | {siteTitle}</title>
      </Head>

      <section className={`${utilStyles.util_cnt_wrap}`}>
        <BreadCrumbs 
          lists={[
            {
              string: 'TOP',
              path: '/',
            },
            {
              string: `${postData.category.toUpperCase()}`,
              path: `/category/${postData.category}/`
            },
            {
              string: `${postData.title}`,
              path: ''
            }
          ]}
        />

        <article className={`${styles.blog_content_wrapper}`}>
          <div className={styles.blog_content}>
            <h1 className={`${styles.blog_title} ${utilStyles.headingXl}`}>{postData.title}</h1>
            <div className={`${styles.blog_date} ${utilStyles.lightText}`}>
              {/* <Date dateString={postData.date} /> */}
              {postData.date}
            </div><hr />
            {/* XSSの危険性がある為、入力内容を表示する際にはサニタイズが必須
            今回は自分が作成したmdファイルのみを表示させるため、問題なし */}
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            {/* {postData.contentHtml} */}
          </div>
        </article>
      </section>
    </Layout>
  )
}

