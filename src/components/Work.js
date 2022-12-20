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
        <section className={`work ${show && "work-active"}`} onClick={open}>
            <h2 className="work__title">Work</h2>
            <div className={`work__content ${show && "display"}`}>
                <button className="work__exit btn-round" onClick={close}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </section>
    )
}