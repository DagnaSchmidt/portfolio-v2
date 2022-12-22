import React from "react"
import '../styles/index.css';

export default function CardSkills(props) {
    return (
        <div className="skills__card">
            <div className="skills__card__top">
                <h4 className="skills__card__top__name">{props.name}</h4>
                <p className="skills__card__top__percent">{props.percent}%</p>
            </div>
            <div className="skills__card__bottom">
                <div className="skills__card__bottom__bar-percent" style={{width: `${props.percent}%`}}></div>
                <div className="skills__card__bottom__bar-bg"></div>
            </div>
        </div>
    )
}