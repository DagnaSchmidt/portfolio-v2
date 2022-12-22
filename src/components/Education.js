import React from "react"
import '../styles/index.css';
import data from "../data/educationData";
import CardEducation from "./CardEducation";

export default function Education() {
    const [show, setShow] = React.useState(false)
    function open() {
        if(show === false) {setShow(!show)}
    }
    function close() {
        if(show === true) {setShow(!show)}
    }
    const cards = data.map(item => {
        return (
            <CardEducation
                profession={item.profession}
                school={item.school}
                place={item.place}
                year={item.year}
            />
        )
    })
    return (
        <section className={show ? "education-active" : "education"} onClick={open}>
            <h2 className={show ? "education-active__title" : "education__title"}>Education</h2>
            <div className={`education-active__content ${show && "display"}`}>
                <button className="education__exit btn-round btn-exit" onClick={close}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <div className="education__container">
                    {cards}
                </div>
            </div>
        </section>
    )
}