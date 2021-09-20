import styles from '../styles/Home.module.css'
import Card from "./Card";

export default function Cards() {


    return (
        <>
            <div className={styles.market_block}>
                <a name="market" className={styles.armchair_market_header}>Выбор товара</a>
                <div className={styles.armchair_box_cards}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )

}