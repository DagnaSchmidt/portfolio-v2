import React from "react"
import '../styles/index.css';
import data from "../data/portfolioData";
import CardPortfolio from "./CardPortfolio";

export default function Portfolio() {
    const [show, setShow] = React.useState(false)
    function open() {
        if(show === false) {setShow(!show)}
    }
    function close() {
        if(show === true) {setShow(!show)}
    }
    const cards = data.map(item => {
        return (
            <CardPortfolio
                img={item.img}
                description={item.description}
                programs={item.programs}
                title={item.title}
                link={item.link}
            />
        )
    })
    return (
        <section className={`portfolio ${show && "active"}`} onClick={open}>
            <h2 className={`portfolio__title ${show && "active-title"}`}>Portfolio</h2>
            <div className={`portfolio__content ${show && "display"}`}>
                <button className="portfolio__exit btn-round btn-exit" onClick={close}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <div className="portfolio__container">
                    {cards}
                </div>
            </div>
        </section>
    )
}