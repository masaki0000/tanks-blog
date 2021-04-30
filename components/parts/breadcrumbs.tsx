import { FaChevronRight } from "react-icons/fa";
import styles from '../../styles/parts_styles/breadcrumbs.module.scss';



type Props = {
  lists: {
    string: string
    path: string
  }[]
}

export default function BreadCrumbs({ lists }: Props) {
  return (
    <>
      <ol className={styles.bc_ol}>
        {lists.map(({ string, path }, index) => (
            <li className={styles.bc_li} key={index}>
              {lists.length - 1 !== index 
                ?
                <>
                  <a className={styles.bc_a} href={path}>{string}</a>
                  {/* <FaChevronRight aria-hidden="true" className={styles.fache} /> */}
                  <div className={styles.arrow}>&nbsp; &gt; &nbsp;</div>
                </>
                : <span className={styles.bc_span} aria-current="page">{string}</span>
              }
            </li>
        ))}
      </ol>
    </>
  )
}