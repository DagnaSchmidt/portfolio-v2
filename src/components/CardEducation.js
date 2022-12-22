import React from "react"
import '../styles/index.css';

export default function CardEducation(props) {
    return (
        <div className="education__card">
            <h4 className="education__card__profession">{props.profession}</h4>
            <h3 className="education__card__school">{props.school}</h3>
            <h5 className="education__card__place">{props.place}</h5>
            <p className="education__card__year">{props.year}</p>
        </div>
    )
}