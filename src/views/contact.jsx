export default function Contact() {

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
                <form className="contact-form">
                    <input type="text" className="contact-form__name" placeholder="Name"></input>
                    <input type="text" className="contact-form__email" placeholder="Email"></input>
                    <input type="text" className="contact-form__subject" placeholder="Subject"></input>
                    <textarea className="contact-form__message" placeholder="Message"></textarea>
                </form>
                <button className="contact-form__send-button">Send</button>
            </div>
        </section>
    )
}