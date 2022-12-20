import React from "react"
import '../styles/index.css';

export default function Skills() {
    const [show, setShow] = React.useState(false)
    function open() {
        if(show === false) {setShow(!show)}
    }
    function close() {
        if(show === true) {setShow(!show)}
    }
    return (
        <section className={`skills ${show && "skills-active"}`} onClick={open}>
            <h2 className="skills__title">Skills</h2>
            <div className={`skills__content ${show && "display"}`}>
                <button className="skills__exit btn-round" onClick={close}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </section>
    )
}