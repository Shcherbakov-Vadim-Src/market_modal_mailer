import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function log_in() {
    return (
        <div>
            <div className={styles.header_background}>
                <div className={styles.main_conteiner}>
                    <Link href="/" passHref>
                        <div>
                            <div>
                                <Image src="/img/logo-image.png" className={styles.logo} alt="logo market" width="460px" height="170px" />
                            </div>
                        </div>
                    </Link>
                    <div className={styles.mainlink}>
                        <Link href="/faq" passHref>
                            <a name="welcome" className={styles.links_faq}>FAQ</a>
                        </Link>
                        <Link href="/log_in" passHref>
                            <a className={styles.link_log}>Log in</a>
                        </Link>
                    </div>
                </div>
            </div>
            <h2 className={styles.h2}>log in page</h2>
        </div>
    )
}
