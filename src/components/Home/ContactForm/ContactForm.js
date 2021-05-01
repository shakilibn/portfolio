import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import './ContactForm.css'
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const sendMessage = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d9rg24e', 'template_uff1tfa', e.target, 'user_hXIvwSed5ODR3MiaLJtHF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        alert('Thanks for message, I will contact you soon');
    }


    return (
        <section className="main-container p-3">
            < h2 className="text-center pt-5 brand-text"> Contact me</h2 >
            <h5 className="text-center mb-4 text-muted">If you wanna get in touch, talk to me about a project collaboration or just say hi</h5>

            <div className="d-flex justify-content-center">
                <form className="form-area" action="" onSubmit={sendMessage}>
                    <input type="text" name="name" className="form-control mb-3 input-style" placeholder="your name" />
                    <input type="text" name="email" className="form-control mb-3 input-style" placeholder="your email Address" />
                    <textarea className="form-control mb-3 input-style" name="message" id="" rows="5" placeholder="write your message"></textarea>
                    <div className="d-flex justify-content-end">
                        <input className="intro-btn" type="submit" value="Send message" />
                    </div>
                </form>
            </div>

        </section >
    );
};

export default ContactForm;