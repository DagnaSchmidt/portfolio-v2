import React from "react"
import '../styles/index.css';

export default function Education() {
    const [show, setShow] = React.useState(false)
    function open() {
        if(show === false) {setShow(!show)}
    }
    function close() {
        if(show === true) {setShow(!show)}
    }
    return (
        <section className={`education ${show && "education-active"}`} onClick={open}>
            <h2 className="education__title">Education</h2>
            <div className={`education__content ${show && "display"}`}>
                <button className="education__exit btn-round" onClick={close}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </section>
    )
}