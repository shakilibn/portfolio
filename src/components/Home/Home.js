import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import Projects from '../Projects/Projects/Projects'
import ContactForm from '../ContactForm/ContactForm';

const Home = () => {
    return (
        <div>
            <Header />
            <Projects />
            <ContactForm />
        </div>
    );
};

export default Home;