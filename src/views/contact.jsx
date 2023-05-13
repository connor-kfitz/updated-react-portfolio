import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [animateInputField, setAnimateInputField] = useState(false);

    const form = useRef();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    useEffect(() => {
        setTimeout(() => {
            if (animateInputField) setAnimateInputField(false);
        }, 300)
    },[animateInputField])

    const sendEmail = (e) => {
        e.preventDefault();

        if (checkInputFields()) {
            emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                clearForm();
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }
    }

    function updateInputField(type) {
        if (type === 'name') {
            setName(form.current.name.value);
        } else if (type ==='email') {
            setEmail(form.current.email.value);
        } else if (type === 'subject') {
            setSubject(form.current.subject.value);
        } else if (type === 'message') {
            setMessage(form.current.message.value);
        }
    }

    function checkInputFields() {
        var sendEmail = true
        if (!name) {
            sendEmail = false;
        }
        if (!email) {
            sendEmail = false;
        }
        if (!subject) {
            sendEmail = false;
        }
        if (!message) {
            sendEmail = false;
        }
        setAnimateInputField(true)
        return sendEmail
    }

    function clearForm() {
        form.current.reset();
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
                    <input type="text" name="name" className={`contact-form__name ${name ? 'contact-form__missing-info' : null} ${(!name && animateInputField) ? 'contact-form__animate' : null}`} 
                           placeholder="Name" onChange={() => updateInputField('name')}></input>
                    <input type="text" name="email" className={`contact-form__email ${email ? 'contact-form__missing-info' : null} ${(!email && animateInputField) ? 'contact-form__animate' : null}`} 
                           placeholder="Email" onChange={() => updateInputField('email')}></input>
                    <input type="text" name="subject" className={`contact-form__subject ${subject ? 'contact-form__missing-info' : null} ${(!subject && animateInputField) ? 'contact-form__animate' : null}`}
                           placeholder="Subject" onChange={() => updateInputField('subject')}></input>
                    <textarea name="message" className={`contact-form__message ${message ? 'contact-form__missing-info' : null} ${(!message && animateInputField) ? 'contact-form__animate' : null}`} 
                              placeholder="Message" onChange={() => updateInputField('message')}></textarea>
                </form>
                <button className="contact-form__send-button" onClick={sendEmail}>Send</button>
            </div>
        </section>
    )
}