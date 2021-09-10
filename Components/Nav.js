import styles from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.brandname}><i className={styles.logo}><Link href="/">G</Link></i><p className={styles.webname}>GPA CALCULATOR</p></div>
            <div className={styles.nav}>
                <div className={styles.link}><Link href='/info'>?</Link></div>
            </div>
            
        </div>
    )
}

export default Nav