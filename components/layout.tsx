import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import NewCard from './parts/new_card'
import Header from './header'
import Footer from './footer'
import { useState } from 'react'

const name = 'testName'
export const siteTitle = 'TanksBlog'
export const perPage: number = 4

type Props = {
  children: React.ReactNode,
  home?: boolean,
  newCardData?: {
    id: string
    title: string
    date: string
    category: string
  }[]
}

export default function Layout({
  children,
  home,
  newCardData
}: Props) 
{
  // console.log ("newCardDataの値は" + {newCardData})
  // const [cardData, setData] = useState()
  // const hasNewData = (cardData) => {
  //   if ({cardData}) {
  //     setData(cardData)
  //   }
  // }
  // () => hasNewData({newCardData})
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="個人的に作成したブログサイトです。プログラムやガジェット関連、その他諸々
            自分が調べた事など、書き溜めていきます。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta property="og:type" content="blog" />
        <meta name="og:site_name" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
        
        <meta
          property="og:image"
          content={"/big_theme.png"}
          // content={`https://og-image.vercel.app/${encodeURI(
          //   siteTitle
          // )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>

      <Header />

      <div className={styles.new_card_data}>
        {
          (() => {
            if (newCardData) {
              return (
                <NewCard 
                  newCardData={newCardData}
                />
              )
            }
          })()
        }
      </div>

      <main className={styles.main}>

        {children}
        
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </main>
      

      <Footer />
    </div>
  )
}