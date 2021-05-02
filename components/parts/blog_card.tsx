import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/parts_styles/blog_card.module.scss'


type Props = {
  newCard?: boolean,

  postCardData: {
    id: string
    title: string
    date: string
    category: string
    image?: string
  }
}

// 新着欄用のclassName生成
const setSize = ( newCard ) => {
  if (newCard) {
    return (
      styles.new_blog_card_wrapper
    )
  }
}

// 各カテゴリ用のclassName生成
const setColor = ( category ) => {
  if (category === 'program') {
    return (
      styles.program_color
    )
  } else if (category === 'gadget') {
    return (
      styles.gadget_color
    )
  } else {
    return (
      styles.other_color
    )
  }
}

// ブログのサムネイル画像設定
const setImage = ( image ) => {
  if (image) {
    return (
      image
    )
  } else {
    return (
      'big_theme.png'
    )
  }
}


// ブログ一覧の各ブログ(ブログカード)のコンポーネント
export default function BlogCard({ postCardData, newCard }: Props) {
  return (
    <div className={`${styles.blog_card_wrapper} ${setSize(newCard)}`}>
      <div className={styles.blog_card}>
        
        {/* サムネイル画像 */}
        <Link href={`/posts/${postCardData.id}`}>
          <a className={styles.card_img_wrapper}>
            <div className={styles.card_img}>
              <Image
                className={styles.image}
                src={`/images/${setImage(postCardData.image)}`}
                layout='fill'
                objectFit='contain'
                alt="blog_img"
              />
            </div>
          </a>
        </Link>

        {/* ブログのタイトル(＋日付) */}
        <div className={`${styles.card_text} ${setColor(postCardData.category)}`}>
          <Link href={`/posts/${postCardData.id}`}>
            <a className={styles.card_text_title}>
                {postCardData.title}
            </a>
          </Link>
          <small className={styles.card_text_date}>
            {postCardData.date}
          </small>
        </div>

      </div>
    </div>
  
  )

}

