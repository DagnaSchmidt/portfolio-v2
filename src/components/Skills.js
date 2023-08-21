import React from "react"
import '../styles/index.css';
import CardSkills from "./CardSkills";
import data from "../data/skillsData";

export default function Skills() {
    const [show, setShow] = React.useState(false)
    function open() {
        if(show === false) {setShow(!show)}
    }
    function close() {
        if(show === true) {setShow(!show)}
    }
    const cards = data.map(item => {
        return (
            <CardSkills
                key={item.id}
                title={item.title}
                skills={item.skills}
            />
        )
    })
    return (
        <section className={`skills ${show && "active"}`} onClick={open}>
            <h2 className={`skills__title ${show && "active-title"}`}>Skills</h2>
            <div className={`skills__content ${show && "display"}`}>
                <button className="skills__exit btn-round btn-exit" onClick={close}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <div className="skills__container">
                    {cards}
                </div>
            </div>
        </section>
    )
}