import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {useState} from "react";
import Modal from "./ModalContainer";
import Form_modal from "./Form_modal";


export default function Card() {

    const [showModal, setShowModal] = useState(false);


    return (
        <>
                <div className={styles.armchair_box_card}>
                    <div>
                        <Image src="/img/armchair.png" alt="armchair" width="210px" height="290px" />
                    </div>
                    <div>
                        <p className={styles.armchair_about}>Парикмахерское кресло "Норм" гидравлическое</p>
                        <p className={styles.armchair_price}>9 990 ₽</p>
                    </div>
                    <div>
                        <button className={styles.button_submit}
                                onClick={() => setShowModal(true)}>Купить</button>
                        <Modal
                            onClose={() => setShowModal(false)}
                            show={showModal}
                        >
                            <Form_modal />
                        </Modal>
                    </div>
                </div>
        </>
    )

}

