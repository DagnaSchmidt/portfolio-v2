import React from "react"
import '../styles/index.css';

export default function Contact() {
    const [show, setShow] = React.useState(false)
    function open() {
        if(show === false) {setShow(!show)}
    }
    function close() {
        if(show === true) {setShow(!show)}
    }
    const [formData, setFormData] = React.useState(
        {
            email: "",
            message: ""
        }
    )
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    return (
        <section className={`contact ${show && "active"}`} onClick={open}>
            <h2 className={`contact__title ${show && "active-title"}`}>Contact</h2>
            <div className={`contact__content ${show && "display"}`}>
                <button className="contact__exit btn-round btn-exit" onClick={close}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <div className="contact__container">
                    <div className="contact__card">
                        <form className="contact__card__form">
                            <label className="contact__card__label" htmlFor="name">Your email</label>
                            <input 
                                className="contact__card__input" 
                                placeholder="your@email.com"
                                type="email" 
                                onChange={handleChange}
                                name="name"
                                id="name"
                                value={formData.name} 
                            />
                            <label className="contact__card__label" htmlFor="message">Your message</label>
                            <input 
                                className="contact__card__input" 
                                placeholder="message"
                                type="text"
                                onChange={handleChange}
                                name="message"
                                id="message"
                                value={formData.message} 
                            />
                            <button className="contact__card__btn btn-round">
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                            <p className="contact__card__send">send</p>
                        </form>
                        <div className="contact__card__message"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}