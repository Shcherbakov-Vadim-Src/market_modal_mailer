import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from '../styles/Home.module.css';


const Modal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = show ? (
        <div className={styles.modal_div}>
            <div className={styles.modal_inner}>
                <div className={styles.modal_header}>
                    <a href="#" onClick={handleCloseClick}>
                        x
                    </a>
                </div>
                {title && <h1>{title}</h1>}
                <div>{children}</div>
            </div>
        </div>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
};

export default Modal;