import React from "react"
import '../styles/index.css';

export default function CardWork(props) {
    return (
        <div className="work__card">
            <h4 className="work__card__profession">{props.profession}</h4>
            <div className="work__card__items">
                {
                    props.companies.map(item => {
                        return (
                            <div className="work__card__item">
                                <h3 className="work__card__item__top">{item[0]}</h3>
                                <div className="work__card__item__bottom">
                                    <p className="work__card__item__bottom__place">{item[1]}</p>
                                    <p className="work__card__item__bottom__years">{item[2]}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}