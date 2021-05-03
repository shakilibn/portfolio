import { Button } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react';
import './ContactForm.css'
import emailjs from 'emailjs-com';
import ParticleBackground from '../../ParticleBackground/ParticleBackground';
import lottie from 'lottie-web';

const ContactForm = () => {
    const container = useRef(null);

    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../images/animation/contact.json')
        })
    },[])

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
            <ParticleBackground />

            <div className="row">
                <div className="col-md-6">

                    < h2 className="text-center pt-5 brand-text"> Contact me</h2 >
                    <h5 className="text-center mb-4 text-muted pb-4">If you wanna get in touch, talk to me about a project collaboration or just say hi</h5>

                    <div className="d-flex justify-content-center">
                        <form className="form-area" action="" onSubmit={sendMessage}>
                            <input style={{ transform: 'scale(1)' }} type="text" name="name" className="form-control mb-3 input-style" placeholder="your name" />
                            <input style={{ transform: 'scale(1)' }} type="text" name="email" className="form-control mb-3 input-style" placeholder="your email Address" />
                            <textarea className="form-control mb-3 input-style" name="message" id="" rows="5" placeholder="write your message"></textarea>
                            <div className="d-flex justify-content-end">
                                <input style={{ zIndex: 1 }} className="intro-btn" type="submit" value="Send message" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="container" ref={container}></div>
                </div>
            </div>

        </section >
    );
};

export default ContactForm;