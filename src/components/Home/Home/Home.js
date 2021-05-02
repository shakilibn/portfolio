import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import AllProjectsDetails from '../../AllProjectsDetails/AllProjectsDetails/AllProjectsDetails'
import ContactForm from '../ContactForm/ContactForm';
import Projects from '../../Projects/Projects/Projects';
import ParticleBackground from '../../ParticleBackground/ParticleBackground';

const Home = () => {
    return (
        <div>
            <ParticleBackground />
            <Header />
            <Projects />
            <AllProjectsDetails />
            <ContactForm />
        </div>
    );
};

export default Home;