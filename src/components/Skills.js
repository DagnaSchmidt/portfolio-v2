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
                name={item.name}
                percent={item.percent}
            />
        )
    })
    return (
        <section className={show ? "skills-active" : "skills"} onClick={open}>
            <h2 className={show ? "skills-active__title" : "skills__title"}>Skills</h2>
            <div className={`skills-active__content ${show && "display"}`}>
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