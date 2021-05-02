import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.scss'
import HeaderTab from './parts/header_tab'
import HeaderHamburger from './parts/header_hambuerger'


// ヘッダーコンポーネント
export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_title_wrapper}>
          {/* ヘッダーロゴ(アイコン含む) */}
          <div className={styles.header_title}>
              <div className={styles.image_wrapper}>
                <Link href='/'>
                  <>
                    <Image
                      priority
                      src='/images/shell.svg'
                      height={64}
                      width={64}
                      alt="headerlogo"
                    />
                  </>
                </Link>
              </div>
              <Link href='/'>
                <a>TanksBlog</a>
              </Link>
          </div>

          {/* ハンバーガーメニュー(スマホサイズのみ表示) */}
          <HeaderHamburger />
        </div>
        
      </header>

      {/* ヘッダーのタブメニュー(スマホサイズでは非表示) */}
      <HeaderTab />
    </>
  )
}
