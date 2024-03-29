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
    const [about, setAbout] = React.useState(false)
    function toggle() {
        setAbout(!about)
    }
    return (
        <section className={`about ${show && "active"}`} onClick={open}>
            <h2 className={`about__title ${show && "active-title"}`}>About</h2>
            <div className={`about__content ${show && "display"}`}>
                <button className="about__exit btn-round btn-exit" onClick={close}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <button className={`about__more btn-round ${about && "move"}`} onClick={toggle}>
                    {about ? <i className='fa-solid fa-arrow-right'></i> : <i className="fa-solid fa-arrow-left"></i>}
                </button>
                <div className="about__container">
                    <div className="about__short">
                        <p>Junior Full-stack located in Goteborg, Sweden.</p>
                        <p>Experienced in Interior Design, UI design, 
                        Jewelry Design and as a Dental Technician.
                        With passion for Analog Photography.</p>
                        <p>Professional athlete, multimedalist 
                        of Polish Championships, former member 
                        of Polish Powerlifting National Team.</p>
                    </div>
                    <img className="about__img" src={require(`../images/portret.png`)} alt="my profile" />
                </div>
                <div className={`about__long ${about && "visible"}`}>
                    <p>My name is Dagna Schmidt, I am 33 years old and have been living in Göteborg, Sweden for just over a two years.</p>
                    <p>During eleven years of living in Warsaw, I was gaining my education and professional experience. 
                    As a very curious person I have worked and developed in many different fields and professions. 
                    They all had one thing in common: creating beautiful things that give the user a unique experience.</p>
                    <p>I am a really meticulous person, with good eye for details and head always full of new ideas, 
                    in love with never ending process of self developing.</p>
                    <p>My experience as a professional athlete learned me to perform my best on stressful situations. 
                    I am also used to have hard to achieve, long-term goals.</p>
                    <p>Looking forward, I aspire to be part of teams working towards creating innovative solutions 
                    leveraging modern technologies. Whether developing web or mobile applications, I always strive to 
                    deliver high-quality output while staying up-to-date with the latest design trends, coding practices, 
                    and emerging tools.</p>
                </div>
            </div>
        </section>
    )
}