import Image from 'next/image'
import styles from '../styles/footer.module.scss'

// フッターコンポーネント
const Footer = () => {

  return (

    <div className={styles.footer_wrapper}>
      <div className={styles.footer}>
        <small>© 2021 TankBlog</small>
      </div>
    </div>
  )
    
  
}

export default Footer;