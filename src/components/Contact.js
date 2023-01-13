import React from "react";
import '../styles/index.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const KEY = process.env.REACT_APP_CONTACT_KEY

export default function Contact() {
    const form = useRef();
    const [message, setMessage] = React.useState(false)

    function handleSubmit(event) {
        event.preventDefault();
        emailjs.sendForm('service_5twbmfd', 'template_ezp6l61', form.current, KEY)
          .then((result) => {
              console.log(result.text);
              setMessage(true)
          }, (error) => {
              console.log(error.text);
          });
    }

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
                        <form className="contact__card__form" onSubmit={handleSubmit} ref={form}>
                            <label className="contact__card__label" htmlFor="email">Your email</label>
                            <input 
                                className="contact__card__input" 
                                placeholder="your@email.com"
                                type="email" 
                                onChange={handleChange}
                                name="email"
                                id="email"
                                value={formData.name}
                                required 
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
                                required 
                            />
                            <button className="contact__card__btn btn-round" type="submit">
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                            <p className="contact__card__send">send</p>
                        </form>
                            {message &&
                                <div className="contact__card__message">
                                    <p>Your message has been send!</p>
                                    <p>Email: <span className="span">{formData.email}</span></p>
                                    <p>Message: <span className="span">{formData.message}</span></p>
                                </div>  
                            }
                    </div>
                </div>
            </div>
        </section>
    )
}