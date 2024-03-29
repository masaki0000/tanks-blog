import Link from 'next/link'
import { useState } from 'react'
import style from '../../styles/parts_styles/header_hamburger.module.scss'


// ヘッダーのハンバーガーメニューコンポーネント
export default function HeaderMenu () {
  // React state Hooks
  const [isMenuOpen, toggleMenuOpen] = useState(false)

  // メニューの開閉
  const clickMenuBtn = () => {
    toggleMenuOpen(!isMenuOpen)
  }

  // ハンバーガーメニューの各メニューを押したら閉じる
  const clickMenuContent = () => {
    toggleMenuOpen(false)
  }

  return (
    <div className={style.menu}>
      <div className={`${style.hm} ${isMenuOpen ? style.hm_o : null }`}>
        <label 
          className={`${style.hmb} ${isMenuOpen ? style.hmb_o : null }`}
          onClick={() => clickMenuBtn()}
        >
          <span className={`${style.span} ${isMenuOpen ? style.span_o : null }`}></span>
        </label>

        {/*  各カテゴリの遷移メニュー */}
        <div className={`${style.hmc} ${isMenuOpen ? style.hmc_o : null }`}>
          <ul>
            <li  onClick={() => clickMenuContent()}>
              <Link href='/'>
                TOP
              </Link>
            </li>
            <li  onClick={() => clickMenuContent()}>
              <Link href='/category/program/'>
                PROGRAM
              </Link>
            </li>
            <li  onClick={() => clickMenuContent()}>
              <Link href='/category/gadget/'>
                GADGET
              </Link>
            </li>
            <li  onClick={() => clickMenuContent()}>
              <Link href='/category/other/'>
                OTHER
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
