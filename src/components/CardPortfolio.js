import React from "react"
import '../styles/index.css';

export default function CardPortfolio(props) {
    const [text, setText] = React.useState(false)
    function toggle() {
        setText(!text)
    }
    return (
        <div className="portfolio__card">
            <div className="portfolio__card__top">
                <a className="portfolio__card__top__link" href={props.link} target="_blank" rel="noreferrer">
                    <img className="portfolio__card__top__img" src={require(`../images/${props.img}`)} alt="site screenshot" />
                    <p className="portfolio__card__top__demo">check demo</p>
                </a>
            </div>
            <div className="portfolio__card__bottom">
                <h3 className="portfolio__card__bottom__title">{props.title}</h3>
                <p className="portfolio__card__bottom__read">
                    read {text ? "less" : "more"}
                </p>
            </div>
            <button className={`portfolio__card__btn btn-round ${text && "left"}`} onClick={toggle}>
                {text ? <i className='fa-solid fa-arrow-right'></i> : <i className="fa-solid fa-arrow-left"></i>}
            </button>
            <div className={`portfolio__card__text ${text && "move"}`}>
                <p className="portfolio__card__text__description">{props.description}</p>
                <p className="portfolio__card__text__programs">Built on: <span className="bold">{props.programs}</span>.</p>
            </div>
        </div>
    )
}