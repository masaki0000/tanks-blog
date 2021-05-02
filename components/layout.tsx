import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import NewCard from './parts/new_card'
import Header from './header'
import Footer from './footer'

// ブログ名
export const siteTitle = 'TanksBlog'

// 各ページのブログカード表示数
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


// 汎用レイアウトコンポーネント
export default function Layout({
  children,
  home,
  newCardData
}: Props) 
{
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
          content={"/images/big_theme.png"}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ヘッダー */}
      <Header />

      {/* ブログの新着欄 */}
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
      
      {/* 各ページのコンテンツ */}
      <main className={styles.main}>

        {children}
        
        {/* ブログ詳細ページのとき、バックボタン */}
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </main>
      
      {/* フッター */}
      <Footer />
    </div>
  )
}