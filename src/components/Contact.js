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
        <section className={`contact ${show && "contact-active"}`} onClick={open}>
            <h2 className="contact__title">Contact</h2>
            <div className={`contact__content ${show && "display"}`}>
                <button className="contact__exit btn-round" onClick={close}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </section>
    )
}