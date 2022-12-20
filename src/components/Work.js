import React from "react"
import '../styles/index.css';

export default function Work() {
    const [show, setShow] = React.useState(false)
    function open() {
        if(show === false) {setShow(!show)}
    }
    function close() {
        if(show === true) {setShow(!show)}
    }
    return (
        <section className={show ? "work-active" : "work"} onClick={open}>
            <h2 className={show ? "work-active__title" : "work__title"}>Work</h2>
            <div className={`work-active__content ${show && "display"}`}>
                <button className="work__exit btn-round btn-exit" onClick={close}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </section>
    )
}