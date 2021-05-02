import React from 'react';
import './About.css'
import img from '../../images/myPic.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ParticleBackground from '../ParticleBackground/ParticleBackground';

const comfortable = ['JavaScript', 'ES6', 'React.js', 'React Router', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'HTML', 'CSS'];
const familiar = ['React native', 'Map API', 'SQL', 'Material Design', 'SASS', 'OOP', 'Data Structuring'];
const others = ['Firebase', 'Netlify', 'Heroku', 'Github', 'VS Code', 'Photoshop', 'Illustrator'];

const About = () => {
    return (
        <div className="main-container">
            <ParticleBackground />
            <div className="row p-5">
                <div className="col-md-6 p-3">
                    <img className="img-fluid rounded-circle mb-5" src={img} alt="" style={{ height: '200px' }} />
                    <h3 className="mb-3">I am <span className="brand-text">Safiqul Islam</span></h3>
                    <p className="my-5">A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                    <Link to="/contact"><button className="intro-btn mr-3 mb-3">Contact me</button></Link>
                    <a href="https://drive.google.com/uc?export=download&id=17IK_1oRnQO_Yo8oRA3oORuYYiML_SGSn"><button className="intro-btn">Get Resume</button></a>
                    <div className="mt-5 pt-3">
                        <a href="https://github.com/shakilibn" target="_blank"><FontAwesomeIcon className="text-white fa-2x mr-3" icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/in/safiqul-islam-shakil-bab781210/" target="_blank"><FontAwesomeIcon className="text-white fa-2x" icon={faLinkedin} /></a>
                    </div>
                </div>
                <div className="col-md-6 p-3">
                    <h3 className="brand-text">My Skills Set</h3>
                    <hr />
                    <h5>Comfortable</h5>
                    <ul className="technologies">
                        {
                            comfortable.map(item => <li>{item}</li>)
                        }
                    </ul>

                    <h5 className="mt-4">Familiar</h5>
                    <ul className="technologies">
                        {
                            familiar.map(item => <li>{item}</li>)
                        }
                    </ul>

                    <h5 className="mt-4">Others</h5>
                    <ul className="technologies">
                        {
                            others.map(item => <li>{item}</li>)
                        }
                    </ul>
                    <span className="d-flex justify-content-center"><Link to="/projects"><button className="intro-btn mr-3">My Projects</button></Link></span>
                </div>
            </div>
            <p className="text-center">Designed & Developed by <span className="brand-text">Safiqul islam</span></p>
        </div>
    );
};

export default About;