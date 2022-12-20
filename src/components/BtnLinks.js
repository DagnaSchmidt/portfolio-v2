import React from "react"
import '../styles/index.css';

export default function BtnLinks(props) {
    return (
        <a href={props.link} target="_blank" className="btn-round" rel="noreferrer">
            <i className={props.logo}></i>
        </a>
    )
}