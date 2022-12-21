import React from "react"
import '../styles/index.css';

export default function About() {
    const [show, setShow] = React.useState(false)
    function open() {
        if(show === false) {setShow(!show)}
    }
    function close() {
        if(show === true) {setShow(!show)}
    }
    return (
        <section className={show ? "about-active" : "about"} onClick={open}>
            <h2 className={show ? "about-active__title" : "about__title"}>About</h2>
            <div className={`about-active__content ${show && "display"}`}>
                <button className="about__exit btn-round btn-exit" onClick={close}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <button className="about__more btn-round">

                </button>
                <div className="about__container">
                    <div className="about__short">
                        <p>Junior Web Developer located in Goteborg, Sweden.</p>
                        <p>Experienced in Interior Design, 
                        Jewelry Design and as a Dental Technician. 
                        With passion for Analog Photography.</p>
                        <p>Professional athlete, multimedalist 
                        of Polish Championships, former member 
                        of Polish Powerlifting National Team.</p>
                    </div>
                    <img className="about__img" src={require(`../images/portret.png`)} />
                </div>
                <p className="about__long">

                </p>
            </div>
        </section>
    )
}