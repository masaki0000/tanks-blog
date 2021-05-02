import styles from '../../styles/parts_styles/new_card.module.scss'
import utilStyles from '../../styles/utils.module.scss'
import BlogCard from './blog_card'

type Props = {
  newCardData: {
    id: string
    title: string
    date: string
    category: string
    image?: string
  }[]
}


// 各ページの新着欄のコンポーネント
export default function NewCard({ newCardData }: Props) {
  return (
    <section className={`${styles.new_card_wrapper} ${utilStyles.util_cnt_wrap}`}>

      {/* タイトル */}
      <h4 className={styles.container_name}>新着</h4>
      
      {/* 新着のカード表示 */}
      <div className={`${styles.container}`}>
        {newCardData.map(( postCardData, index ) => (
          <BlogCard
            key={index}
            newCard
            postCardData={ postCardData }
          />
        ))}
      </div>

    </section>

  )
}