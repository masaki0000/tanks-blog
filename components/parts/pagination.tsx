import Link from 'next/link';
import styles from '../../styles/parts_styles/pagination.module.scss'


type Props = {
  perPage: number
  dirName: string
  nowPage: number
  totalCount: number
}


// ページングコンポーネント
export const Pagination = ({ perPage,dirName,nowPage,totalCount }: Props) => {

  const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul className={styles.pagination}>
      {range(1, Math.ceil(totalCount / perPage)).map((number, index) => (

        <li key={index}>
          {(() => {
            // 現在開いているページ
            if (number === nowPage) {
              return <p className={styles.pageButton}>{number}</p>
            
            // 1ページ目
            } else if (number === 1) {
              
              // 全カテゴリ(TOPカテゴリ)
              if (dirName === 'top') {
                return (
                  <Link href={ `/`}>
                    <a>{number}</a>
                  </Link>
                )
              
              // TOP以外の各カテゴリ
              } else {
                return (
                  <Link href={ `/category/${dirName}/`}>
                    <a>{number}</a>
                  </Link>
                )
              }
            
            // 2ページ目以降
            } else {

              // 全カテゴリ(TOPカテゴリ)
              if (dirName === 'top') {
                return (
                  <Link
                    href={ `/page/${number}`}
                  >
                    <a>{number}</a>
                  </Link>
                )
              
              // TOP以外の各カテゴリ
              } else {
                return (
                  <Link href={ `/category/${dirName}/page/${number}`}>
                    <a>{number}</a>
                  </Link>
                )
              }
            }
          })()}
        </li>
      ))}
    </ul>
  )
}