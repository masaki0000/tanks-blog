import Link from 'next/link'
import style from '../../styles/parts_styles/header_tab.module.scss'

const HeaderTab = () => {

  return (
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



export default HeaderTab;