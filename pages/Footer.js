import styles from '../styles/Home.module.css'
import Image from "next/image";


export default function Footer() {

    return (
        <>
            <div className={styles.footer}>
                <div className={styles.networks_div}>
                    <div className={styles.network_box_face}>
                        <a href="https://www.facebook.com/k"><Image src="/img/facebook.png" alt="Facebook" width="20px" height="20px" /></a>
                    </div>
                    <div className={styles.network_box_twit}>
                        <a href="https://twitter.com/"><Image src="/img/twitter.png" alt="Twitter" width="20px" height="20px" /></a>
                    </div>
                    <div className={styles.network_box_red}>
                        <a href="https://www.linkedin.com/"><Image src="/img/reddit.png" alt="Reddit" width="25px" height="25px" /></a>
                    </div>
                </div>
                <div className={styles.footer_menu_box_sub}>
                    <p className={styles.city}><a name="contact">Москва</a></p>
                    <p className={styles.years}>2021 (Все права защищены)</p>
                </div>
                <div className={styles.adress_row}>
                    <p className={styles.address}> 180575 Москва, ул. Гостиный двор, 4</p>
                    <p className={styles.address}>E-mail: support@divany.ru</p>
                    <p className={styles.address}>Phone: +7 495 501 01 01</p>
                </div>
            </div>
        </>
    )

}