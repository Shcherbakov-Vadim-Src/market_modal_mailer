import styles from '../styles/Home.module.css'
import {useState} from "react";

export default function Form_modal() {

    let [nameValue, setName] = useState('');
    let [phoneValue, setPhone] = useState('');
    let [mailValue, setMail] = useState('');
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let [productValue, setProduct] = useState('');

    const getContacts = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = [...formData.values()];
        console.log('data', data);

        if (data[0] == null || data[0] == ''){
            setName('Please enter your name');
        }else{
            setName('')
        }
        if (data[1] == null || data[1].length === 0){
            setPhone('Please enter your phone');
        } else if ( typeof Number(data[1]) !== "number" ){
            setPhone('The correct form of the phone number is 84951234567');
        } else{
            setProduct('')
        }
        if (data[2] == null || data[2] == ''){
            setMail('Please enter your e-mail');
        } else if ( regex.test(String(data[2]).toLowerCase()) === false ){
            setMail('Please enter your valid e-mail')
        } else {
            setMail('')
        }
        if ( data[3] == null || data[3].length === 0 ){
            setProduct('Please enter your chosen product');
        }else{
            setProduct('')
        }

        let mail = {
            name: data[0],
            phone: data[1],
            mail: data[2],
            site: data[3]
        }

        console.log(mail);

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mail)
        })

    }


    return (
        <>
                <div className={styles.contacts_block}>
                    <div>
                        <div className={styles.contact_box}>
                            <form className={styles.flex_column} onSubmit={getContacts}>
                                <div className={styles.flex_column}>
                                    <div className={styles.flex_row}><label className={styles.lable}>You name</label><p className={styles.validity}>{nameValue}</p></div>
                                    <input name="input_name" className={styles.input_contact} type="text" placeholder="Enter your Name"/>
                                </div>
                                <div className={styles.flex_column}>
                                    <div className={styles.flex_row}><label className={styles.lable}>Phone number</label><p className={styles.validity}>{phoneValue}</p></div>
                                    <input name="input_name" className={styles.input_contact} type="text" placeholder="Enter your Phone"/>
                                </div>
                                <div className={styles.flex_column}>
                                    <div className={styles.flex_row}><label className={styles.lable}>You E-mail</label><p className={styles.validity}>{mailValue}</p></div>
                                    <input name="input_name" className={styles.input_contact} type="text" placeholder="Enter your E-mail"/>
                                </div>
                                <div className={styles.flex_column}>
                                    <div className={styles.flex_row}><label className={styles.lable}>Title of product</label><p className={styles.validity}>{productValue}</p></div>
                                    <input name="input_name" className={styles.input_contact} type="text" placeholder="Enter title of product"/>
                                </div>
                                <button type="submit" className={styles.button_submit_mail}>SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
        </>
    )

}