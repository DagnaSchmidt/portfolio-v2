import React from "react"
import '../styles/index.css';

export default function CardSkills(props) {
    return (
        <div className="skills__card">
            <div className="skills__card__top">
                <h4 className="skills__card__top__name">{props.title}</h4>
            </div>
            <ul className="skills__card__bottom">
                {props.skills.map(i => <li className="skills__card__bottom__item" key={i}>{i}</li>)}
            </ul>
        </div>
    )
}