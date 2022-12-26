import React from "react"
import '../styles/index.css';
import data from "../data/workData";
import CardWork from "./CardWork";

export default function Work() {
    const [show, setShow] = React.useState(false)
    function open() {
        if(show === false) {setShow(!show)}
    }
    function close() {
        if(show === true) {setShow(!show)}
    }
    const cards = data.map(item => {
        return (
            <CardWork
                profession={item.profession}
                companies={item.companies}
            />
        )
    })
    return (
        <section className={`work ${show && "active"}`} onClick={open}>
            <h2 className={`work__title ${show && "active-title"}`}>Work</h2>
            <div className={`work__content ${show && "display"}`}>
                <button className="work__exit btn-round btn-exit" onClick={close}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <div className="work__container">
                    {cards}
                </div>
            </div>
        </section>
    )
}