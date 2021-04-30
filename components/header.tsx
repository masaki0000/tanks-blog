import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.scss'
import HeaderTab from './parts/header_tab'
import HeaderHamburger from './parts/header_hambuerger'


function Header() {

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_title_wrapper}>
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
          <HeaderHamburger />
        </div>
        
      </header>
      <HeaderTab />
    </>
  )
    
  
}

export default Header;