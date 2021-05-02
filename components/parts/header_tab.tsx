import Link from 'next/link'
import style from '../../styles/parts_styles/header_tab.module.scss'


// ヘッダーのタブメニューコンポーネント
export default function HeaderTab () {
  return (
    // 各カテゴリの遷移メニュー
    <div className={style.header_tab}>

      <div className={style.link}>
        <Link href='/'>
          <a>TOP</a>
        </Link>
      </div>
      
      <div className={style.link}>
        <Link href='/category/program/'>
          <a>PROGRAM</a>
        </Link>
      </div>
  
      <div className={style.link}>
        <Link href='/category/gadget/'>
          <a>GADGET</a>
        </Link>
      </div>
      
      <div className={style.link}>
        <Link href='/category/other/'>
          <a>OTHER</a>
        </Link>
      </div>
    
    </div>
  )
}