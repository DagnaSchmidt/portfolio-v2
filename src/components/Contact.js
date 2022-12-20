import React from "react"
import '../styles/index.css';

export default function Contact() {
    const [show, setShow] = React.useState(false)
    function open() {
        if(show === false) {setShow(!show)}
    }
    function close() {
        if(show === true) {setShow(!show)}
    }
    return (
        <section className={show ? "contact-active" : "contact"} onClick={open}>
            <h2 className={show ? "contact-active__title" : "contact__title"}>Contact</h2>
            <div className={`contact-active__content ${show && "display"}`}>
                <button className="contact__exit btn-round btn-exit" onClick={close}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </section>
    )
}