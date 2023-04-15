import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <h2 className="contact-container__header">Contact</h2>
                <div className="contact-container__phone-number">
                    Cell: <span className="contact-container__phone-number-text">289-200-5210</span>
                </div>
                <div className="contact-container__email">
                    Email: <span className="contact-container__email-text">connorkfitzsimmons@gmail.com</span>
                </div>
                <form className="contact-form" ref={form}>
                    <input type="text" name="name" className="contact-form__name" placeholder="Name"></input>
                    <input type="text" name="email" className="contact-form__email" placeholder="Email"></input>
                    <input type="text" name="subject" className="contact-form__subject" placeholder="Subject"></input>
                    <textarea name="message" className="contact-form__message" placeholder="Message"></textarea>
                </form>
                <button className="contact-form__send-button" onClick={sendEmail}>Send</button>
            </div>
        </section>
    )
}