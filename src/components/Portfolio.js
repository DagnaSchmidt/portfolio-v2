import React from "react"
import '../styles/index.css';

export default function Portfolio() {
    const [show, setShow] = React.useState(false)
    function open() {
        if(show === false) {setShow(!show)}
    }
    function close() {
        if(show === true) {setShow(!show)}
    }
    return (
        <section className={show ? "portfolio-active" : "portfolio"} onClick={open}>
            <h2 className={show ? "portfolio-active__title" : "portfolio__title"}>Portfolio</h2>
            <div className={`portfolio-active__content ${show && "display"}`}>
                <button className="portfolio__exit btn-round btn-exit" onClick={close}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </section>
    )
}