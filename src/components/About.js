import React from "react"
import '../styles/index.css';

export default function About() {
    const [show, setShow] = React.useState(false)
    function open() {
        if(show === false) {setShow(!show)}
    }
    function close() {
        if(show === true) {setShow(!show)}
    }
    return (
        <section className={show ? "about-active" : "about"} onClick={open}>
            <h2 className={show ? "about-active__title" : "about__title"}>About</h2>
            <div className={`about-active__content ${show && "display"}`}>
                <button className="about__exit btn-round btn-exit" onClick={close}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </section>
    )
}